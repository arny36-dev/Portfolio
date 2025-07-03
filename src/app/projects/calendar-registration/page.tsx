"use client";
import { useEffect, useState } from "react";
import HourlyCallendar from "./components/HourlyCallendar";
import { EventInput } from "@fullcalendar/core"; // <- veľmi dôležité

export default function HomePage() {
  const [events, setEvents] = useState<EventInput[]>([]); // <- presne tu

  useEffect(() => {
    fetch("/projects/calendar-registration/api/events")
      .then((res) => res.json())
      .then((data) => setEvents(data));
  }, []);

  return <HourlyCallendar events={events} setEvents={setEvents} />;
}
