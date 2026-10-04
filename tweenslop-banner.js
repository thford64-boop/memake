// Wait until the website's HTML is fully loaded
document.addEventListener("DOMContentLoaded", function() {
    // Create the anchor (link) element
    const banner = document.createElement("a");
    
    // Set the text and the destination link
    banner.innerText = "Check out TWEENSLOP";
    banner.href = "https://tweenslop.pages.dev";
    banner.target = "_blank"; // Opens in a new tab
    
    // Style the banner to match your website's custom theme variables
    Object.assign(banner.style, {
        position: "fixed",
        bottom: "20px",
        left: "20px",
        backgroundColor: "var(--ink)",
        color: "var(--paper)",
        padding: "9px 20px 11px",
        borderRadius: "16px",
        fontFamily: '"Fredoka", "Trebuchet MS", sans-serif',
        fontSize: "15px",
        fontWeight: "700",
        textDecoration: "none",
        border: "3px solid var(--ink)",
        boxShadow: "4px 4px 0px var(--mint)",
        zIndex: "10000", // Keeps it on top of other content
        cursor: "pointer",
        transition: "transform 0.08s ease, box-shadow 0.08s ease"
    });

    // Add a fun hover click animation matching your existing theme buttons
    banner.addEventListener("mousedown", () => {
        banner.style.transform = "translate(4px, 4px)";
        banner.style.boxShadow = "0px 0px 0px var(--ink)";
    });
    
    banner.addEventListener("mouseup", () => {
        banner.style.transform = "none";
        banner.style.boxShadow = "4px 4px 0px var(--mint)";
    });

    banner.addEventListener("mouseleave", () => {
        banner.style.transform = "none";
        banner.style.boxShadow = "4px 4px 0px var(--mint)";
    });

    // Inject the banner into the website body
    document.body.appendChild(banner);
});
