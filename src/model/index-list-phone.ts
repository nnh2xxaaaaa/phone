export interface InfoProduct {
    id?: string
    name?: string;
    cash?: number;
    display?: string;
    inch?: string;
    ram?: string;
    memory?: string;
    img?: string;
    operating_system?: string;
    installment?: number,
    type: string
}

export interface ListOrder {
    id?: string
    name?: string;
    cash?: number;
    display?: string;
    inch?: string;
    ram?: string;
    memory?: string;
    img?: string;
    operating_system?: string;
    installment?: number,
    quantity?: number
}


export interface save_order {
    tracking_order: string,
    listOder: ListOrder[]
}