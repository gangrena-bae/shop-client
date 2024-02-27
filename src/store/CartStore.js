import { makeAutoObservable } from "mobx";

export default class CartStore {
  constructor() {
    this._items = JSON.parse(localStorage.getItem("cartItems")) || [];
    makeAutoObservable(this);

    window.addEventListener("beforeunload", () => {
      localStorage.setItem("cartItems", JSON.stringify(this._items));
    });
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
