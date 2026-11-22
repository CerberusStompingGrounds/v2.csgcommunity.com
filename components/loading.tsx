"use client";

import { Spinner } from "./ui/spinner";

export const Loading = () => {
  return (
    <span className="flex flex-col items-center justify-center">
      <Spinner className="size-12 text-primary" />
      Loading...
    </span>
  );
};
