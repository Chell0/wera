import Datenbank from "@/components/Datenbank/Datenbank";
import Footer from "@/components/Footer/Footer";
import NavBar from "@/components/NavBar/NavBar";

export default function Page() {
    return (
        <>
            <div className={`relative bg-cover bg-no-repeat bg-local`} style={{ backgroundImage: `url("/datenbank-bg.png")` }}>
                <main className="p-6">
                    <NavBar />
                    <Datenbank />
                    <Footer />
                </main>
            </div>
        </>
    )
}