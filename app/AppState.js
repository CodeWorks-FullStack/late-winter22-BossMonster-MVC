import { Monster } from "./Models/Monster.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"

class AppState extends EventEmitter {

  /** @type {import('./Models/Monster').Monster} */
  activeMonster = new Monster('Slappy', 'https://i.ytimg.com/vi/vQ7F1Zj7KJE/maxresdefault.jpg')

  /** @type {import('./Models/Monster').Monster[]} */
  monsters = [new Monster('annabelle', 'https://image.scoopwhoop.com/q30/s3.scoopwhoop.com/anj2/5ccbd85db37f125ff0d7ab4b/e4280dab-d1ad-4c11-a84c-36cea77479cd.jpg', 120), new Monster('Jimmy', '//placehold.it/200x200')]

}

export const ProxyState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
