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
    return { // метод должен вернуть объект с методом next()
      next() {
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
  // [Symbol.iterator]:function(){
  //   // [Symbol.iterator](){
  //   //   return this; }

  //   let index = 0;
  //   return { // метод должен вернуть объект с методом next()
  //     next() {
  //       if (index < this.team.length) {
  //         return {
  //           done: false,
  //           value: this.team.index,
  //         };
  //       }
  //       index++;
  //       return {
  //         done: true,
  //       };
  //     },
  //   };
  // };
}
