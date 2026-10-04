(() => {
  "use strict";

  if (document.getElementById("tweenslop-banner")) return;

  const link = document.createElement("a");
  link.id = "tweenslop-banner";
  link.className = "btn btn-mint";
  link.href = "https://tweenslop.pages.dev";
  link.textContent = "CHECK OUT TWEENSLOP";
  link.target = "_blank";
  link.rel = "noopener noreferrer";

  link.setAttribute(
    "aria-label",
    "Check out TweenSlop (opens in a new tab)"
  );

  Object.assign(link.style, {
    position: "fixed",
    left: "16px",
    bottom: "16px",
    zIndex: "9999",
    display: "inline-block",
    textDecoration: "none",
    whiteSpace: "nowrap",
    fontFamily: '"Fredoka", "Trebuchet MS", "Segoe UI", system-ui, sans-serif',
    border: "3px solid var(--ink, #2b2145)",
    borderRadius: "999px",
    padding: "10px 18px",
    fontSize: "15px",
    fontWeight: "600",
    lineHeight: "normal",
    background: "var(--mint, #3fd6a4)",
    color: "#2b2145",
    boxShadow: "0 4px 0 var(--ink, #2b2145)",
    transition: "transform .08s ease, box-shadow .08s ease"
  });

  link.addEventListener("pointerdown", () => {
    link.style.transform = "translateY(4px)";
    link.style.boxShadow = "0 0 0 var(--ink, #2b2145)";
  });

  const release = () => {
    link.style.transform = "";
    link.style.boxShadow = "";
  };

  link.addEventListener("pointerup", release);
  link.addEventListener("pointerleave", release);
  link.addEventListener("blur", release);

  document.body.appendChild(link);
})();
