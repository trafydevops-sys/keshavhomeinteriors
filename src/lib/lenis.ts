import type Lenis from "lenis";

// Lenis fully virtualizes scroll: it doesn't dispatch native `scroll` events,
// and a plain `scrollIntoView`/`window.scrollTo` gets fought and snapped back
// on the next rAF tick. Anything that needs scroll position or wants to
// scroll programmatically must go through the active Lenis instance instead
// of native DOM APIs.
let current: Lenis | null = null;
type ScrollHandler = (e: { scroll: number }) => void;
const pendingSubscribers = new Set<ScrollHandler>();

export function setLenis(instance: Lenis | null) {
  current = instance;
  if (instance) {
    for (const cb of pendingSubscribers) instance.on("scroll", cb);
  }
}

export function scrollToElement(target: Element | string, offset = 0) {
  if (current) {
    current.scrollTo(target as never, { offset });
    return;
  }
  const el = typeof target === "string" ? document.querySelector(target) : target;
  el?.scrollIntoView({ behavior: "smooth" });
}

/** Subscribe to Lenis scroll updates, even if Lenis hasn't mounted yet. */
export function onLenisScroll(cb: ScrollHandler) {
  pendingSubscribers.add(cb);
  current?.on("scroll", cb);
  return () => {
    pendingSubscribers.delete(cb);
    current?.off("scroll", cb);
  };
}
