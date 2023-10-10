import { createReducer, on } from '@ngrx/store';
import { State } from 'src/model/index-state.model';
import { getListPhone } from './store-phone-action.action';

export const initialState: State = { phone: [] };

export const phoneReducer = createReducer(
    initialState,
    on(getListPhone, (state, { listPhone }) => ({
        phone: [...state.phone, listPhone]
    })),

);
