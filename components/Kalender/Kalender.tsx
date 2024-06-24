"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/solid";
import { client } from "@/app/lib/sanityClient";
import { Event } from "@/app/lib/interface";


export const revalidate = 30


export default function Kalender() {
    const [events, setEvents] = useState<Event[]>([]);
    const [openEventIndex, setOpenEventIndex] = useState<number | null>(null);
    const [filter, setFilter] = useState<string>("");

    useEffect(() => {
        const fetchEvents = async () => {
            const eventsData = await client.fetch(
                `*[_type == "event"] | order(_createdAt desc) {
                date,
                time,
                title,
                description,
                type,
                detailsLink
                }`
            );
            setEvents(eventsData);
        };

        fetchEvents();
    }, []);

    const toggleEvent = (index: number) => {
        setOpenEventIndex(openEventIndex === index ? null : index);
    };

    const filteredEvents = events.filter((event) =>
        event.title.toLowerCase().includes(filter.toLowerCase())
    );

    return (
        <>
            <div className="p-4">
                <div className='bg-white p-4 mt-20 rounded-lg shadow-lg'>
                    <p className="text-gray-600 text-md font-semibold">
                        An dieser Stelle könnt ihr eine Vielzahl an aktuellen Veranstaltungsterminen entdecken, die sich intensiv mit den Themen um (Post-) Kolonialismus und Dekolonisierung befassen.
                    </p>
                </div>
                <input
                    type="text"
                    placeholder="Filter events..."
                    value={filter}
                    onChange={(e) => setFilter(e.target.value)}
                    className="mb-6 mt-20 p-2 border border-gray-300 rounded w-full"
                />
                {filteredEvents.map((event, index) => (
                    <div
                        key={index}
                        className="mb-4 bg-orange-500 text-white p-4 rounded-lg shadow-lg"
                    >
                        <div className="flex justify-between items-center">
                            <div>
                                <div className="text-xl font-bold">{event.title}</div>
                                <div className="text-sm text-gray-800">{event.type}</div>
                                <div className="text-sm">
                                    {event.date}, {event.time}
                                </div>
                            </div>
                            <button onClick={() => toggleEvent(index)}>
                                {openEventIndex === index ? (
                                    <ChevronUpIcon className="h-6 w-6 text-white" />
                                ) : (
                                    <ChevronDownIcon className="h-6 w-6 text-white" />
                                )}
                            </button>
                        </div>
                        <div
                            className={`transition-all duration-300 overflow-hidden ${openEventIndex === index ? "max-h-screen" : "max-h-0"}`}
                        >
                            {openEventIndex === index && (
                                <div className="mt-2 bg-white p-2 rounded">
                                    <p className="text-gray-600 text-sm">{event.description}</p>
                                    <Link
                                        href={event.detailsLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="mt-2 inline-flex items-center text-orange-500 hover:text-gray-600"
                                    >
                                        details
                                        <span className="inline-block ml-2 transition-transform transform group-hover:translate-x-l">
                                            &rarr;
                                        </span>
                                    </Link>
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}
