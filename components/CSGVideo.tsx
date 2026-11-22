"use client";

import { useSyncExternalStore } from "react";
import Image from "next/image";
import { cn } from "cn";

interface CSGVideoProps {
  fileName: string;
  fallbackFileName: string;
  className?: string;
}

const NO_VIDEO_QUERY =
  "(max-width: 767px), (prefers-reduced-motion: reduce)";

type NetworkInformation = EventTarget & { saveData?: boolean };

function getConnection(): NetworkInformation | undefined {
  return (navigator as Navigator & { connection?: NetworkInformation })
    .connection;
}

function subscribe(onChange: () => void) {
  const mql = window.matchMedia(NO_VIDEO_QUERY);
  const connection = getConnection();
  mql.addEventListener("change", onChange);
  connection?.addEventListener("change", onChange);
  return () => {
    mql.removeEventListener("change", onChange);
    connection?.removeEventListener("change", onChange);
  };
}

/** Video only on larger screens, without reduced motion or data saver. */
function canPlayVideo() {
  return (
    !window.matchMedia(NO_VIDEO_QUERY).matches && !getConnection()?.saveData
  );
}

export const CSGVideo = ({
  fileName,
  fallbackFileName,
  className,
}: Readonly<CSGVideoProps>) => {
  // Server render (static export) has no window, so start with the image only.
  const showVideo = useSyncExternalStore(subscribe, canPlayVideo, () => false);

  return (
    <>
      <Image
        src={fallbackFileName}
        alt=""
        fill
        sizes="100vw"
        loading="eager"
        className={cn("object-cover", className)}
      />
      {showVideo && (
        <video
          loop
          autoPlay
          playsInline
          muted
          poster={fallbackFileName}
          className={className}
        >
          <source src={fileName} type="video/mp4" />
        </video>
      )}
    </>
  );
};
