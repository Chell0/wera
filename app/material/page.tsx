import Footer from "@/components/Footer/Footer";
import Material from "@/components/Material/Material";
import NavBar from "@/components/NavBar/NavBar";

export default function Page() {
    return (
        <>
            <div className="relative bg-fixed bg-cover bg-center min-h-screen" style={{ backgroundImage: `url("/materialpage-bg.jpeg")` }}>
                <main className="p-6">
                    <NavBar />
                    <div className="bg-white p-8 rounded-lg shadow-xl mt-10 mx-auto w-full sm:w-[1016.95px]">
                        <h1 className="text-orange-400 text-2xl font-semibold mb-4 text-left">Material</h1>
                        <p className="mb-4 text-gray-400 text-left">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </p>
                    </div>
                    <Material />
                    <Footer />
                </main>
            </div>
        </>
    )
}