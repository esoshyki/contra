import addCollosionsHandlers from './collisions';

/* Тут все настройки matter-js. В главный класс импортируем функции, чтобы не загружать код
Присваиваем функциям наш класс в качестве this;
*/

export default class MatterJS {
  constructor(factory) {
    this.factory = factory;
    this.addCollosions = addCollosionsHandlers.bind(this);
  }

  setupWorld = () => {
    "setup world"
    this.addCollosions();
  }

}