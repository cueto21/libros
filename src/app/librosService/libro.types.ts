
export interface consultaLibros {
    ready: boolean;
    type: string;
    data: consultaProducts[];
}


export interface consultaProducts {
    id: number;
    name: string;
    sku: number;
    price: number;
    description: string;
    image: string;
    
}

export interface checkout {
    client: string;
    detail: detail[];
}

export interface detail {
    id: number;
    price: number;
    quantity:number;
}
