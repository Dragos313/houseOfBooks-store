export interface Billboard {
    id: string;
    label: string;
    imageUrl: string;
};

export interface Category {
    id: string;
    name: string;
    billboard: Billboard;
};

export interface Edition {
    id: string;
    category: Category;
    name: string;
    price: string;
    isFeatured: boolean;
    images: Image[];
    book: Book;
    publishingHouse: PublishingHouse;
    language: Language;
}

export interface Image {
    id: string;
    url: string;
}

export interface Book {
    id: string;
    name: string
}

export interface PublishingHouse {
    id: string;
    name: string;
}

export interface Language {
    id: string;
    name: string;
}