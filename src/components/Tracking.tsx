import { createEffect, on } from "solid-js";
import { useLocation } from "@solidjs/router";

export function Tracking() {
  const location = useLocation();

  createEffect(
    on(
      () => location.pathname,
      (pathname) => {
        const params = new URLSearchParams({
          p: pathname,
          r: document.referrer,
          t: Date.now().toString(),
        });

        const url = `/api/ping?${params.toString()}`;
        if (typeof navigator !== "undefined" && navigator.sendBeacon) {
          navigator.sendBeacon(url);
        } else {
          fetch(url, { mode: "no-cors" });
        }
      },
    ),
  );

  return null;
}
