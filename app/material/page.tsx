import Footer from "@/components/Footer/Footer";
import Material from "@/components/Material/Material";
import NavBar from "@/components/NavBar/NavBar";

export default function Page() {
    return (
        <>
            <div className="relative bg-cover bg-no-repeat max-h-full max-w-[1440px]" style={{ backgroundImage: `url("/materialpage-bg.jpeg")` }}>
                <main className="p-6">
                    <NavBar />
                    <div className="bg-white p-8 rounded-lg shadow-xl mt-28 mx-auto w-full sm:w-[1016.95px]">
                        <p className="mb-4 text-gray-400 text-left">
                            Auf der Seite Material bekommt ihr eine Vielzahl von Materialsammlungen rund um das Thema (Post-) Kolonialismus und Dekolonisierung. In den Rubriken Bildungsmaterial, Videos, Literatur und Podcasts haben wir für euch zahlreiche verlinkte Ressourcen zusammengestellt, um euch bei der weiteren Auseinandersetzung mit dem Thema zu unterstützen. Die Auswahl an Materialien wird stetig erweitert, sodass ihr regelmäßig neue Entdeckungen machen könnt. Wenn ihr eigene Empfehlungen habt, zögert nicht, sie mit uns zu teilen - wir nehmen gerne empfohlene oder von euch erstellte Materialien in unsere Sammlung auf.
                        </p>
                    </div>
                    <Material />
                    <Footer />
                </main>
            </div>
        </>
    )
}