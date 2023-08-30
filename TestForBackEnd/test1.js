document.addEventListener("DOMContentLoaded", function () {
    const addPlayButton = document.getElementById("add-play");
    const playHistory = document.getElementById("play-history");

    addPlayButton.addEventListener("click", function () {
        const personnel = document.getElementById("personnel").value;
        const yardLine = document.getElementById("yard-line").value;
        const formation = document.getElementById("formation").value;
        const defensiveCall = document.getElementById("defensive-call").value;
        const playType = document.getElementById("play-type").value;
        const result = document.getElementById("result").value;

        const playEntry = document.createElement("li");
        playEntry.innerHTML = `
            <strong>Personnel:</strong> ${personnel}, <strong>Yard Line:</strong> ${yardLine} <br>
            <strong>Formation:</strong> ${formation}, <strong>Defensive Call:</strong> ${defensiveCall} <br>
            <strong>Play Type:</strong> ${playType}, <strong>Result:</strong> ${result}
        `;

        playHistory.appendChild(playEntry);

        // Clear input fields after adding play
        document.querySelectorAll("input").forEach(input => {
            input.value = "";
        });
    });
});
