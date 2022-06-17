import { useLayoutEffect, useState } from 'react';

/* Locks the body to prevent users from scrolling */
export const useLockBodyScroll = () => {
  const [isLocked, setLocked] = useState(false);

  useLayoutEffect(() => {
    if (!isLocked) return;

    // Save initial body style
    const originalStyle = document.body.style.overflow;

    // Lock body scroll
    document.body.style.overflow = 'hidden';

    // Re-enable scrolling
    return () => {
      document.body.style.overflow = originalStyle;
    };
  }, [isLocked]);

  return setLocked;
};
