'use client';

import { useState } from 'react';
import Image from 'next/image';

const FALLBACK_SRC = '/images/universities/default-education.svg';

// Wraps next/image for the small university logo icons used across the
// country pages. Replicates the legacy onError → fallback-to-default-logo
// behavior, which next/image can't do via direct DOM mutation.
export default function UniversityLogo({ src, alt, className, width = 64, height = 64 }) {
  const [imgSrc, setImgSrc] = useState(src);

  return (
    <Image
      className={className}
      src={imgSrc}
      alt={alt}
      width={width}
      height={height}
      unoptimized={imgSrc === FALLBACK_SRC}
      onError={() => {
        if (imgSrc !== FALLBACK_SRC) setImgSrc(FALLBACK_SRC);
      }}
    />
  );
}
