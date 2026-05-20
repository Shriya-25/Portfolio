'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, MapPin, Sparkles, GraduationCap, LucideIcon } from 'lucide-react';
import { PERSONAL_INFO, SOCIAL_LINKS } from '@/lib/constants';
import GlowCard from '@/components/ui/GlowCard';
import { memo, useMemo } from 'react';

// Pre-compute social links
const linkedInUrl = SOCIAL_LINKS.find(l => l.name === 'LinkedIn')?.url || '#';
const gitHubUrl = SOCIAL_LINKS.find(l => l.name === 'GitHub')?.url || '#';

interface SocialLinkItem {
  name: string;
  icon: LucideIcon;
  href: string;
  label: string;
  isExternal: boolean;
}

const socialLinks: SocialLinkItem[] = [
  { name: 'Email', icon: Mail, href: `mailto:${PERSONAL_INFO.email}`, label: 'Email Shriya Sandesh Kulkarni', isExternal: false },
  { name: 'LinkedIn', icon: Linkedin, href: linkedInUrl, label: 'LinkedIn Profile', isExternal: true },
  { name: 'GitHub', icon: Github, href: gitHubUrl, label: 'GitHub Profile', isExternal: true },
];

const ProfileCard = memo(function ProfileCard() {
  const locationString = useMemo(() =>
    `${PERSONAL_INFO.location.city}, ${PERSONAL_INFO.location.state}, ${PERSONAL_INFO.location.country}`,
    []
  );

  const profileAlt = useMemo(() =>
    `${PERSONAL_INFO.name} - ${PERSONAL_INFO.jobTitle}`,
    []
  );

  return (
    <GlowCard
      className="bg-[#141414] border border-white/[0.06] rounded-xl xs:rounded-2xl sm:rounded-3xl w-full h-full"
      glowColor="rgba(249, 115, 22, 0.6)"
      glowSize={280}
    >
      <motion.div
        className="relative p-4 xs:p-5 sm:p-6 md:p-8 h-full"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        {/* Top accent line */}
        <div className="absolute top-0 left-4 right-4 xs:left-5 xs:right-5 sm:left-6 sm:right-6 md:left-8 md:right-8 h-[1px] bg-gradient-to-r from-transparent via-white/[0.08] to-transparent" />

        {/* Profile Section */}
        <div className="flex flex-col items-center">
          {/* Profile Image */}
          <div className="relative w-24 h-24 xs:w-28 xs:h-28 sm:w-36 sm:h-36 md:w-40 md:h-40 lg:w-48 lg:h-48 mb-3 xs:mb-4 sm:mb-5 md:mb-6">
            {/* Animated gradient ring */}
            <div
              className="absolute -inset-[2px] xs:-inset-[3px] rounded-full animate-border-rotate"
              style={{
                background: 'conic-gradient(from var(--border-angle, 0deg), #f97316 0%, #ef4444 25%, #ec4899 50%, #8b5cf6 75%, #f97316 100%)',
              }}
            />
            {/* Dark ring gap */}
            <div className="absolute inset-0 rounded-full bg-[#141414]" />
            {/* Profile picture */}
            <div className="absolute inset-[2px] xs:inset-[3px] rounded-full overflow-hidden">
              <Image
                src="/images/profile/profile.jpg"
                alt={profileAlt}
                width={256}
                height={256}
                className="w-full h-full object-cover"
                priority
              />
            </div>
            {/* Online status dot */}
            <div className="absolute bottom-0.5 right-0.5 xs:bottom-1 xs:right-1 sm:bottom-2 sm:right-2 w-3 h-3 xs:w-3.5 xs:h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 rounded-full bg-emerald-500 border-2 xs:border-[3px] border-[#141414] z-10">
              <span className="absolute inset-0 rounded-full bg-emerald-500 animate-ping opacity-40" />
            </div>
          </div>

          {/* Name */}
          <h3
            className="text-base xs:text-lg sm:text-xl md:text-2xl font-bold text-white mb-1 xs:mb-1.5"
            style={{ fontFamily: 'var(--font-jakarta), "Plus Jakarta Sans", sans-serif', fontWeight: 700 }}
          >
            {PERSONAL_INFO.name}
          </h3>

          {/* Job Title Badge */}
          <div className="inline-flex items-center gap-1 xs:gap-1.5 px-2 xs:px-2.5 sm:px-3 py-0.5 xs:py-1 rounded-full bg-white/[0.04] border border-white/[0.08] mb-2 xs:mb-3">
            <Sparkles className="w-2.5 h-2.5 xs:w-3 xs:h-3 text-orange-400" />
            <span className="text-[9px] xs:text-[10px] sm:text-xs text-white/50 font-medium">{PERSONAL_INFO.jobTitle}</span>
          </div>

          {/* Location */}
          <div className="flex items-center gap-1 xs:gap-1.5 text-white/35 mb-1.5 xs:mb-2">
            <MapPin className="w-2.5 h-2.5 xs:w-3 xs:h-3 flex-shrink-0" />
            <span className="text-[9px] xs:text-[10px] sm:text-xs">{locationString}</span>
          </div>

          {/* Education */}
          <div className="flex items-center gap-1 xs:gap-1.5 text-white/35 mb-3 xs:mb-4 sm:mb-5 md:mb-6">
            <GraduationCap className="w-2.5 h-2.5 xs:w-3 xs:h-3 flex-shrink-0" />
            <span className="text-[9px] xs:text-[10px] sm:text-xs text-center leading-tight">
              AISSMS Institute of Information Technology, Pune
            </span>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-1.5 xs:gap-2">
            {socialLinks.map(({ name, icon: Icon, href, label, isExternal }) => (
              <a
                key={name}
                href={href}
                target={isExternal ? '_blank' : undefined}
                rel={isExternal ? 'noopener noreferrer' : undefined}
                className="w-7 h-7 xs:w-8 xs:h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-full bg-white/[0.04] hover:bg-white/[0.1] border border-white/[0.06] hover:border-white/[0.15] transition-all duration-300 flex items-center justify-center group"
                aria-label={label}
              >
                <Icon className="w-3 h-3 xs:w-3.5 xs:h-3.5 sm:w-4 sm:h-4 text-white/40 group-hover:text-white/80 transition-colors" />
              </a>
            ))}
          </div>
        </div>
      </motion.div>
    </GlowCard>
  );
});

export default ProfileCard;
