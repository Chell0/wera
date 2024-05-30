import Link from 'next/link';
import React from 'react';

interface Venue {
    ort: string;
    beschreibung: string;
    personenKapazitat: string | number;
    kosten: string;
    kontakt: string;
    link: string;
}

const venues: Venue[] = [
    { ort: 'Freie Akademie der Künste', beschreibung: 'großer Veranstaltungssaal', personenKapazitat: 400, kosten: '', kontakt: 'Tel.: 040 32 46 32', link: '#' },
    { ort: 'Burg Seevetal', beschreibung: 'großer Veranstaltungssaal', personenKapazitat: 1000, kosten: '600', kontakt: 'Tel.: 041 05 55 23 68', link: '#' },
    { ort: 'Handelskammer', beschreibung: 'Verschiedene Veranstaltungsräume', personenKapazitat: 300, kosten: 'bis 2.500 Euro', kontakt: 'Tel.: 040 361 38 240', link: '#' },
    { ort: 'Event-Lounge Besenbinderhof', beschreibung: 'Veranstaltungssaal', personenKapazitat: 1800, kosten: '900', kontakt: 'Tel.: 040 647 10 97', link: '#' },
    { ort: 'FUX eG', beschreibung: 'Veranstaltungsräume, Seminarräume', personenKapazitat: 1300, kosten: '1100', kontakt: 'Tel.: 040 8060 9220', link: '#' },
    { ort: 'Zentralbibliothek', beschreibung: 'Veranstaltungsräume', personenKapazitat: 800, kosten: '500', kontakt: 'Tel.: 040 42 6062 15', link: '#' },
    { ort: 'Museum der Arbeit', beschreibung: 'Veranstaltungsräume', personenKapazitat: 350, kosten: 'ca. 2.500 Euro (Raummiete und Ausstattung)', kontakt: 'Tel.: 040 428 91 92 0', link: '#' },
    { ort: 'Körber Forum', beschreibung: 'Veranstaltungsräume', personenKapazitat: 1000, kosten: '250', kontakt: 'Tel.: 040 8081 92 0', link: '#' },
    { ort: 'Hamburg-Haus', beschreibung: 'Veranstaltungsräume', personenKapazitat: 400, kosten: '300', kontakt: 'Tel.: 040 428 01 3559', link: '#' },
    { ort: 'Frappant e.V.', beschreibung: 'Veranstaltungsraum', personenKapazitat: 700, kosten: '800', kontakt: '', link: '#' },
    { ort: 'König der Löwen Zelt', beschreibung: 'Theatersaal, Restaurant, Foyer', personenKapazitat: 2000, kosten: '650', kontakt: 'Tel.: 040 311 863 81', link: '#' },
    { ort: 'Alster Lounge', beschreibung: 'Terasse', personenKapazitat: 250, kosten: '350', kontakt: 'Tel.: 040 55 52 36 0', link: '#' },
    { ort: 'Zinnschmelze', beschreibung: 'Tagungsräume, Seminarräume', personenKapazitat: 150, kosten: '500', kontakt: 'Tel.: 040 231 885 58', link: '#' },
    { ort: 'CVJM', beschreibung: 'Tagungsräume, Seminarräume', personenKapazitat: 600, kosten: '400', kontakt: 'Tel.: 040 2805 5308', link: '#' },
    { ort: 'Novotel-Hotel Alster', beschreibung: 'Tagungsräume', personenKapazitat: 220, kosten: '150', kontakt: 'Tel.: 040 40391900', link: '#' },
    { ort: 'Junges Hotel Hamburg', beschreibung: 'Tagungsräume', personenKapazitat: 1200, kosten: '450', kontakt: 'Tel.: 040 428 37 133', link: '#' },
    { ort: 'Hamburg-Haus', beschreibung: 'Veranstaltungsräume', personenKapazitat: 400, kosten: '300', kontakt: 'Tel.: 040 428 01 3559', link: '#' },
    { ort: 'Frappant e.V.', beschreibung: 'Veranstaltungsraum', personenKapazitat: 700, kosten: '800', kontakt: '', link: '#' },
    { ort: 'König der Löwen Zelt', beschreibung: 'Theatersaal, Restaurant, Foyer', personenKapazitat: 2000, kosten: '650', kontakt: 'Tel.: 040 311 863 81', link: '#' },
    { ort: 'Alster Lounge', beschreibung: 'Terasse', personenKapazitat: 250, kosten: '350', kontakt: 'Tel.: 040 55 52 36 0', link: '#' },
    { ort: 'Zinnschmelze', beschreibung: 'Tagungsräume, Seminarräume', personenKapazitat: 150, kosten: '500', kontakt: 'Tel.: 040 231 885 58', link: '#' },
    { ort: 'CVJM', beschreibung: 'Tagungsräume, Seminarräume', personenKapazitat: 600, kosten: '400', kontakt: 'Tel.: 040 2805 5308', link: '#' },
    { ort: 'Novotel-Hotel Alster', beschreibung: 'Tagungsräume', personenKapazitat: 220, kosten: '150', kontakt: 'Tel.: 040 40391900', link: '#' },
    { ort: 'Junges Hotel Hamburg', beschreibung: 'Tagungsräume', personenKapazitat: 1200, kosten: '450', kontakt: 'Tel.: 040 428 37 133', link: '#' },
];

export default function Datenbank() {
    return (
        <>
            <div className="container mx-auto mt-28">
                <div className='bg-white p-5 m-10 rounded-xl shadow-lg'>
                    <h1 className="text-orange-500 text-2xl font-bold p-3">Datenbank</h1>
                    <p className="text-gray-600 p-3">
                        Hier habt ihr die Möglichkeit, in unserer umfassenden Datenbank nach Akteur:innen und Institutionen zu suchen, die sich aktiv mit den Themen um (Post-) Kolonialismus und Dekolonisierung auseinandersetzen. Zudem könnt ihr hier Speaker:innen und Bildungsreferent:innen aus Hamburg finden, die sich mit großer Expertise und Leidenschaft mit diesen wichtigen Themen beschäftigen. Diese Datenbank wird regelmäßig aktualisiert, um euch stets aktuelle Informationen zu liefern.<br />
                        Wenn auch ihr als Institution oder Einzelperson in dieser Datenbank genannt werden möchtet, könnt ihr das entsprechende <Link href={`https://cloud.hamburg.global/index.php/apps/forms/s/XT2M4r4gyyGEryCTpiW6PNb7`} target="_blank" rel="noopener noreferrer" className="text-orange-500 font-semibold">Formular</Link> ausfüllen. Ossara e.V. übernimmt keine Verantwortung für den vermittelten Inhalt der Speaker:innen, noch stellen die Menschen in irgendeiner Weise die offizielle Position von Ossara e.V. dar.
                    </p>
                </div>
                <div className="overflow-x-auto shadow-xl rounded-xl mt-20">
                    <table className="min-w-full divide-y divide-gray-600 bg-white">
                        <thead className="bg-gray-200">
                            <tr>
                                <th scope="col" className="bg-orange-500 px-6 py-3 text-left text-sm font-bold text-white uppercase tracking-wider">Ort</th>
                                <th scope="col" className="bg-orange-500 px-6 py-3 text-left text-sm font-bold text-white uppercase tracking-wider border-l border-gray-300">Beschreibung</th>
                                <th scope="col" className="bg-orange-500 px-6 py-3 text-left text-sm font-bold text-white uppercase tracking-wider border-l border-gray-300">Personen Kapazität</th>
                                <th scope="col" className="bg-orange-500 px-6 py-3 text-left text-sm font-bold text-white uppercase tracking-wider border-l border-gray-300">Kosten</th>
                                <th scope="col" className="bg-orange-500 px-6 py-3 text-left text-sm font-bold text-white uppercase tracking-wider border-l border-gray-300">Kontakt</th>
                                <th scope="col" className="bg-orange-500 px-6 py-3 text-left text-sm font-bold text-white uppercase tracking-wider border-l border-gray-300">Link</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-300">
                            {venues.map((venue, index) => (
                                <tr key={index}>
                                    <td className="px-6 py-4 whitespace-nowrap text-xs font-medium text-gray-900">{venue.ort}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-xs text-gray-600 border-l border-gray-300">{venue.beschreibung}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-xs text-gray-600 border-l border-gray-300">{venue.personenKapazitat}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-xs text-gray-600 border-l border-gray-300">{venue.kosten}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-xs text-gray-600 border-l border-gray-300">{venue.kontakt}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-xs text-blue-600 border-l border-gray-300">
                                        <Link href={venue.link} target="_blank" rel="noopener noreferrer" className="no-underline bg-blue-600 text-white p-2 rounded-md hover:text-blue-900" style={{ textDecorationLine: "!none" }}>Zur Website</Link>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
};
