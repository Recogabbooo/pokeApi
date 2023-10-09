export interface listPokemon {
    count: number;
    next: string | null;
    previous: string | null, 
    results: {
        [x: string]: any;
        name: string;
        url: string;
    }
}

export interface pokemon {
    id: number,
    name: string,
    sprites: {
        front_default: string
    }
}