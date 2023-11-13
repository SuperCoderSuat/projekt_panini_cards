class Musiker {
    constructor(firstname, lastName, stageName, albums, singles, alter) {
        this.firstname = firstname;
        this.lastName = lastName;
        this.stageName = stageName;
        this.albums = albums;
        this.singles = singles;
        this.alter = alter;
    }

    // Methode zum Anzeigen der Sammlerkarte in HTML
    anzeigen(imgUrl) {
        const cardContainer = document.getElementById('create_card');
        const card = document.createElement('div');
        cardContainer.classList.add('card_container');
        card.classList.add('card');

        if (imgUrl) {
            card.style.backgroundImage = `url(${imgUrl})`;
            card.style.backgroundSize = `cover`;
            card.style.backgroundRepeat = `no-repeat`;
        }
        
        card.innerHTML = `
            <label>firstname:</label> <span>${this.firstname}</span>
            <label>lastname:</label> <span>${this.lastName}</span>
            <label>Stage Name:</label> <span>${this.stageName}</span>
            <label>albums:</label> <span>${this.albums}</span>
            <label>Singles:</label> <span>${this.singles}</span>
        `;
        cardContainer.appendChild(card);
    }
}

// Funktion, um das Formular zu verarbeiten
function erstellePaniniKarte() {
    event.preventDefault();

    const firstname = document.getElementById('firstname').value;
    const lastName = document.getElementById('lastname').value;
    const stageName = document.getElementById('stagename').value;
    const albums = document.getElementById('albums').value;
    const singles = document.getElementById('singles').value;
    const alter = document.getElementById('alter').value;
    const img = document.getElementById('img_url').value;

    const musikerKarte = new Musiker(firstname, lastName, stageName, albums, singles, alter);
    musikerKarte.anzeigen(img);
}