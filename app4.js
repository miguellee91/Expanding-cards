const panels = document.querySelectorAll('.panel');

panels.forEach(function (panel) {
    panel.addEventListener('click', function () {
        removeAllActive();
        panel.classList.add('active');
    });
});

function removeAllActive() {
    panels.forEach(function (panel) {
        panel.classList.remove('active');
    });
}


