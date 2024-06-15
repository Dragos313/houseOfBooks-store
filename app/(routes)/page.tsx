import getBillboard from "@/actions/get-billboard";
import Container from "@/components/ui/container";
import Billboard from "@/components/billboard"
import getEditions from "@/actions/get-editions"
import EditionList from "@/components/edition-list";
export const revalidate = 0;

const HomePage = async () => {
    const editions = await getEditions({isFeatured: true});
    const billboard = await getBillboard("1528b2ae-af1a-4573-b5e1-d0e16e7371a8");
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