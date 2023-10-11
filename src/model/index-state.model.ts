import { InfoPhone, ListOder } from "./index-list-phone";

export interface State {
    phone: InfoPhone[];
    id_order: string;
    product_by_id: InfoPhone,
    list_order: ListOder[];
    quantity_order_phone: number | string,
    total_order_phone: number,
    vat: number,
    total_cash: number
    discount: number,
    shipping: number
}