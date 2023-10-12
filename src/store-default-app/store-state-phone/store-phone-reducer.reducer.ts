import { createReducer, on } from '@ngrx/store';
import { State } from 'src/model/index-state.model';
import { add_order_phone, all_cash, delete_in_order, discounts, exportExcel, getListPhone, saveTrackingCustomer, save_id_order, select_item_phone, set_quantity, shipping, total_order_phone, vat } from './store-phone-action.action';
import * as XLSX from 'xlsx'

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
    shipping: 0,
    saveTracking: [
        {
            tracking_order: '',
            list_order: []
        }
    ]

};

export const phoneReducer = createReducer(
    initialState,
    on(getListPhone, (state, { listPhone }) => ({
        ...state,
        phone: [...state.phone].concat(listPhone)
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

            const groupId: { [key: string]: any } = {};

            orderby.forEach((item) => {

                if (item !== undefined) {
                    const id = item.id;
                    if (id !== '' && id !== undefined) {
                        if (groupId[id]) {
                            groupId[id].quantity += item.quantity;
                        } else {
                            groupId[id] = { ...item };
                        }
                    }
                }

            });

            return {
                ...state,
                list_order: Object.values(groupId),
            };
        }

        return state;
    }),

    on(delete_in_order, (state, { id }) => ({
        ...state,
        list_order: state.list_order.filter(list => list.id !== id),
    })),


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
    })),

    on(exportExcel, (state) => {
        const order = state.list_order
        if (order.length != 0) {
            const ws: XLSX.WorkSheet = XLSX.utils.json_to_sheet(order);

            const wb: XLSX.WorkBook = XLSX.utils.book_new();
            XLSX.utils.book_append_sheet(wb, ws, 'Sheet-1');

            const fileName = 'exported_data.xlsx';
            XLSX.writeFile(wb, fileName);
        } else {
            throw ('No data to export')
        }


        return state;
    }),
    on(saveTrackingCustomer, (state, { trackingId }) => ({
        ...state,
        saveTracking: [...state.saveTracking, { tracking_order: trackingId, list_order: state.list_order }],
    }))




);
