document.addEventListener("DOMContentLoaded", function() {
    const games = [
        { title: "Game 1", description: "An exciting action game." },
        { title: "Game 2", description: "A thrilling adventure game." },
        { title: "Game 3", description: "A challenging puzzle game." },
        { title: "Game 4", description: "A strategic strategy game." }
    ];

    const gameList = document.querySelector('.game-list');
    
    games.forEach(game => {
        const gameItem = document.createElement('div');
        gameItem.classList.add('game-item');
        gameItem.innerHTML = `<h3>${game.title}</h3><p>${game.description}</p>`;
        gameList.appendChild(gameItem);
    });
});
