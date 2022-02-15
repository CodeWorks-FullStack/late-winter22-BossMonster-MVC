export class Monster {
  constructor(name, imgUrl, health = 100) {
    this.name = name
    this.imgUrl = imgUrl
    this.health = health
  }

  // NOTE 'get' creates fake properties that run like functions
  // they must return a value
  get Template() {
    return `<div class="bg-white rounded text-center">
    <img class="w-100 rounded-top" src="${this.imgUrl}"
      onclick="app.gameController.attack()">
    <h2 id="health">${this.name}  |  ${this.health}</h2>
  </div>`
  }
}

new Monster()