import Footer from "@/components/Footer/Footer";
import Kalender from "@/components/Kalender/Kalender";
import NavBar from "@/components/NavBar/NavBar";

export default function Page() {
    return (
        <>
            <div className={`relative bg-cover bg-no-repeat bg-local`} style={{ backgroundImage: `url("/kalender-bg.jpeg")` }}>
                <main className={`p-6`}>
                    <NavBar />
                    {/* <div className='bg-white p-4 mt-20 max-w-screen-lg rounded-lg shadow-lg'>
                        <p className="text-black text-sm font-md">
                            An dieser Stelle könnt ihr eine Vielzahl an aktuellen Veranstaltungsterminen entdecken, die sich intensiv mit den Themen um (Post-) Kolonialismus und Dekolonisierung befassen.
                        </p>
                    </div> */}
                    <Kalender />
                    <Footer />
                </main>
            </div>
        </>
    )
}