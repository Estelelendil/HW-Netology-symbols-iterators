/* eslint-disable no-plusplus */
export default class Team {
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

  // eslint-disable-next-line class-methods-use-this
  [Symbol.iterator]() {
    let index = -1;
    return {
      next: () => {
        index++;
        if (index < this.length) {
          return {
            done: false,
            value: this.team[index],
          };
        }
        return {
          done: true,
        };
      },
    };
  }
}
