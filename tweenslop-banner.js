(() => {
  if (document.getElementById("tweenslop-overlay")) return;

  const style = document.createElement("style");
  style.textContent = `
    #tweenslop-overlay {
      position: fixed !important;
      left: 20px !important;
      bottom: 20px !important;
      z-index: 2147483647 !important;
      display: block !important;
      visibility: visible !important;
      opacity: 1 !important;
      pointer-events: auto !important;
      background: #3fd6a4 !important;
      color: #2b2145 !important;
      border: 3px solid #2b2145 !important;
      border-radius: 999px !important;
      padding: 12px 20px !important;
      font-family: "Fredoka", "Trebuchet MS", sans-serif !important;
      font-size: 15px !important;
      font-weight: 700 !important;
      text-decoration: none !important;
      box-shadow: 0 5px 0 #2b2145 !important;
      cursor: pointer !important;
      transform: none;
    }

    #tweenslop-overlay:hover {
      transform: translateY(-2px) !important;
    }

    #tweenslop-overlay:active {
      transform: translateY(4px) !important;
      box-shadow: 0 0 0 #2b2145 !important;
    }
  `;
  document.head.appendChild(style);

  const button = document.createElement("a");
  button.id = "tweenslop-overlay";
  button.href = "https://tweenslop.pages.dev/";
  button.target = "_blank";
  button.rel = "noopener noreferrer";
  button.textContent = "🚀 CHECK OUT TWEENSLOP";

  document.body.appendChild(button);
})();
