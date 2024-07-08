"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/solid";
import { client } from "@/app/lib/sanityClient";
import { Event } from "@/app/lib/interface";

export const revalidate = 30;

export default function Kalender() {
  const [events, setEvents] = useState<Event[]>([]);
  const [openEventIndex, setOpenEventIndex] = useState<number | null>(null);
  const [filter, setFilter] = useState<string>("");

  useEffect(() => {
    const fetchEvents = async () => {
      const eventsData = await client.fetch(
        `*[_type == "event"] | order(_createdAt asc) {
                date,
                time,
                title,
                description,
                type,
                detailsLink
                }`,
      );
      setEvents(eventsData);
    };

    fetchEvents();
  }, []);

  const toggleEvent = (index: number) => {
    setOpenEventIndex(openEventIndex === index ? null : index);
  };

  const filteredEvents = events.filter((event) =>
    event.title.toLowerCase().includes(filter.toLowerCase()),
  );

  return (
    <>
      <div className="p-4">
        <div className="w-full flex items-center justify-center mt-10 sm:px-2">
          <div className="bg-white shadow-lg rounded-xl max-w-lg sm:px-4">
            <h2 className="text-orange-500 py-2 px-2 lg:text-3xl md:text-xl sm:text-lg font-bold text-center">
              Unser Kalender Veranstaltungen
            </h2>
          </div>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-xl mx-auto mt-20 w-full sm:w-[1016.95px]">
          <p className="text-left text-md text-gray-600">
            An dieser Stelle könnt ihr eine Vielzahl an aktuellen
            Veranstaltungsterminen entdecken, die sich intensiv mit den Themen
            um (Post-) Kolonialismus und Dekolonisierung befassen.{" "}
            <Link
              href={`https://cloud.hamburg.global/index.php/apps/forms/s/j7kFXRTtALSMM4DfEEJt6Faa`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-500 font-semibold"
            >
              Hier
            </Link>{" "}
            könnt ihr eure Veranstaltung teilen.
          </p>
        </div>
        <input
          type="text"
          placeholder="Filter events..."
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="mb-6 mt-20 p-2 border border-gray-300 rounded-lg w-full"
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
