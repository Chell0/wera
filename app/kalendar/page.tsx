import Footer from "@/components/Footer/Footer";
import NavBar from "@/components/NavBar/NavBar";

export default function Page() {
    return (
        <>
            <div className="relative bg-fixed bg-cover bg-center" style={{ backgroundImage: `url("/kalendar-bg.jpeg")` }}>
                <main className="p-6">
                    <NavBar />
                    <h1>Welcome to the Kalendar Page Coming Soon ...</h1>
                    <Footer />
                </main>
            </div>
        </>
    )
}