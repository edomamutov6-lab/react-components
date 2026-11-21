import React, { useState } from 'react';

export function Title({ children }) { return <h1>{children}</h1>; }
export function Subtitle({ children }) { return <h2>{children}</h2>; }
export function Paragraph({ children }) { return <p>{children}</p>; }
export function HighlightBox({ children }) { return <aside className="highlight">{children}</aside>; }

export function Counter() {
  const [count, setCount] = useState(0);
  return <section className="panel">
    <h3>Counter</h3>
    <output aria-live="polite">{count}</output>
    <div className="actions">
      <button onClick={() => setCount(value => value - 1)} aria-label="Decrease count">−</button>
      <button onClick={() => setCount(value => value + 1)} aria-label="Increase count">+</button>
    </div>
  </section>;
}

export function CourseInfo({ title, credits }) {
  const [expanded, setExpanded] = useState(false);
  return <section className="panel">
    <h3>{title}</h3>
    {credits != null && <p>Credits: {credits}</p>}
    <button aria-expanded={expanded} onClick={() => setExpanded(value => !value)}>
      {expanded ? 'Hide details' : 'Show details'}
    </button>
    {expanded && <Paragraph>Build a component library, pass data with props, and add interactivity with state.</Paragraph>}
  </section>;
}

export function LivePreview() {
  const [text, setText] = useState('');
  return <section className="panel">
    <h3>Live preview</h3>
    <label>Type a message<input value={text} onChange={event => setText(event.target.value)} /></label>
    <p>You typed: {text}</p>
  </section>;
}

export function StudentCard({ name, group, favoriteSubject, track, isActive }) {
  return <article className={isActive ? 'panel active' : 'panel'}>
    <h3>{name}</h3>
    <p>Group: {group}</p>
    <p>Favorite subject: {favoriteSubject}</p>
    <p>Track: {track}</p>
    <p>{isActive ? 'Active' : 'Inactive'}</p>
  </article>;
}

export function StudentFilter({ activeOnly, onChange }) {
  return <div className="actions" role="group" aria-label="Filter students">
    <button aria-pressed={!activeOnly} onClick={() => onChange(false)}>All</button>
    <button aria-pressed={activeOnly} onClick={() => onChange(true)}>Active only</button>
  </div>;
}

export function StudentList({ students }) {
  return <ul className="grid students">
    {students.map(student => <li key={student.id}><StudentCard {...student} /></li>)}
  </ul>;
}
