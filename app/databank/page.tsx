import Databank from "@/components/Databank/Databank";
import Footer from "@/components/Footer/Footer";
import NavBar from "@/components/NavBar/NavBar";

export default function Page() {
    return (
        <>
            <div className="relative bg-fixed bg-cover bg-center min-h-screen" style={{ backgroundImage: `url("/homepage-bg.jpeg")` }}>
                <main className="p-6">
                    <NavBar />
                    <Databank />
                    <Footer />
                </main>
            </div>
        </>
    )
}