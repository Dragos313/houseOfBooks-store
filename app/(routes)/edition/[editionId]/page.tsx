import getEdition from "@/actions/get-edition";
import getEditions from "@/actions/get-editions";
import EditionList from "@/components/edition-list";
import Gallery from "@/components/gallery";
import Info from "@/components/info";
import Container from "@/components/ui/container";

interface EditionPageProps {
    params: {
        editionId: string;
    }
}

const EditionPage: React.FC<EditionPageProps> = async ({
    params
}) => {
    const edition = await getEdition(params.editionId);
    const suggestedEditions = await getEditions({
        categoryId: edition?.category?.id
    })
    return (
        <div className="bg-white">
            <Container>
                <div className="px-4 py-10 sm:px-6 lg:px-8">
                    <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
                        <Gallery images={edition.images}/>
                        <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
                            <Info data={edition}/>
                        </div>
                    </div>
                    <hr className="my-10"/>
                    <EditionList title="Related Items" items={suggestedEditions}/>
                </div>
            </Container>
        </div>
    );
}

export default EditionPage