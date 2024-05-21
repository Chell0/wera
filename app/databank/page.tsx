import Databank from "@/components/Databank/Databank";
import Footer from "@/components/Footer/Footer";
import NavBar from "@/components/NavBar/NavBar";

export default function Page() {
    return (
        <>
            <div className={`relative bg-cover bg-no-repeat bg-local`} style={{ backgroundImage: `url("/databank-bg.jpeg")` }}>
                <main className="p-6">
                    <NavBar />
                    <Databank />
                    <Footer />
                </main>
            </div>
        </>
    )
}