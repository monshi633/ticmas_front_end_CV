// Hide/Show cards
document.getElementById('section1').addEventListener('click', function() {
    // Hide all cards
    const cards = document.getElementsByClassName('card');
    for (let i = 0; i < cards.length; i++) {
        cards[i].style.display = 'None';
    }
    // Show selected
    document.getElementById('about').style.display = 'block';
    //Reset color
    const items = document.getElementsByClassName('item');
    for (let i = 0; i < items.length; i++) {
        items[i].style.color = 'var(--color-text)';
    }
    // Turn color on
    document.getElementById('section1').style.color = 'var(--color-accent2)';
});

document.getElementById('section2').addEventListener('click', function() {
    const collection = document.getElementsByClassName('card');
    for (let i = 0; i < collection.length; i++) {
        collection[i].style.display = 'None';
    }
    document.getElementById('resume').style.display = 'block';

    const items = document.getElementsByClassName('item');
    for (let i = 0; i < items.length; i++) {
        items[i].style.color = 'var(--color-text)';
    }
    document.getElementById('section2').style.color = 'var(--color-accent2)';
});

document.getElementById('section3').addEventListener('click', function() {
    const collection = document.getElementsByClassName('card');
    for (let i = 0; i < collection.length; i++) {
        collection[i].style.display = 'None';
    }
    document.getElementById('portfolio').style.display = 'block';

    const items = document.getElementsByClassName('item');
    for (let i = 0; i < items.length; i++) {
        items[i].style.color = 'var(--color-text)';
    }
    document.getElementById('section3').style.color = 'var(--color-accent2)';
});

document.getElementById('section4').addEventListener('click', function() {
    const collection = document.getElementsByClassName('card');
    for (let i = 0; i < collection.length; i++) {
        collection[i].style.display = 'None';
    }
    document.getElementById('tools').style.display = 'block';

    const items = document.getElementsByClassName('item');
    for (let i = 0; i < items.length; i++) {
        items[i].style.color = 'var(--color-text)';
    }
    document.getElementById('section4').style.color = 'var(--color-accent2)';
});