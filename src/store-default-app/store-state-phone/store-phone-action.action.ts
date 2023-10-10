import { createAction, props } from '@ngrx/store';
import { InfoPhone } from 'src/model/index-list-phone';

export enum PHONE {
    'LIST_PHONE' = "[PHONE] GET PHONE LIST"
}

export const getListPhone = createAction(
    PHONE.LIST_PHONE, props<{ listPhone: InfoPhone }>()
)