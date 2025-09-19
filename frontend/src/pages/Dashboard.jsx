import { useEffect, useState } from "react";
import axios from "axios";
import NoteCard from "../components/Notecard.jsx";

export default function Dashboard() {
  const [notes, setNotes] = useState([]);
  const [form, setForm] = useState({ title: "", description: "" });

  const token = localStorage.getItem("token");

  useEffect(() => {
    if (token) fetchNotes();
  }, []);

  const fetchNotes = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/notes", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setNotes(res.data);
    } catch (err) {
      console.error("Error fetching notes:", err);
    }
  };

  const handleAdd = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/notes", form, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setForm({ title: "", description: "" });
      fetchNotes();
    } catch (err) {
      console.error("Error adding note:", err);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/notes/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      fetchNotes();
    } catch (err) {
      console.error("Error deleting note:", err);
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold text-indigo-600 mb-4">📒 My Dashboard</h2>

      {/* Add Note Form */}
      <form onSubmit={handleAdd} className="mb-6 flex gap-3">
        <input
          type="text"
          placeholder="Title"
          className="p-2 border rounded flex-1"
          value={form.title}
          onChange={(e) => setForm({ ...form, title: e.target.value })}
        />
        <input
          type="text"
          placeholder="Description"
          className="p-2 border rounded flex-1"
          value={form.description}
          onChange={(e) => setForm({ ...form, description: e.target.value })}
        />
        <button className="bg-indigo-600 text-white px-4 rounded hover:bg-indigo-700">
          ➕ Add
        </button>
      </form>

      {/* Notes List */}
      {notes.length === 0 ? (
        <p className="text-gray-500">No notes yet. Add your first one!</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {notes.map((note) => (
            <NoteCard
              key={note._id}
              note={note}
              onDelete={handleDelete}
              onEdit={() => {}}
            />
          ))}
        </div>
      )}
    </div>
  );
}
