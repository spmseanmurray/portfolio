// GA4 is loaded by a host-guarded snippet in index.html, so `gtag` is simply
// absent on localhost, on preview builds, and for the sizeable share of
// visitors running a content blocker. Every send goes through here so that
// absence stays a no-op rather than a TypeError that takes the click handler
// down with it.

declare global {
  interface Window {
    gtag?: (command: string, ...args: unknown[]) => void;
  }
}

export function trackEvent(
  name: string,
  params?: Record<string, string | number | boolean>,
): void {
  window.gtag?.("event", name, params);
}
