import Footer from "@/components/Footer/Footer";
import NavBar from "@/components/NavBar/NavBar";
import { client } from "../lib/sanityClient";
import { Resource } from "../lib/interface";
import ResourceLibrary from "@/components/ResourceLibrary/ResourceLibrary";


export const revalidate = 10; // Revalidate at most once every 10 seconds


export const fetchResources = async () => {
    const resources = await client.fetch(`
    *[_type == "resourceLibrary"]{
    _id,
      name,
      kontakt,
      website,
      kategorien,
      angebote
    }`);
    return resources;
};

const Page = async () => {
    const resources: Resource[] = await fetchResources();

    return (
        <>
            <div className={`relative bg-cover bg-no-repeat bg-local`} style={{ backgroundImage: `url("/datenbank-bg.png")` }}>
                <main className="p-6">
                    <NavBar />
                    {/* <Datenbank /> */}
                    <ResourceLibrary resources={resources} />
                    <Footer />
                </main>
            </div>
        </>
    )
}

export default Page;