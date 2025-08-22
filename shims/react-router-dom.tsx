"use client";
import React from "react";
import NextLink from "next/link";
import { useRouter, useSearchParams as useNextSearchParams } from "next/navigation";

export const Link = React.forwardRef<HTMLAnchorElement, React.ComponentProps<typeof NextLink>>(function Link(props, ref) {
  // Accept `to` like react-router-dom, map to `href`
  const { children, ...rest } = props as any;
  const href = (rest.to ?? rest.href) as string;
  const newProps: any = { ...rest, href };
  delete newProps.to;
  return (
    <NextLink ref={ref as any} {...newProps}>
      {children}
    </NextLink>
  );
});

export function useNavigate() {
  const router = useRouter();
  return (to: string | number, options?: { replace?: boolean }) => {
    if (typeof to === "number") {
      if (to === -1) router.back();
      else router.forward();
      return;
    }
    if (options?.replace) router.replace(to as string);
    else router.push(to as string);
  };
}

export function useSearchParams() {
  // Next returns a ReadonlyURLSearchParams compatible interface
  return useNextSearchParams();
}

export function Navigate({ to, replace = false }: { to: string; replace?: boolean }) {
  const router = useRouter();
  React.useEffect(() => {
    if (replace) router.replace(to);
    else router.push(to);
  }, [router, to, replace]);
  return null;
}

// No-op shims to avoid crashes if imported somewhere
export const BrowserRouter: React.FC<{ children: React.ReactNode }> = ({ children }) => <>{children}</>;
export const Routes: React.FC<{ children: React.ReactNode }> = ({ children }) => <>{children}</>;
export const Route: React.FC<{ children?: React.ReactNode }> = ({ children }) => <>{children}</>;

