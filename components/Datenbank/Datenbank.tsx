import Link from 'next/link';

interface Venue {
    Name: string;
    Ansprechperson: string;
    Kontakt: string | number;
    Angebote: string;
    Website: string;
}

const venues: Venue[] = [
    { Name: 'Afrikanisches Bildungszentrum (ARCA)', Ansprechperson: 'Millicent Adjei', Kontakt: 'info@arca-eval.de', Angebote: 'Fasiathek – Schwarze Präsenzbibliothek, AfroCode Academy, Ich packe meinen rassismuskritischen Koffer, Workshops über Afrikanische Kaligraphie & Symbole, „Female Voices“ Reihe', Website: 'https://arca-ev.de/' },
    { Name: 'Afrotopia', Ansprechperson: 'Dr. Christian Kodzo Ayivi', Kontakt: 'info@afrotopia.de', Angebote: 'Innovation Space, Entrepreneurship & Co-Working Space, Social & Event Space, Learning Space - Afrotopia Black Academy', Website: 'https://afrotopia.de' },
    { Name: 'Ossara', Ansprechperson: 'Julia Karimi', Kontakt: 'info@ossara.de', Angebote: 'Beratungsangebote, Bildungsangebote zu Rassismus und Kolonialismus, Vernetzung, Lobbyarbeit', Website: 'https://ossara.de' },
    { Name: 'Mosaiq', Ansprechperson: 'Sally Riedel', Kontakt: 'info@mosaiq-ev.de', Angebote: 'Critical-Mind-Ausbildung, Workshop Critical Whiteness, Vorträge, Workshop- und Seminargestaltung, Projektkonzeptionen, Moderation, Prozessbegleitung, Organisationsentwicklung, Kreatives Schreiben', Website: 'https://mosaiq-ev.de/' },
    { Name: 'W3_Werkstatt für internationale Kultur und Politik', Ansprechperson: 'Esther Yungsung Lisa Rüden          ', Kontakt: 'info@w3-hamburg.de', Angebote: 'Rassismuskritische und geschlechterreflektierende Prozessbegleitung, Empowerment-Workshops, Anti-Rassismus und kritisches weißsein, Gender Trainings, Akademie für Kinder- und Jugendparlamente, Politisch aktiv mit Kindern, Randale Zentrale-Politische Krabbelgruppe, [in:szene]+, VerCAREte Verhältnisse, Koloniale Spuren – Dekoloniale Praktiken', Website: 'https://w3-hamburg.de' },
    { Name: 'Fachpromotorin für dekoloniale Perspektiven - Schwerpunkt Vernetzung', Ansprechperson: 'Sonia Octavio', Kontakt: 'sonia.octavio@ossara.de ', Angebote: 'Vernetzung und Unterstützung von Akteur*innen der Dekolonisierungsszene', Website: 'https://ossara.de' },
    { Name: 'Fachpromotorin für dekoloniale Perspektiven  - Schwerpunkt Beratung', Ansprechperson: 'Catherine Schlüter', Kontakt: 'catherine.schlueter@ossara.de', Angebote: 'Beratung von zivilgesellschaftlichen Initiativen und Multiplikator*innen', Website: 'https://ossara.de' },
];

export default function Datenbank() {
    return (
        <>
            <div className="container mx-auto mt-28">
                <div className='bg-white p-5 m-1 rounded-xl shadow-lg'>
                    <h1 className="text-orange-500 text-2xl font-semibold p-3">Datenbank</h1>
                    <p className="text-gray-600 text-sm font-medium p-3">
                        Hier habt ihr die Möglichkeit, in unserer umfassenden Datenbank nach Akteur:innen und Institutionen zu suchen, die sich aktiv mit den Themen um (Post-) Kolonialismus und Dekolonisierung auseinandersetzen. Zudem könnt ihr hier Speaker:innen und Bildungsreferent:innen aus Hamburg finden, die sich mit großer Expertise und Leidenschaft mit diesen wichtigen Themen beschäftigen. Diese Datenbank wird regelmäßig aktualisiert, um euch stets aktuelle Informationen zu liefern.<br />
                        Wenn auch ihr als Institution oder Einzelperson in dieser Datenbank genannt werden möchtet, könnt ihr das entsprechende <Link href={`https://cloud.hamburg.global/index.php/apps/forms/s/XT2M4r4gyyGEryCTpiW6PNb7`} target="_blank" rel="noopener noreferrer" className="text-orange-500 font-semibold">Formular</Link> ausfüllen. Ossara e.V. übernimmt keine Verantwortung für den vermittelten Inhalt der Speaker:innen, noch stellen die Menschen in irgendeiner Weise die offizielle Position von Ossara e.V. dar.
                    </p>
                </div>
                <div className="overflow-x-auto shadow-xl rounded-xl mt-20">
                    <table className="min-w-full divide-y divide-gray-600 bg-white">
                        <thead className="bg-gray-200">
                            <tr>
                                <th scope="col" className="bg-orange-500 px-6 py-3 text-left text-sm font-bold text-white uppercase tracking-wider">Name</th>
                                <th scope="col" className="bg-orange-500 px-6 py-3 text-left text-sm font-bold text-white uppercase tracking-wider border-l border-gray-300">Ansprechperson</th>
                                <th scope="col" className="bg-orange-500 px-6 py-3 text-left text-sm font-bold text-white uppercase tracking-wider border-l border-gray-300">Kontakt</th>
                                <th scope="col" className="bg-orange-500 px-6 py-3 text-left text-sm font-bold text-white uppercase tracking-wider border-l border-gray-300">Angebote</th>
                                <th scope="col" className="bg-orange-500 px-6 py-3 text-left text-sm font-bold text-white uppercase tracking-wider border-l border-gray-300">Website</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-300">
                            {venues.map((venue, index) => (
                                <tr key={index}>
                                    <td className="px-6 py-4 text-wrap md:text-balance text-xs font-medium text-gray-900">{venue.Name}</td>
                                    <td className="px-6 py-4 text-wrap md:text-balance text-xs text-gray-600 border-l border-gray-300">{venue.Ansprechperson}</td>
                                    <td className="px-6 py-4 text-wrap md:text-balance text-xs text-gray-600 border-l border-gray-300">{venue.Kontakt}</td>
                                    <td className="px-6 py-4 text-wrap md:text-balance text-xs text-gray-600 border-l border-gray-300">{venue.Angebote}</td>
                                    <td className="px-6 py-4 text-wrap md:text-balance text-xs text-gray-600 border-l border-gray-300">{venue.Website}</td>
                                    {/* <td className="px-6 py-4 whitespace-nowrap text-xs text-blue-600 border-l border-gray-300">
                                        <Link href={venue.link} target="_blank" rel="noopener noreferrer" className="no-underline bg-blue-600 text-white p-2 rounded-md hover:text-blue-900" style={{ textDecorationLine: "!none" }}>Zur Website</Link>
                                    </td> */}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
};
