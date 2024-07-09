import Category from "@/components/Category/Category";
import Footer from "@/components/Footer/Footer";
import NavBar from "@/components/NavBar/NavBar";

export default function Page() {
  return (
    <>
      <div
        className="relative bg-cover bg-no-repeat max-h-full max-w-[1440px]"
        style={{ backgroundImage: `url("/materialpage-bg.png")` }}
      >
        <main className="p-6">
          <NavBar />
          <div className="w-full flex items-center justify-center mt-10 sm:px-2">
            <div className="bg-white shadow-lg rounded-xl max-w-lg sm:px-4">
              <h2 className="text-orange-500 py-2 px-2 lg:text-3xl md:text-xl sm:text-lg font-bold text-center">
                Materials
              </h2>
            </div>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-xl mt-20 mx-auto w-full sm:w-[1016.95px]">
            <p className="mb-4 text-gray-600 text-left text-sm">
              Auf der Seite Material bekommt ihr eine Vielzahl von
              Materialsammlungen rund um das Thema (Post-) Kolonialismus und
              Dekolonisierung. In den Rubriken Bildungsmaterial, Videos,
              Literatur und Podcasts haben wir für euch zahlreiche verlinkte
              Ressourcen zusammengestellt, um euch bei der weiteren
              Auseinandersetzung mit dem Thema zu unterstützen. Die Auswahl an
              Materialien wird stetig erweitert, sodass ihr regelmäßig neue
              Entdeckungen machen könnt. Wenn ihr eigene Empfehlungen habt,
              zögert nicht, sie mit uns zu teilen - wir nehmen gerne empfohlene
              oder von euch erstellte Materialien in unsere Sammlung auf.
            </p>
          </div>
          <Category />
          <Footer />
        </main>
      </div>
    </>
  );
}
