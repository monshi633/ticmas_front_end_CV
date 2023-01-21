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
    document.getElementById('tools').style.display = 'block';

    const items = document.getElementsByClassName('item');
    for (let i = 0; i < items.length; i++) {
        items[i].style.color = 'var(--color-text)';
    }
    document.getElementById('section3').style.color = 'var(--color-accent2)';
});

// Auto-calculate age
var dob = document.getElementById('birthdate').textContent;
document.getElementById('age').innerHTML = getAge(dob);

function getAge(dateString) {
    var today = new Date();
    var birthDate = new Date(dateString);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
}