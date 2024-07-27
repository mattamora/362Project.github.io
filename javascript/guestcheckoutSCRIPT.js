function toggleSection(sectionId) {
    const section = document.getElementById(sectionId);
    const content = section.querySelector('.content');
    const caret = section.querySelector('.caret');

    if (content.style.display === 'block') {
        content.style.display = 'none';
        caret.classList.remove('up');
    } else {
        content.style.display = 'block';
        caret.classList.add('up');
    }
}

function toggleSection(sectionId) {
    const section = document.getElementById(sectionId);
    const content = section.querySelector('.content');
    const header = section.querySelector('.header');
    const caret = section.querySelector('.caret');

    // Toggle content visibility
    if (content.classList.contains('active')) {
        content.classList.remove('active');
        header.classList.remove('active');
        caret.classList.remove('up');
    } else {
        content.classList.add('active');
        header.classList.add('active');
        caret.classList.add('up');
    }
}
