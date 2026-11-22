import { cn } from "cn";

type Props<T extends keyof React.JSX.IntrinsicElements> =
  React.ComponentProps<T>;

export function Page({ className, children, ...props }: Props<"div">) {
  return (
    <div
      className={cn(
        "grid grid-rows-[20px_1fr_20px] items-center justify-items-center flex-1 p-8 pb-20 sm:p-20",
        className
      )}
      {...props}
    >
      <div className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        {children}
      </div>
    </div>
  );
}

export function H1({ className, ...props }: Props<"h1">) {
  return (
    <h1
      className={cn(
        "scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl orange",
        className
      )}
      {...props}
    />
  );
}

export function H2({ className, ...props }: Props<"h2">) {
  return (
    <h2
      className={cn(
        "scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0",
        className
      )}
      {...props}
    />
  );
}

export function H3({ className, ...props }: Props<"h3">) {
  return (
    <h3
      className={cn("scroll-m-20 text-2xl font-semibold tracking-tight", className)}
      {...props}
    />
  );
}

export function H4({ className, ...props }: Props<"h4">) {
  return (
    <h4
      className={cn("scroll-m-20 text-xl font-semibold tracking-tight", className)}
      {...props}
    />
  );
}

export function P({ className, ...props }: Props<"p">) {
  return (
    <p className={cn("leading-7 not-first:mt-6", className)} {...props} />
  );
}

export function List({ className, ...props }: Props<"ul">) {
  return (
    <ul
      className={cn("list-disc marker:text-[var(--orange)]", className)}
      {...props}
    />
  );
}
