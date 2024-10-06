const data = [
    {
        "name": "Joel Embiid",
        "team": "PHI",
        "points": 33,
        "rebounds": 10.8,
        "assists": 5.7,
        "blocks": 1.5,
        "turnovers": 4.2
    },
    {
        "name": "Jalen Brunson",
        "team": "NYK",
        "points": 32.4,
        "rebounds": 3.3,
        "assists": 7.5,
        "blocks": 0.2,
        "turnovers": 2.7
    },
    {
        "name": "Shai Gilgeous-Alexander",
        "team": "OKC",
        "points": 30.2,
        "rebounds": 7.2,
        "assists": 6.4,
        "blocks": 1.7,
        "turnovers": 2.2
    },
    {
        "name": "Tyrese Maxey",
        "team": "PHI",
        "points": 29.8,
        "rebounds": 5.2,
        "assists": 6.8,
        "blocks": 0.3,
        "turnovers": 2.2
    },
    {
        "name": "Donovan Mitchell",
        "team": "CLE",
        "points": 29.6,
        "rebounds": 5.4,
        "assists": 4.7,
        "blocks": 0.3,
        "turnovers": 2.8
    },
    {
        "name": "Luka Dončić",
        "team": "DAL",
        "points": 28.9,
        "rebounds": 9.5,
        "assists": 8.1,
        "blocks": 0.4,
        "turnovers": 4.1
    }
]


document.addEventListener("DOMContentLoaded", () => {

    const tableBody = document.getElementById("player-row");

    function populateTable(players) {
        tableBody.innerHTML = '';
        players.forEach(player => {
            let row = document.createElement("tr");
            row.innerHTML = `
                <td>${player.name}</td>
                <td>${player.team}</td>
                <td>${player.points}</td>
                <td>${player.rebounds}</td>
                <td>${player.assists}</td>
                <td>${player.blocks}</td>
                <td>${player.turnovers}</td>
            `;
            tableBody.appendChild(row);
        });
    }

    populateTable(data)
})