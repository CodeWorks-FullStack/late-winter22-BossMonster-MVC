import { ProxyState } from "../AppState.js"
import { gameService } from "../Services/GameService.js"
import { Pop } from "../Utils/Pop.js"

// PRIVATE
function _draw() {
  console.log('[GameController]: draw')
  const monster = ProxyState.activeMonster
  document.getElementById('monster').innerHTML = monster.Template
  if (monster.health == 0) {
    Pop.toast(`You have Defeated ${monster.name}... for now`, 'success', 'top-end', 1000)
  }
}


function _drawList() {
  console.log('[GameController]: _drawList')
  const monsters = ProxyState.monsters
  let template = ''
  monsters.forEach(m => template += `<li>${m.name}</li>`)
  document.getElementById('monster-list').innerHTML = template
  document.getElementById('monsters-remaining').innerText = monsters.length.toString()
}

// PUBLIC
export class GameController {
  constructor() {
    // REGISTER LISTENERS (put the box on the shelf)
    ProxyState.on('activeMonster', _draw)
    ProxyState.on('monsters', _drawList)

    _draw()
    _drawList()
  }

  attack() {
    console.log("[GameController]: attack")
    gameService.attack()
  }
}