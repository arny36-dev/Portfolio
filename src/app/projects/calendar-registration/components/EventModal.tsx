// components/EventModal.tsx
"use client";
import React from "react";
import DateTimeInput from "./../../../shared-components/dateTimeInput";

interface EventFormData {
  title: string;
  note: string;
  start: string;
  end: string;
}

interface EventModalProps {
  form: EventFormData;
  setForm: (data: EventFormData) => void;
  onClose: () => void;
  onSubmit: () => void;
}

export default function EventModal({
  form,
  setForm,
  onClose,
  onSubmit,
}: EventModalProps) {
  const now = new Date();
  now.setSeconds(0);
  now.setMilliseconds(0);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded p-6 w-full max-w-md">
        <h2 className="text-xl font-bold mb-4">Pridať udalosť</h2>

        <input
          type="text"
          placeholder="Názov"
          value={form.title}
          onChange={(e) => setForm({ ...form, title: e.target.value })}
          className="w-full mb-2 p-2 border rounded"
        />
        <input
          type="text"
          placeholder="Poznámka"
          value={form.note}
          onChange={(e) => setForm({ ...form, note: e.target.value })}
          className="w-full mb-2 p-2 border rounded"
        />

        <DateTimeInput
          value={form.start}
          onChange={(val) => setForm({ ...form, start: val })}
          placeholder="Začiatok"
          minDate={now}
        />

        <DateTimeInput
          value={form.end}
          onChange={(val) => setForm({ ...form, end: val })}
          placeholder="Koniec"
          minDate={now}
        />

        <div className="flex justify-end gap-2">
          <button onClick={onClose} className="bg-gray-300 px-4 py-2 rounded">
            Zrušiť
          </button>
          <button
            onClick={onSubmit}
            className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded"
          >
            Uložiť
          </button>
        </div>
      </div>
    </div>
  );
}
