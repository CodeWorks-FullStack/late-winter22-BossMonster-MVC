import { ProxyState } from "../AppState.js"


class GameService {
  attack() {
    // prevents any actions occuring when monster health is 0
    if (ProxyState.activeMonster.health <= 0) {
      return
    }
    console.log('[GameService]: attack')

    ProxyState.activeMonster.health -= 5
    // NOTE the = triggers the listenerers
    ProxyState.activeMonster = ProxyState.activeMonster
    console.log('[GameService]: attack (attacked)')


    if (ProxyState.activeMonster.health <= 0) {
      ProxyState.activeMonster.health = 0
      console.log('[GameService]: attack (attacked)')
      if (ProxyState.monsters.length) {
        setTimeout(() => {
          ProxyState.activeMonster = ProxyState.monsters.shift()
          ProxyState.monsters = ProxyState.monsters
          console.log("[GameService]: attack (new monster)")
        }, 2000)
      }
    }
    console.log('[GameService]: attack (result of change)', ProxyState.activeMonster.health)
  }

}

export const gameService = new GameService()