// CSS progressive enhancement class
document.documentElement.classList.add("js-enabled");

// ── Header scroll state ───────────────────────────────
const header = document.querySelector(".site-header");
if (header) {
  const onScroll = () => {
    header.classList.toggle("scrolled", window.scrollY > 60);
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
}

// ── Mobile menu toggle ───────────────────────────────
const toggle = document.querySelector(".menu-toggle");
const nav    = document.querySelector(".main-nav");

if (toggle && nav) {
  toggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(isOpen));
    document.body.style.overflow = isOpen ? "hidden" : "";
  });

  nav.addEventListener("click", (event) => {
    if (event.target instanceof HTMLAnchorElement) {
      nav.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
      document.body.style.overflow = "";
    }
  });

  // Chiudi con Escape
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && nav.classList.contains("is-open")) {
      nav.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
      document.body.style.overflow = "";
      toggle.focus();
    }
  });
}

// ── Scroll reveal ────────────────────────────────────
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.1 }
);

document.querySelectorAll("[data-reveal]").forEach((el) => {
  revealObserver.observe(el);
});

// ── Cookie consent ───────────────────────────────────
const CONSENT_KEY = "campaniataxi_consent";
const cookieBanner = document.getElementById("cookie-banner");
const cookieAccept = document.getElementById("cookie-accept");
const cookieReject = document.getElementById("cookie-reject");

function hideBanner() {
  if (cookieBanner) {
    cookieBanner.classList.remove("is-visible");
    cookieBanner.addEventListener("transitionend", () => {
      cookieBanner.remove();
    }, { once: true });
  }
}

if (cookieBanner && !localStorage.getItem(CONSENT_KEY)) {
  // Show after slight delay so the page loads first
  setTimeout(() => cookieBanner.classList.add("is-visible"), 800);

  cookieAccept && cookieAccept.addEventListener("click", () => {
    localStorage.setItem(CONSENT_KEY, "all");
    hideBanner();
  });

  cookieReject && cookieReject.addEventListener("click", () => {
    localStorage.setItem(CONSENT_KEY, "necessary");
    hideBanner();
  });
} else if (cookieBanner) {
  cookieBanner.remove();
}
