api_about.getTheme().then(theme => {
  document.documentElement.setAttribute('data-bs-theme', theme);
});

function windowClose() {
  api_about.closeWindow();
}