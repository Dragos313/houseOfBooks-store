import getBooks from "@/actions/get-books";
import getCategory from "@/actions/get-category";
import getEditions from "@/actions/get-editions";
import getLanguages from "@/actions/get-languages";
import getPublishingHouses from "@/actions/get-publishingHouses";
import Billboard from "@/components/billboard";
import Container from "@/components/ui/container";
import Filter from "./components/filter";
import NoResults from "@/components/ui/no-results";
import EditionCard from "@/components/ui/edition-card";
import MobileFilter from "./components/mobile-filters";

export const revalidate = 0;

interface CategoryPageProps {
    params: {
        categoryId: string;
    }
    searchParams: {
        bookId: string;
        publishingHouseId: string;
        languageId: string;
    }
}

const CategoryPage: React.FC<CategoryPageProps> = async ({
    params,
    searchParams
}) => {
    const editions = await getEditions({
        categoryId: params.categoryId,
        bookId: searchParams.bookId,
        publishingHouseId: searchParams.publishingHouseId,
        languageId: searchParams.languageId
    });
    const books = await getBooks();
    const publishingHouses = await getPublishingHouses();
    const languages = await getLanguages();
    const category = await getCategory(params.categoryId);
    return (
        <div className="bg-white">
            <Container>
                <Billboard data = {category.billboard}/>
                <div className="px-4 sm:px-6 lg:px-8 pb-24">
                    <div className="lg:grid lg:grid-cols-5 lg:gap-x-8">
                        <MobileFilter books={books} publishingHouses={publishingHouses} languages={languages}/>
                        <div className="hidden lg:block">
                            <Filter
                                valueKey="bookId"
                                name="Books"
                                data={books}
                            />
                            <Filter
                                valueKey="publishingHouseId"
                                name="Publishing House"
                                data={publishingHouses}
                            />
                            <Filter
                                valueKey="languageId"
                                name="Language"
                                data={languages}
                            />
                        </div>
                        <div className="mt-6 lg:col-span-4 lg:mt-0">
                            {editions.length === 0 && <NoResults/>}
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                                {editions.map((item) => (
                                    <EditionCard
                                        key={item.id}
                                        data={item}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
}

export default CategoryPage;