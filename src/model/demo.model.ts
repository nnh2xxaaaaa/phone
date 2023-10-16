export interface Root {
    phone: Phone
}

export interface Phone {
    phone: Phone2[]
    id_order: string
    product_by_id: ProductById
    list_order: any[]
    quantity_order_phone: number
    total_order_phone: number
    vat: number
    total_cash: number
    discount: number
    shipping: number
    saveTracking: SaveTracking[]
    search_order: SearchOrder[]
}

export interface Phone2 {
    id: string
    name: string
    cash: number
    display: string
    inch: string
    ram: string
    memory: string
    img: string
    operating_system: string
    installment: number
}

export interface ProductById {
    id: string
    name: string
    cash: number
    display: string
    inch: string
    ram: string
    memory: string
    img: string
    operating_system: string
    installment: number
}

export interface SaveTracking {
    tracking_order: string
    list_order: ListOrder[]
}

export interface ListOrder {
    id: string
    name: string
    cash: number
    display: string
    inch: string
    ram: string
    memory: string
    img: string
    operating_system: string
    installment: number
    quantity: number
}

export interface SearchOrder {
    tracking_order: string
    list_order: ListOrder2[]
}

export interface ListOrder2 {
    id: string
    name: string
    cash: number
    display: string
    inch: string
    ram: string
    memory: string
    img: string
    operating_system: string
    installment: number
    quantity: number
}
