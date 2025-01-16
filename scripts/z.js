// Loads dark/light theme from default or user settings

api_z.getTheme().then(theme => {
    document.documentElement.setAttribute('data-bs-theme', theme);
});

function openAbout() {
    api_z.aboutOpen();
}

function windowMinimize() {
    api_z.minimizeWindow();
}

function windowClose() {
    api_z.closeWindow();
}