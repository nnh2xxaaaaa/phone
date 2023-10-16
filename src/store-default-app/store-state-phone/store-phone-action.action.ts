import { createAction, props } from '@ngrx/store';
import { InfoProduct } from 'src/model/index-list-phone';

export enum PHONE {
    'LIST_PHONE' = "[PHONE] GET PHONE LIST",
    'ODER_PHONE' = "[ODER_PHONE] GET ODER PHOME",
    'SAVE_ID_ORDER_PHONE' = "[ID_ODER]  SAVE_ID_ORDER_PHONE",
    'SELECT_PHONE' = "[SELECT_PHONE] GET BY ID ORDER",
    'ADD_PRODUCT' = "[ADD_PRODUCT] GET ADD PRODUCT",
    'QUANTITY' = "[QUANTITY] GET QUANTITY",
    'DELET_IN_ORDER' = "[DELETIN_PRODUCT] GET DELETE IN ORDER",
    'TOTAL_ORDER' = "[TOTAL] GET TOTAL ORDER",
    'SHIPPING' = "[SHIPPING] GET SHIPPING",
    'VAT' = "[VAT] GET VAT",
    'DISCOUNT' = "[DISCOUNT] GET DISCOUNT",
    "ALL_TOTAL" = "[ALL] GET ALL TOTAL",
    'EXPORT EXCEL' = "[EXPORT] EXCEL",
    "SAVE_ORDER_FORM_CUSTOMER" = "[SAVE_ORDER] SAVE ORDERFORM CUSTOMER",
    "RESET_ORDER" = '[RESET ORDER] GET RESET ORDER',
    'FIND_ORDER' = '[ORDER] GET FIND ORDER',
    'SEARCH_TRACKING' = '[TRACKING] GET SEARCH TRACKING  '

}

enum LAPTOP {
    'GET_ALL_LAPTOP' = '[LAPTOP]  GET ALL'
}

export const getListLaptop = createAction(
    LAPTOP.GET_ALL_LAPTOP,
    props<{ listLaptop: InfoProduct[] }>()
)

export const getListPhone = createAction(
    PHONE.LIST_PHONE, props<{ listPhone: InfoProduct[] }>(),
)

export const save_id_order = createAction(
    PHONE.SAVE_ID_ORDER_PHONE, props<{ id_order: string }>()
)

export const select_item_phone = createAction(
    PHONE.SELECT_PHONE
)

export const set_quantity = createAction(
    PHONE.QUANTITY,
    props<{ quantity: number }>()
)

export const add_order_phone = createAction(
    PHONE.ADD_PRODUCT
)

export const total_order_phone = createAction(
    PHONE['TOTAL_ORDER']
)

export const discounts = createAction(
    PHONE.DISCOUNT,
    props<{ discount: number }>()
)

export const shipping = createAction(
    PHONE.SHIPPING
)

export const vat = createAction(
    PHONE.VAT
)

export const all_cash = createAction(
    PHONE.ALL_TOTAL
)

export const delete_in_order = createAction(
    PHONE.DELET_IN_ORDER,
    props<{ id: string }>()
)

export const exportExcel = createAction(
    PHONE['EXPORT EXCEL']
)

export const saveTrackingCustomer = createAction(
    PHONE.SAVE_ORDER_FORM_CUSTOMER,
    props<{ trackingId: string }>()
)

export const resetOrder = createAction(
    PHONE.RESET_ORDER
)

export const findOrder = createAction(
    PHONE.FIND_ORDER,
    props<{ idOrder: string }>()
)

// export const searchTracking = createAction(
//     PHONE.SEARCH_TRACKING,
//     props<{ idTracking: string }>()
// )