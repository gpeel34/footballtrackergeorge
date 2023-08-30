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










var $boxOne = $('.box:nth-child(1)'),
  $boxTwo = $('.box:nth-child(2)'),
  $boxThree = $('.box:nth-child(3)');

var boxOne = new TimelineMax(),
  boxTwo = new TimelineMax(),
  boxThree = new TimelineMax();



boxThree.to($boxThree, 0.6, {
  opacity: 1,
  scale: 1,
  ease: Back.easeOut
}, 1.2);

/**
 * Point Animation
 */
$('.point').on('click', function(e) {
  var getTotalPoints = $('.point').length,
    getIndex = $(this).index(),
    getCompleteIndex = $('.point--active').index();

  TweenMax.to($('.bar__fill'), 0.6, {
    width: (getIndex - 1) / (getTotalPoints - 1) * 100 + '%'
  });

  if (getIndex => getCompleteIndex) {
    $('.point--active').addClass('point--complete').removeClass('point--active');

    $(this).addClass('point--active');
    $(this).prevAll().addClass('point--complete');
    $(this).nextAll().removeClass('point--complete');
  }
});


