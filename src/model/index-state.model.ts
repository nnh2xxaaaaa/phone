import { InfoPhone, ListOrder, save_order } from "./index-list-phone";

export interface State {
    phone: InfoPhone[];
    id_order: string;
    product_by_id: InfoPhone,
    list_order: ListOrder[];
    quantity_order_phone: number | string,
    total_order_phone: number,
    vat: number,
    total_cash: number
    discount: number,
    shipping: number,
    saveTracking: [{ tracking_order: string; list_order: ListOrder[] }] | any;
}