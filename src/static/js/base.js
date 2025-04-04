// theme switch (dark/light)
const THEME_STORAGE_KEY = "theme";
const THEME_VALUE_LIGHT = "light";
const THEME_VALUE_DARK = "dark";

const THEME_OWNER = document.documentElement;

const cachedTheme = localStorage.getItem(THEME_STORAGE_KEY);
if (cachedTheme) {
  THEME_OWNER.dataset[THEME_STORAGE_KEY] = cachedTheme;
}

document.addEventListener("DOMContentLoaded", () => {
  const themePicker = document.getElementById("theme-picker");

  if (cachedTheme) {
    themePicker.checked = cachedTheme === THEME_VALUE_DARK;
  } else {
    themePicker.checked = window?.matchMedia?.('(prefers-color-scheme:dark)')?.matches ?? false;
  }

  themePicker.addEventListener("change", (e) => {
    const theme = themePicker.checked ? THEME_VALUE_DARK : THEME_VALUE_LIGHT;

    THEME_OWNER.dataset[THEME_STORAGE_KEY] = theme;
    localStorage.setItem(THEME_STORAGE_KEY, theme);
  });
});


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
