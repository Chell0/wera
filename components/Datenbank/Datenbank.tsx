"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { client } from "@/app/lib/sanityClient";
import { Venue } from "@/app/lib/interface";

export default function Datenbank() {
  const [venues, setVenues] = useState<Venue[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchVenues = async () => {
      const query = `*[_type == "datenbank"] { name, ansprechperson, kontakt, angebote, website }`;
      const result = await client.fetch(query);
      setVenues(result);
      setLoading(false);
    };
    fetchVenues();
  }, []);

  return (
    <>
      <div className="container mx-auto mt-20">
        <div className="w-full flex items-center justify-center mt-10 sm:px-2">
          <div className="bg-white shadow-lg rounded-xl max-w-lg sm:px-4">
            <h2 className="text-orange-500 py-2 px-2 lg:text-3xl md:text-xl sm:text-lg font-bold text-center">
              Unser Datenbank
            </h2>
          </div>
        </div>
        <div className="bg-white p-8 rounded-lg shadow-xl mx-auto mt-10 w-full sm:w-[1016.95px]">
          <p className="text-left text-md text-gray-600">
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
        <div className="overflow-x-auto shadow-xl rounded-xl mt-20">
          <table className="min-w-full divide-y divide-gray-600 bg-white">
            <thead className="bg-gray-200">
              <tr>
                <th
                  scope="col"
                  className="bg-orange-500 px-6 py-3 text-left text-sm font-bold text-white uppercase tracking-wider"
                >
                  Name
                </th>
                <th
                  scope="col"
                  className="bg-orange-500 px-6 py-3 text-left text-sm font-bold text-white uppercase tracking-wider border-l border-gray-300"
                >
                  Ansprechperson
                </th>
                <th
                  scope="col"
                  className="bg-orange-500 px-6 py-3 text-left text-sm font-bold text-white uppercase tracking-wider border-l border-gray-300"
                >
                  Kontakt
                </th>
                <th
                  scope="col"
                  className="bg-orange-500 px-6 py-3 text-left text-sm font-bold text-white uppercase tracking-wider border-l border-gray-300"
                >
                  Angebote
                </th>
                <th
                  scope="col"
                  className="bg-orange-500 px-6 py-3 text-left text-sm font-bold text-white uppercase tracking-wider border-l border-gray-300"
                >
                  Website
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-300">
              {loading ? (
                <tr>
                  <td
                    colSpan={5}
                    className="px-6 py-4 text-center text-gray-600"
                  >
                    Loading...
                  </td>
                </tr>
              ) : (
                venues.map((venue, index) => (
                  <tr key={index}>
                    <td className="px-6 py-4 text-wrap md:text-balance text-xs font-medium text-gray-900">
                      {venue.name}
                    </td>
                    <td className="px-6 py-4 text-wrap md:text-balance text-xs text-gray-600 border-l border-gray-300">
                      {venue.ansprechperson}
                    </td>
                    <td className="px-6 py-4 text-wrap md:text-balance text-xs text-gray-600 border-l border-gray-300">
                      {venue.kontakt}
                    </td>
                    <td className="px-6 py-4 text-wrap md:text-balance text-xs text-gray-600 border-l border-gray-300">
                      {venue.angebote}
                    </td>
                    <td className="px-6 py-4 text-wrap md:text-balance text-xs text-gray-600 border-l border-gray-300">
                      <Link
                        href={venue.website}
                        target="_blank"
                        rel="noreferrer"
                        className="text-orange-500 hover:text-gray-600"
                      >
                        {venue.website}
                      </Link>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
