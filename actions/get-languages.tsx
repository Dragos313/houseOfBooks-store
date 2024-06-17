import {Language} from "@/types"

const URL = `${process.env.NEXT_PUBLIC_API_URL}/languages`;

const getLanguages = async (): Promise<Language[]> => {
    const res = await fetch(URL);
    return res.json();
};

export default getLanguages;