import React, { useState } from 'react';
import API from '../api';

export default function NoteList({ notes, onUpdate, onDelete }) {
  const [editingId, setEditingId] = useState(null);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const startEdit = (note) => {
    setEditingId(note._id);
    setTitle(note.title);
    setDescription(note.description || '');
  };

  const cancel = () => {
    setEditingId(null);
    setTitle('');
    setDescription('');
  };

  const save = async (id) => {
    try {
      const res = await API.put(`/notes/${id}`, { title, description });
      onUpdate(res.data);
      cancel();
    } catch (err) {
      console.error(err);
      alert(err?.response?.data?.message || 'Error updating');
    }
  };

  const remove = async (id) => {
    if (!window.confirm('Delete this note?')) return;
    try {
      await API.delete(`/notes/${id}`);
      onDelete(id);
    } catch (err) {
      console.error(err);
      alert(err?.response?.data?.message || 'Error deleting');
    }
  };

  if (!notes.length) return <div>No notes yet.</div>;

  return (
    <div>
      {notes.map((n) => (
        <div key={n._id} className="note">
          {editingId === n._id ? (
            <div>
              <input value={title} onChange={(e)=>setTitle(e.target.value)} />
              <textarea value={description} onChange={(e)=>setDescription(e.target.value)} />
              <button onClick={()=>save(n._id)}>Save</button>
              <button onClick={cancel}>Cancel</button>
            </div>
          ) : (
            <div>
              <h4>{n.title}</h4>
              <p>{n.description}</p>
              <div className="note-actions">
                <button onClick={()=>startEdit(n)}>Edit</button>
                <button onClick={()=>remove(n._id)}>Delete</button>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
