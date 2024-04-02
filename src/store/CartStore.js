import { makeAutoObservable, runInAction } from "mobx";

export default class CartStore {
  constructor() {
    this._items = JSON.parse(localStorage.getItem("cartItems")) || [];
    makeAutoObservable(this);
    window.addEventListener("beforeunload", () => {
      localStorage.setItem("cartItems", JSON.stringify(this._items));
    });
  }

  addItem(item) {
    const existingItem = this._items.find((i) => i.id === item.id);
    if (existingItem) {
      runInAction(() => {
        existingItem.count += 1;
      });
    } else {
      runInAction(() => {
        this._items.push({ ...item, count: 1 });
      });
    }
  }

  removeItem(itemId) {
    const itemIndex = this._items.findIndex((i) => i.id === itemId);
    if (itemIndex > -1) {
      runInAction(() => {
        this._items.splice(itemIndex, 1);
      });
    }
  }

  incrementItem(itemId) {
    const item = this._items.find((i) => i.id === itemId);
    if (item) {
      runInAction(() => {
        item.count += 1;
      });
    }
  }

  decrementItem(itemId) {
    const item = this._items.find((i) => i.id === itemId);
    if (item) {
      if (item.count > 1) {
        runInAction(() => {
          item.count -= 1;
        });
      } else {
        this.removeItem(itemId);
      }
    }
  }

  get items() {
    return this._items;
  }

  get totalCost() {
    return this._items.reduce(
      (total, item) => total + item.price * item.count,
      0
    );
  }
}
