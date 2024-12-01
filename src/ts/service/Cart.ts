import Buyable from '../domain/Buyable';

export default class Cart {
    private _items: Buyable[] = [];

    add(item: Buyable): void {
        this._items.push(item);
    }

    get items(): Buyable[] {
        return [...this._items];
    }

    price(discount: number): number {
        const priceSum: number = this.items.reduce((accum, item) => accum + item.price, 0);
        return discount < 1 && discount > 0 ? priceSum - priceSum * Number(discount) : priceSum;
    }

    delete(id: number): void {
        this._items = this.items.filter(e => e.id !== id);
    }

}