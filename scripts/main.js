// Loads dark/light theme from default or user settings

api_view.getTheme().then(theme => {
    document.documentElement.setAttribute('data-bs-theme', theme);
});

function openAbout() {
    api_view.aboutOpen();
}

function windowMinimize() {
    api_view.minimizeWindow();
}

function windowClose() {
    api_view.closeWindow();
}