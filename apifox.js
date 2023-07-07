const clickMenu = document.getElementById('clickMenu');
const dropMenu = document.getElementById('dropMenu');

clickMenu.addEventListener('mouseover', function() {
    dropMenu.classList.add('linkOl');
});

clickMenu.addEventListener('mouseout', function() {
    dropMenu.classList.remove('linkOl');
});