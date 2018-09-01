(() => {
    const stylizeIt = () => {
        'use strict';
        // Set any vars you want to change here:
        const codeBox = document.querySelector('.view-lines');

        // Set your values for those vars here:
        codeBox.style.fontFamily = "'IBM Plex Mono', NovaMono, monospace";
    };
    window.addEventListener('load', () => {
        stylizeIt();
    });
    document.addEventListener('click', (event) => {
        if (event.target.tagName === 'DIV') {
            stylizeIt();
        }
    });
})();
