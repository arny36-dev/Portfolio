// components/HourlyCallendar.tsx
"use client";
import React, { useState, useEffect } from "react";
import FullCalendar from "@fullcalendar/react";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import dayGridPlugin from "@fullcalendar/daygrid";
import { DateSelectArg, EventInput } from "@fullcalendar/core";
import EventModal from "./EventModal";

export default function HourlyCallendar({
  events,
  setEvents,
}: {
  events: EventInput[];
  setEvents: React.Dispatch<React.SetStateAction<EventInput[]>>;
}) {
  const [showModal, setShowModal] = useState(false);
  const [toast, setToast] = useState("");
  const [form, setForm] = useState({
    title: "",
    note: "",
    start: "",
    end: "",
  });

  const formatDate = (d: Date) => {
    const pad = (n: number) => n.toString().padStart(2, "0");
    return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(
      d.getDate()
    )}T${pad(d.getHours())}:${pad(d.getMinutes())}`;
  };

  const fetchEvents = async () => {
    try {
      const res = await fetch("/projects/calendar-registration/api/events");
      const data = await res.json();
      setEvents(data);
    } catch (e) {
      setToast("Chyba pri načítaní udalostí");
      setTimeout(() => setToast(""), 3000);
    }
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  const handleSelect = (info: DateSelectArg) => {
    setForm({
      title: "",
      note: "",
      start: formatDate(info.start),
      end: formatDate(info.end),
    });
    setShowModal(true);
  };

  const handleAddClick = () => {
    setForm({ title: "", note: "", start: "", end: "" });
    setShowModal(true);
  };

  const handleSubmit = async () => {
    if (!form.title || !form.start || !form.end) {
      setToast("Vyplň názov a časy!");
      setTimeout(() => setToast(""), 3000);
      return;
    }

    const res = await fetch("/projects/calendar-registration/api/events", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    if (res.ok) {
      await fetchEvents(); // aktualizuj zoznam z backendu
      setShowModal(false);
    } else {
      setToast("Chyba pri ukladaní");
      setTimeout(() => setToast(""), 3000);
    }
  };

  return (
    <div className="p-4 bg-white rounded shadow-md text-black relative">
      {toast && (
        <div className="absolute top-2 right-2 bg-red-600 text-white px-4 py-2 rounded shadow z-50">
          {toast}
        </div>
      )}

      <div className="flex justify-end mb-2">
        <button
          onClick={handleAddClick}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
        >
          + Pridať udalosť
        </button>
      </div>

      <FullCalendar
        plugins={[timeGridPlugin, interactionPlugin, dayGridPlugin]}
        initialView="timeGridWeek"
        headerToolbar={{
          left: "prev,next today",
          center: "title",
          right: "timeGridDay,timeGridWeek,dayGridMonth",
        }}
        allDaySlot={false}
        editable={false}
        selectable={true}
        select={handleSelect}
        events={events}
        height="auto"
        locale="sk"
      />

      {showModal && (
        <EventModal
          form={form}
          setForm={setForm}
          onClose={() => setShowModal(false)}
          onSubmit={handleSubmit}
        />
      )}
    </div>
  );
}
