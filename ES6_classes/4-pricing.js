import Currency from './3-currency.js';

export default class Pricing {
    constructor(amount, Currency) {
        this._amount = amount;
        this._Currency = Currency;
    }

    get amount() {
        return this._amount;
    }

    set amount(value) {
        this._amount = value;
    }

    get Currency() {
        return this._Currency;
    }

    set Currency(value) {
        this._Currency = value;
    }

    displayFullPrice() {
        return (`${this.amount} ${this.Currency.name} (${this.Currency.code})`)
    }

    static convertPrice(amount, conversionRate){
        return amount * conversionRate;
    }
}