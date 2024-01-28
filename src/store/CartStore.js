import { makeAutoObservable } from "mobx";

export default class CartStore {
  constructor() {
    this._items = [];
    makeAutoObservable(this);
  }

  addItem(item) {
    this.items.push(item);
  }

  removeItem(index) {
    this.items.splice(index, 1);
  }

  get items() {
    return this._items;
  }

  get totalCost() {
    return this.items.reduce((total, item) => total + item.price, 0);
  }
}
