import React, { useState } from 'react';
import API from '../api';

export default function NoteForm({ onAdd }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [err, setErr] = useState('');

  const submit = async (e) => {
    e.preventDefault();
    if (!title.trim()) return setErr('Title required');
    try {
      const res = await API.post('/notes', { title, description });
      onAdd(res.data);
      setTitle('');
      setDescription('');
      setErr('');
    } catch (error) {
      setErr(error?.response?.data?.message || 'Error creating note');
    }
  };

  return (
    <div className="card">
      <h3>Add Note</h3>
      {err && <div className="error">{err}</div>}
      <form onSubmit={submit}>
        <input value={title} onChange={(e)=>setTitle(e.target.value)} placeholder="Title" />
        <textarea value={description} onChange={(e)=>setDescription(e.target.value)} placeholder="Description" />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}
