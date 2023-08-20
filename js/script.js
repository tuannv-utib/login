var theme = 'light';

var toggleTheme = function () {
    var settings = document.getElementsByClassName("setting-btn");
    for (let i = 0; i < settings.length; i++) {
        settings[i].addEventListener('click', () => {
            if (theme == 'light') {
                theme = 'dark';
                document.getElementsByTagName("body")[0].setAttribute("theme", "dark");
            } else {
                theme = 'light';
                document.getElementsByTagName("body")[0].setAttribute("theme", "light");
            }
        });
    }
}

toggleTheme();