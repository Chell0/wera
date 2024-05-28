import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";

export default function Page() {
    return (
        <>
            <div className="relative bg-cover bg-no-repeat bg-local"
                style={{ backgroundImage: `url("/homepage-bg.jpeg")` }}>
                <main className={`p-6`}>
                    <NavBar />
                    <div className="bg-white rounded-xl shadow-xl p-10">
                    </div>
                    <Footer />
                </main>
            </div>
        </>
    );
}
