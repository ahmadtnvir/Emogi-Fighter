let fighters = ["🐉", "🐥", "🐊","💩", "🦍", "🐢", "🐩", "🦭", "🦀", "🐝", "🤖", "🐘", "🐸", "🕷","🐆", "🦕", "🦁"]
let stageEl = document.getElementById("stage")
let fightButton = document.getElementById("fightbtn")

fightButton.addEventListener("click", function() {
    let randomFightersOne = Math.floor(Math.random() * fighters.length )
    let randomFightersTwo = Math.floor(Math.random() * fighters.length )
    stageEl.textContent = fighters[randomFightersOne] + " vs " + fighters[randomFightersTwo]
})
