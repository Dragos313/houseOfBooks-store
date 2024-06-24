import getBillboard from "@/actions/get-billboard";
import Container from "@/components/ui/container";
import Billboard from "@/components/billboard"
import getEditions from "@/actions/get-editions"
import EditionList from "@/components/edition-list";
export const revalidate = 0;

const HomePage = async () => {
    const editions = await getEditions({isFeatured: true});
    const billboard = await getBillboard("c478c68a-0a87-473f-880d-621bb67b7cde");
    return (
        <Container>
            <div className="space-y-10 pb-10">
                <Billboard data={billboard}/>
                <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
                    <EditionList title="Featured Editions" items={editions}/>
                </div>
            </div>
        </Container>
    );
}

export default HomePage;