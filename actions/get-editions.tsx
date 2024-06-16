import {Edition} from "@/types"
import qs from "query-string";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/editions`;

interface Query {
    categoryId?: string;
    isFeatured?: boolean;
    publishingHouseId?: string;
    bookId?: string;
    languageId?: string;
}

const getEditions = async (query: Query): Promise<Edition[]> => {
    const url = qs.stringifyUrl({
        url: URL,
        query: {
            categoryId: query.categoryId,
            publishingHouseId: query.publishingHouseId,
            bookId: query.bookId,
            languageId: query.languageId,
            isFeatured: query.isFeatured,
        },
    })
    const res = await fetch(url);
    return res.json();
};

export default getEditions;