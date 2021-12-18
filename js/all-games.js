const allGames = [
    {
        name: "Paintball",
        note: "We love what we do and we do it with passion. We value the experimentation, the reformation of the message, and the smart incentives.",
        categories: ["Outdoor", "Water"],
        id: 1,
    },
    {
        name: "Chess",
        note: "We love what we do and we do it with passion. We value the experimentation, the reformation of the message, and the smart incentives.",
        categories: ["Board", "Indoor"],
        id: 2,
    },
    {
        name: "Checkers",
        note: "We love what we do and we do it with passion. We value the experimentation, the reformation of the message, and the smart incentives.",
        categories: ["Board", "Indoor"],
        id: 3,
    },
    {
        name: "Scrabble",
        note: "We love what we do and we do it with passion. We value the experimentation, the reformation of the message, and the smart incentives.",
        categories: ["Board", "Indoor"],
        id: 4,
    },
    {
        name: "Football",
        note: "We love what we do and we do it with passion. We value the experimentation, the reformation of the message, and the smart incentives.",
        categories: ["Outdoor", "Court"],
        id: 5,
    },
    {
        name: "Ludo",
        note: "We love what we do and we do it with passion. We value the experimentation, the reformation of the message, and the smart incentives.",
        categories: ["Board", "Indoor"],
        id: 6,
    },
    {
        name: "Table Tennis",
        note: "We love what we do and we do it with passion. We value the experimentation, the reformation of the message, and the smart incentives.",
        categories: ["Board", "Indoor", "Court"],
        id: 7,
    },
    {
        name: "Basketball",
        note: "We love what we do and we do it with passion. We value the experimentation, the reformation of the message, and the smart incentives.",
        categories: ["Outdoor", "Court"],
        id: 8,
    },
    {
        name: "Monopoly",
        note: "We love what we do and we do it with passion. We value the experimentation, the reformation of the message, and the smart incentives.",
        categories: ["Board", "Indoor"],
        id: 9,
    },
    {
        name: "Lawn Tennis",
        note: "We love what we do and we do it with passion. We value the experimentation, the reformation of the message, and the smart incentives.",
        categories: ["Outdoor", "Court"],
        id: 10,
    },
    {
        name: "Solitaire",
        note: "We love what we do and we do it with passion. We value the experimentation, the reformation of the message, and the smart incentives.",
        categories: ["Indoor"],
        id: 11,
    },
    {
        name: "Dominos",
        note: "We love what we do and we do it with passion. We value the experimentation, the reformation of the message, and the smart incentives.",
        categories: ["Outdoor", "Indoor"],
        id: 12,
    },
];

const updateGameList = (category) => {
    // If category is all, put all, else filter
    const gameForCategory =
        category === "All"
            ? allGames
            : allGames.filter((game) => game.categories.includes(category));
    console.log(gameForCategory);

    // APpennd the games to node
    const gameListNode = document.querySelector("div.game-list");
    gameListNode.innerHTML = ``;

    for (let i of gameForCategory) {
        gameListNode.innerHTML += `<div class="image-card">
            <img src="./assets/images/image${i.id}.png" alt="">
            <div class="flex">
                <b>${i.name}</b>
                <div class="add">
                    <p class="sign">-</p>
                    <p class="num">2</p>
                    <p class="sign">+</p>
                </div>
            </div>
            <p>${i.note}</p>
        </div>
`;
    }
};

// Update the game lists for all games
updateGameList("All");
const filterButtons = document.querySelectorAll("div.buttons button");

const clearSelected = () => {
    for (let i of filterButtons) {
        i.style.backgroundColor = "#efeff4";
        i.style.color = "#000";
    }
};

for (let i of filterButtons) {
    i.onclick = (e) => {
        clearSelected();
        e.target.style.backgroundColor = "var(--red)";
        e.target.style.color = "white";
        updateGameList(e?.target?.textContent);
    };
}
