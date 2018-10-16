$().ready(function() {
    $("button").click(function() {
        playGame();
    })
})
function playGame() {
    var game = []
    for (i; game.length<11; i++) {
        var i = Math.floor(Math.random()*11)
        $("#table").append(game);
        console.log(game)
    }
}