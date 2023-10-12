export interface ModelPhone {
    phone: Phone[]
    id_order: string
    product_by_id: ProductById
    list_order: ListOrder[]
    quantity_order_phone: number
    total_order_phone: number
    vat: number
    total_cash: number
    discount: number
    shipping: number
}

export interface Phone {
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
