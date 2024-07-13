import NavBar from "@/components/NavBar/NavBar";
import Footer from "@/components/Footer/Footer";
import Datenbank from "@/components/Datenbank/Datenbank";

export default function Page() {
    return (
        <>
            <div className="relative bg-cover bg-no-repeat bg-local"
                style={{ backgroundImage: `url("/homepage-bg.png")` }}>
                <main className={`p-6`}>
                    <NavBar />
                    <div className="bg-white rounded-xl shadow-xl p-5 mt-20">
                        <h1>Coming Soon ...</h1>
                    </div>
                    <Footer />
                </main>
            </div>
        </>
    );
}
