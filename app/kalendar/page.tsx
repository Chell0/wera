import Footer from "@/components/Footer/Footer";
import Kalendar from "@/components/Kalendar/Kalendar";
import NavBar from "@/components/NavBar/NavBar";

export default function Page() {
    return (
        <>
            <div className={`relative bg-cover bg-no-repeat bg-local`} style={{ backgroundImage: `url("/kalendar-bg.jpeg")` }}>
                <main className={`p-6`}>
                    <NavBar />
                    <Kalendar />
                    <Footer />
                </main>
            </div>
        </>
    )
}