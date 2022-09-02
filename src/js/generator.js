/* eslint-disable no-plusplus */
export default class NewTeam {
  constructor() {
    this.team = [
      {
        name: 'Лучник',
        type: 'Bowman',
        health: 50,
        level: 1,
        attack: 40,
        defence: 10,
      },
      {
        name: 'Мечник',
        type: 'Swordsman',
        health: 50,
        level: 1,
        attack: 40,
        defence: 10,
      },
      {
        name: 'Зомби',
        type: 'Zombie',
        health: 50,
        level: 1,
        attack: 40,
        defence: 10,
      },
    ];
    this.length = this.team.length;
  }

  * [Symbol.iterator]() {
    // это генератор
    // и здесь есть доступ к this
    // остаётся лишь правильно написать yield
    for (let i = 0; i <= this.length - 1; i++) {
      yield this.team[i];
    }
  }
}
