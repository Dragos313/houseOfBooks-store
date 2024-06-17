import {Book} from "@/types"

const URL = `${process.env.NEXT_PUBLIC_API_URL}/books`;

const getBooks = async (): Promise<Book[]> => {
    const res = await fetch(URL);
    return res.json();
};

export default getBooks;