import {Edition} from "@/types"

const URL = `${process.env.NEXT_PUBLIC_API_URL}/editions`;

const getEdition = async (id: string): Promise<Edition> => {
    const res = await fetch(`${URL}/${id}`);
    return res.json();
};

export default getEdition;