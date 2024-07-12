"use client"

import { ResourceLibraryProps } from "@/app/lib/interface";
import Link from "next/link";
import { useState } from "react";

const ResourceLibrary: React.FC<ResourceLibraryProps> = ({ resources }) => {
    const [searchTerm, setSearchTerm] = useState<string>('');

    const filteredResources = resources.filter(resource => resource.kategorien.some(category => category.toLowerCase().includes(searchTerm.toLowerCase())));

    return (
        <div className="max-w-7xl mx-auto p-6">
            {/* <h1 className="text-3xl text-orange-600 font-bold mb-6">Resource Library</h1> */}
            <div className="bg-white p-5 m-1 rounded-xl shadow-lg items-center justify-center mt-10">
                <h1 className="text-orange-500 text-3xl font-bold p-3">
                    Datenbank
                </h1>
                <p className="text-gray-600 text-left text-md p-3">
                    Hier habt ihr die Möglichkeit, in unserer umfassenden Datenbank nach
                    Akteur:innen und Institutionen zu suchen, die sich aktiv mit den
                    Themen um (Post-) Kolonialismus und Dekolonisierung
                    auseinandersetzen. Zudem könnt ihr hier Speaker:innen und
                    Bildungsreferent:innen aus Hamburg finden, die sich mit großer
                    Expertise und Leidenschaft mit diesen wichtigen Themen beschäftigen.
                    Diese Datenbank wird regelmäßig aktualisiert, um euch stets aktuelle
                    Informationen zu liefern.
                    <br />
                    Wenn auch ihr als Institution oder Einzelperson in dieser Datenbank
                    genannt werden möchtet, könnt ihr das entsprechende{" "}
                    <Link
                        href={`https://cloud.hamburg.global/index.php/apps/forms/s/XT2M4r4gyyGEryCTpiW6PNb7`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-orange-500 font-semibold"
                    >
                        Formular
                    </Link>{" "}
                    ausfüllen. Ossara e.V. übernimmt keine Verantwortung für den
                    vermittelten Inhalt der Speaker:innen, noch stellen die Menschen in
                    irgendeiner Weise die offizielle Position von Ossara e.V. dar.
                </p>
            </div>
            {/* SearchBox */}
            <input type="text" placeholder="Search Categories..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="mt-20 mb-6 p-2 border border-orange-300 rounded-lg" />
            <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-6">
                {filteredResources.map((resource) => (
                    <div key={resource._id} className="bg-white shadow-md rounded-lg p-4">
                        <h2 className="text-xl font-semibold">{resource.name}</h2>
                        <p className="text-gray-700"><strong>Kontakt:</strong> {resource.kontakt}</p>
                        <Link href={resource.website} className="text-orange-500 hover:underline" target="_blank" rel="noopener noreferrer">
                            <strong>Website:</strong> {resource.website}
                        </Link>
                        <div className="mt-4">
                            <strong>Kategorien:</strong>
                            <ul className="list-disc list-inside">
                                {resource.kategorien.map((category, index) => (
                                    <li key={index} className="text-amber-500">#{category}</li>
                                ))}
                            </ul>
                        </div>
                        <div className="mt-4">
                            <strong>Offerings:</strong>
                            <p className="text-gray-700">{resource.angebote}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ResourceLibrary;