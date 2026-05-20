'use client';

import { createContext, useContext, useState, useCallback, useEffect, ReactNode } from 'react';
import { usePathname } from 'next/navigation';

interface IntroAnimationContextType {
  isIntroComplete: boolean;
  completeIntro: () => void;
}

const IntroAnimationContext = createContext<IntroAnimationContextType>({
  isIntroComplete: true,
  completeIntro: () => {},
});

export function IntroAnimationProvider({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const isHomePage = pathname === '/';
  const [isIntroComplete, setIsIntroComplete] = useState(!isHomePage);

  const completeIntro = useCallback(() => {
    setIsIntroComplete(true);
  }, []);

  // If navigating away from home, ensure intro is complete
  useEffect(() => {
    if (!isHomePage) {
      setIsIntroComplete(true);
    }
  }, [isHomePage]);

  return (
    <IntroAnimationContext.Provider value={{ isIntroComplete, completeIntro }}>
      {children}
    </IntroAnimationContext.Provider>
  );
}

export function useIntroAnimation() {
  return useContext(IntroAnimationContext);
}
