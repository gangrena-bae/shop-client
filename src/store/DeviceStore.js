import { makeAutoObservable } from "mobx";

export default class DeviceStore {
  constructor() {
    this._cart = [];
    this._types = [];
    this._brands = [];
    this._devices = [];
    this._selectedType = {};
    this._selectedBrand = {};
    this._page = 1;
    this._totalCount = 0;
    this._limit = 3;
    this._searchTerm = ""; // Добавляем состояние для поискового запроса
    makeAutoObservable(this);
  }

  setCart(cart) {
    this._cart = cart;
  }

  setTypes(types) {
    this._types = types;
  }

  setBrands(brands) {
    this._brands = brands;
  }

  setDevices(devices) {
    this._devices = devices;
  }

  setSelectedType(type) {
    this.setPage(1);
    this._selectedType = type;
  }

  setSelectedBrand(brand) {
    this.setPage(1);
    this._selectedBrand = brand;
  }

  setPage(page) {
    this._page = page;
  }

  setTotalCount(count) {
    this._totalCount = count;
  }

  setSearchTerm(searchTerm) {
    // Добавляем метод для установки поискового запроса
    this._searchTerm = searchTerm;
  }

  get types() {
    return this._types;
  }

  get brands() {
    return this._brands;
  }

  get devices() {
    return this._devices;
  }

  get selectedType() {
    return this._selectedType;
  }

  get selectedBrand() {
    return this._selectedBrand;
  }

  get totalCount() {
    return this._totalCount;
  }

  get page() {
    return this._page;
  }

  get limit() {
    return this._limit;
  }

  get cart() {
    return this._cart;
  }

  get searchTerm() {
    // Добавляем геттер для получения поискового запроса
    return this._searchTerm;
  }
}
