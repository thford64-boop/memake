// Wait until the website's HTML is fully loaded
document.addEventListener("DOMContentLoaded", function() {
    // Create the anchor (link) element
    const banner = document.createElement("a");
    
    // Set the text and the destination link
    banner.innerText = "Check out TWEENSLOP";
    banner.href = "https://pages.dev";
    banner.target = "_blank"; // Opens in a new tab
    
    // Style the banner to sit in the bottom-right corner
    Object.assign(banner.style, {
        position: "fixed",
        bottom: "20px",
        right: "20px",
        backgroundColor: "#000000", // Black background
        color: "#ffffff",           // White text
        padding: "10px 15px",
        borderRadius: "5px",
        fontFamily: "Arial, sans-serif",
        fontSize: "14px",
        fontWeight: "bold",
        textDecoration: "none",
        boxShadow: "0px 4px 6px rgba(0,0,0,0.1)",
        zIndex: "10000",            // Ensures it stays on top of other elements
        cursor: "pointer"
    });

    // Add a simple hover effect
    banner.addEventListener("mouseenter", () => banner.style.opacity = "0.9");
    banner.addEventListener("mouseleave", () => banner.style.opacity = "1");

    // Inject the banner into the website body
    document.body.appendChild(banner);
});
