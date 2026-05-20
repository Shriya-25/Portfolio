import { NextResponse } from 'next/server';

const GITHUB_USERNAME = 'Shriya-25';
const GITHUB_TOKEN = process.env.GITHUB_TOKEN;

interface ContributionDay {
  date: string;
  contributionCount: number;
  color?: string;
}

interface ContributionWeek {
  contributionDays: ContributionDay[];
}

function getColor(count: number): string {
  if (count === 0) return '#161b22';
  if (count < 4) return '#0e4429';
  if (count < 7) return '#006d32';
  if (count < 10) return '#26a641';
  return '#39d353';
}

function calculateStreaks(days: ContributionDay[]) {
  let currentStreak = 0;
  let longestStreak = 0;
  let tempStreak = 0;

  const sortedDays = [...days].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  for (const day of sortedDays) {
    const dayDate = new Date(day.date);
    dayDate.setHours(0, 0, 0, 0);
    if (dayDate > today) continue;
    if (day.contributionCount > 0) {
      currentStreak++;
    } else {
      break;
    }
  }

  for (const day of days) {
    if (day.contributionCount > 0) {
      tempStreak++;
      longestStreak = Math.max(longestStreak, tempStreak);
    } else {
      tempStreak = 0;
    }
  }

  return { currentStreak, longestStreak };
}

async function fetchViaGraphQL() {
  if (!GITHUB_TOKEN) throw new Error('No token');

  const query = `
    query($username: String!) {
      user(login: $username) {
        contributionsCollection {
          contributionCalendar {
            totalContributions
            weeks {
              contributionDays {
                contributionCount
                date
                color
              }
            }
          }
        }
      }
    }
  `;

  const response = await fetch('https://api.github.com/graphql', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${GITHUB_TOKEN}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ query, variables: { username: GITHUB_USERNAME } }),
    next: { revalidate: 3600 },
  });

  if (!response.ok) throw new Error(`GitHub API error: ${response.status}`);

  const data = await response.json();
  if (data.errors) throw new Error(data.errors[0].message);

  const calendar = data.data.user.contributionsCollection.contributionCalendar;
  const allDays = calendar.weeks.flatMap((w: ContributionWeek) => w.contributionDays);
  const { currentStreak, longestStreak } = calculateStreaks(allDays);

  return {
    totalContributions: calendar.totalContributions,
    weeks: calendar.weeks,
    currentStreak,
    longestStreak,
  };
}

async function fetchViaPublicAPI() {
  // Use github-contributions-api (public, no token needed)
  const response = await fetch(
    `https://github-contributions-api.jogruber.de/v4/${GITHUB_USERNAME}?y=last`,
    { next: { revalidate: 3600 } }
  );

  if (!response.ok) throw new Error(`Public API error: ${response.status}`);

  const data = await response.json();

  // data.contributions is an array of { date, count, level }
  // Group into weeks (7-day chunks)
  const contributions: { date: string; count: number }[] = data.contributions;

  // Build weeks array (Sunday-first, 52 weeks)
  const weeks: ContributionWeek[] = [];
  let currentWeek: ContributionDay[] = [];

  for (const c of contributions) {
    const day = new Date(c.date);
    const dayOfWeek = day.getDay(); // 0 = Sunday

    if (dayOfWeek === 0 && currentWeek.length > 0) {
      weeks.push({ contributionDays: currentWeek });
      currentWeek = [];
    }

    currentWeek.push({
      date: c.date,
      contributionCount: c.count,
      color: getColor(c.count),
    });
  }

  if (currentWeek.length > 0) {
    weeks.push({ contributionDays: currentWeek });
  }

  const allDays = weeks.flatMap((w) => w.contributionDays);
  const totalContributions = allDays.reduce((sum, d) => sum + d.contributionCount, 0);
  const { currentStreak, longestStreak } = calculateStreaks(allDays);

  return { totalContributions, weeks, currentStreak, longestStreak };
}

export async function GET() {
  try {
    // Try GraphQL first (if token available), then fall back to public API
    try {
      const data = await fetchViaGraphQL();
      return NextResponse.json(data);
    } catch {
      // GraphQL failed (no token or error) — try public API
      const data = await fetchViaPublicAPI();
      return NextResponse.json(data);
    }
  } catch (error) {
    console.error('Error fetching GitHub contributions:', error);
    return NextResponse.json(
      { error: 'Failed to fetch GitHub contributions' },
      { status: 500 }
    );
  }
}
