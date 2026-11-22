"use client";

import { useState, type ComponentProps } from "react";
import Link from "next/link";

/**
 * A Link that only prefetches its route once the user shows intent
 * (hover, focus or touch), instead of as soon as it enters the viewport.
 */
export const HoverPrefetchLink = ({
  onMouseEnter,
  onFocus,
  onTouchStart,
  ...props
}: Omit<ComponentProps<typeof Link>, "prefetch">) => {
  const [active, setActive] = useState(false);

  return (
    <Link
      {...props}
      prefetch={active ? null : false}
      onMouseEnter={(e) => {
        setActive(true);
        onMouseEnter?.(e);
      }}
      onFocus={(e) => {
        setActive(true);
        onFocus?.(e);
      }}
      onTouchStart={(e) => {
        setActive(true);
        onTouchStart?.(e);
      }}
    />
  );
};
