export default function NoteCard({ note, onDelete }) {
  return (
    <div className="bg-white shadow-md rounded-xl p-4 border hover:shadow-lg transition-all">
      <h3 className="text-lg font-semibold text-indigo-700">{note.title}</h3>
      <p className="text-gray-600 mt-1">{note.description}</p>

      <div className="flex justify-end mt-3">
        <button
          onClick={() => onDelete(note._id)}
          className="bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-600 transition"
        >
          🗑 Delete
        </button>
      </div>
    </div>
  );
}
