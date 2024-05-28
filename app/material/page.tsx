import Link from "next/link";

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
                        <p className="mb-4 text-gray-600 text-left">
                            Auf der Seite Material bekommt ihr eine Vielzahl von Materialsammlungen rund um das Thema (Post-) Kolonialismus und Dekolonisierung. In den Rubriken Bildungsmaterial, Videos, Literatur und Podcasts haben wir für euch zahlreiche verlinkte Ressourcen zusammengestellt, um euch bei der weiteren Auseinandersetzung mit dem Thema zu unterstützen. Die Auswahl an Materialien wird stetig erweitert, sodass ihr regelmäßig neue Entdeckungen machen könnt. Wenn ihr eigene Empfehlungen habt, zögert nicht, sie mit uns zu teilen - wir nehmen gerne empfohlene oder von euch erstellte Materialien in unsere Sammlung auf. <br />Wenn auch ihr als Institution oder Einzelperson in dieser Datenbank genannt werden möchtet, könnt ihr das entsprechende <Link href={`https://cloud.hamburg.global/index.php/apps/forms/s/XT2M4r4gyyGEryCTpiW6PNb7`} target="_blank" rel="noopener noreferrer" className="text-orange-500 font-semibold">Formular</Link> ausfüllen. Ossara e.V. übernimmt keine Verantwortung für den vermittelten Inhalt der Speaker:innen, noch stellen die Menschen in irgendeiner Weise die offizielle Position von Ossara e.V. dar.
                        </p>
                    </div>
                    <Material />
                    <Footer />
                </main>
            </div>
        </>
    )
}