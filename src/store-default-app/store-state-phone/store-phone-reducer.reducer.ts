import { createReducer, on } from '@ngrx/store';
import { State } from 'src/model/index-state.model';
import { add_order_phone, all_cash, discounts, getListPhone, save_id_order, select_item_phone, set_quantity, shipping, total_order_phone, vat } from './store-phone-action.action';

export const initialState: State = {
    phone: [],
    id_order: '',
    product_by_id: {
        id: '',
        name: '',
        cash: 0,
        display: '',
        inch: '',
        ram: '',
        memory: '',
        img: '',
        operating_system: '',
        installment: 0
    },
    list_order: [],
    quantity_order_phone: 0,
    total_order_phone: 0,
    vat: 0,
    total_cash: 0,
    discount: 0,
    shipping: 0

};

export const phoneReducer = createReducer(
    initialState,
    on(getListPhone, (state, { listPhone }) => ({
        ...state,
        phone: [...state.phone, listPhone]
    })),

    on(save_id_order, (state, { id_order }) => ({
        ...state,
        id_order: id_order
    })),

    on(set_quantity, (state, { quantity }) => ({
        ...state,
        quantity_order_phone: quantity
    })),

    on(select_item_phone, (state) => {
        const selectedPhone = state.phone.find((item) => item.id === state.id_order);

        if (selectedPhone) {
            const {
                id,
                name,
                cash,
                display,
                inch,
                ram,
                memory,
                img,
                operating_system,
                installment
            } = selectedPhone;

            return {
                ...state,
                product_by_id: {
                    id,
                    name,
                    cash,
                    display,
                    inch,
                    ram,
                    memory,
                    img,
                    operating_system,
                    installment: installment,

                },
            };
        }

        return state;
    }),
    on(add_order_phone, (state) => {
        const order = state.phone.find((order_phone) => order_phone.id === state.id_order);
        if (order) {
            const {
                id,
                name,
                cash,
                display,
                inch,
                ram,
                memory,
                img,
                operating_system,
                installment,
            } = order;
            const quantity = Number(state.quantity_order_phone);

            const orderby = [...state.list_order, {
                id,
                name,
                cash,
                display,
                inch,
                ram,
                memory,
                img,
                operating_system,
                installment,
                quantity,
            }];

            return {
                ...state,
                list_order: orderby,
            };
        }

        return state;
    }),
    on(total_order_phone, (state) => ({
        ...state,
        total_order_phone: state.list_order.reduce((total, item) => {
            return total + item.cash! * item.quantity!;
        }, 0)
    })),

    on(vat, (state) => ({
        ...state,
        vat: state.total_order_phone * 0.1
    })),

    on(discounts, (state, { discount }) => ({
        ...state,
        discount: state.total_order_phone * discount
    })),

    on(shipping, (state) => ({
        ...state,
        shipping: state.total_order_phone * 0.02
    })),

    on(all_cash, (state) => ({
        ...state,
        total_cash: state.total_order_phone + state.vat + state.shipping - state.discount
    }))

);
