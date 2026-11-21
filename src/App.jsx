import React, { useState } from 'react';
import { Title, Subtitle, Paragraph, HighlightBox, Counter, CourseInfo, LivePreview, StudentFilter, StudentList } from './components.jsx';
import JsxExercises from './JsxExercises.jsx';

const sampleStudents = [
  { id: 1, name: 'Aida', group: 'FE-01', favoriteSubject: 'JavaScript', track: 'Front-end', isActive: true },
  { id: 2, name: 'Nurlan', group: 'BE-01', favoriteSubject: 'Databases', track: 'Back-end', isActive: false },
  { id: 3, name: 'Ali', group: 'FE-02', favoriteSubject: 'Web Design', track: 'Front-end', isActive: true },
];

export default function App({ students = sampleStudents }) {
  const [activeOnly, setActiveOnly] = useState(false);
  const visibleStudents = activeOnly ? students.filter(student => student.isActive) : students;

  return <>
    <header><nav aria-label="Sections">
      <a href="#course">Course</a><a href="#interactivity">Interactivity</a>
      <a href="#students">Student List</a><a href="#jsx">JSX Practice</a>
    </nav></header>
    <main>
      <section id="course" className="intro">
        <Title>Introduction to React</Title>
        <Paragraph>React is a JavaScript library for building interfaces from reusable pieces. Components describe what to display from their props and state.</Paragraph>
        <HighlightBox>
          <Subtitle>About this Course</Subtitle>
          <Paragraph>Explore component composition, props, JSX, and state through small working examples.</Paragraph>
        </HighlightBox>
      </section>
      <section id="interactivity">
        <Subtitle>State & interactivity</Subtitle>
        <div className="grid"><Counter /><CourseInfo title="Web Programming 1" /><LivePreview /></div>
      </section>
      <section id="students">
        <Subtitle>E|C Student List</Subtitle>
        <StudentFilter activeOnly={activeOnly} onChange={setActiveOnly} />
        <p role="status">{visibleStudents.length} of {students.length} students shown</p>
        <StudentList students={visibleStudents} />
      </section>
      <section id="jsx"><JsxExercises /></section>
    </main>
    <footer>React Components · {new Date().getFullYear()}</footer>
  </>;
}
