// close navigation menu with escape key
document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    const menuBtn = document.getElementById("menu-btn");
    if (menuBtn && menuBtn.checked) {
      menuBtn.checked = false;
    }
  }
});

// external links in new tab
document.querySelectorAll("a[href]").forEach(link => {
  const url = new URL(link.href, window.location.href);
  if (url.origin !== window.location.origin) {
    link.setAttribute("target", "_blank");
    link.setAttribute("rel", "noopener noreferrer");
  }
});
