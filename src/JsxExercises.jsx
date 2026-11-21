import React from 'react';

const exercises = [
  {
    "prefix": "A",
    "title": "Part A · Rewrite without JSX",
    "samples": [
      "const element = React.createElement('h1', null, 'Hello, React!');",
      "const element = React.createElement('div', { className: 'card' },\n  React.createElement('h2', null, 'Profile'),\n  React.createElement('p', null, 'Welcome to your profile page.'));",
      "const name = 'Nurlan';\nconst age = 42;\nconst element = React.createElement('p', null, name, ' is ', age, ' years old.');",
      "function Greeting({ name }) {\n  return React.createElement('div', { className: 'greeting' },\n    React.createElement('h1', null, 'Hello, ', name, '!'));\n}",
      "const items = ['JSX', 'Components', 'Hooks'];\nfunction TopicList() {\n  return React.createElement('ul', null,\n    items.map(topic => React.createElement('li', { key: topic }, topic)));\n}",
      "function Button({ label }) {\n  return React.createElement('button', { className: 'btn' }, label);\n}\nfunction App() {\n  return React.createElement('div', { className: 'app' },\n    React.createElement('h1', null, 'My App'),\n    React.createElement(Button, { label: 'Click me' }));\n}",
      "const element = React.createElement('div',\n  { style: { padding: '10px', borderRadius: '8px' } }, 'Inline styled box');",
      "function Info() {\n  return React.createElement(React.Fragment, null,\n    React.createElement('h2', null, 'Title'),\n    React.createElement('p', null, 'Description text here.'));\n}"
    ]
  },
  {
    "prefix": "B",
    "title": "Part B · Fix JSX errors",
    "samples": [
      "function Header() {\n  return <div className=\"header\"><h1><button onClick={() => alert('Hello')}>Welcome</button></h1></div>;\n}",
      "function BadComponent() {\n  return <><h1>Title</h1><p>Subtitle</p></>;\n}",
      "function ImageCard() {\n  return <div className=\"card\"><img src=\"/logo.png\" alt=\"App logo\" /><p>Logo of our app</p></div>;\n}",
      "function Status({ isOnline }) {\n  return <div>{isOnline ? <p>User is online</p> : <p>User is offline</p>}</div>;\n}",
      "function UserCard({ name }) {\n  return <article><h3>{name}</h3></article>;\n}\nconst card = <UserCard name=\"Aida\" />;",
      "function LoginForm() {\n  return <form><label htmlFor=\"email\" className=\"label\">Email</label><input id=\"email\" type=\"email\" /></form>;\n}",
      "function TodoList({ todos }) {\n  return <ul>{todos.map(todo => <li key={todo.id}>{todo.text}</li>)}</ul>;\n}",
      "function Box() {\n  return <div style={{ backgroundColor: 'red', padding: 10 }}>Warning</div>;\n}",
      "function Counter() {\n  return <button onClick={handleClick}>Click me</button>;\n}",
      "// Pass only trusted, static HTML or HTML sanitized before it reaches this component.\nfunction HtmlBlock({ html }) {\n  return <div dangerouslySetInnerHTML={{ __html: html }} />;\n}"
    ]
  },
  {
    "prefix": "C",
    "title": "Part C · JSX practice",
    "samples": [
      "const titleElement = <h1>Welcome to Engineering College</h1>;",
      "const firstName = 'Nurlan';\nconst lastName = 'Shaidullaev';\nconst greeting = <p>Hello, {firstName} {lastName}!</p>;",
      "function Header() {\n  return <div className=\"header\"><h1><button onClick={() => alert('Hi')}>Click me</button></h1></div>;\n}",
      "function Greeting() {\n  return <><h1>Hello</h1><p>Welcome to the course</p></>;\n}",
      "function Avatar() {\n  return <div><img src=\"/avatar.png\" alt=\"Student avatar\" /><br /><span>Student</span></div>;\n}",
      "const element = React.createElement('div', { className: 'card' },\n  React.createElement('h2', null, 'Profile'),\n  React.createElement('p', null, 'Welcome to your profile page.'));",
      "function StudentCard({ name, group }) {\n  return <div className=\"student-card\"><h3>{name}</h3><p>Group: {group}</p></div>;\n}",
      "function CourseInfo({ title, credits }) {\n  return <div><h2>{title}</h2><p>Credits: {credits}</p></div>;\n}",
      "function Status({ isOnline }) {\n  return <p>{isOnline ? 'Online' : 'Offline'}</p>;\n}",
      "function Notification({ count }) {\n  return <section><h2>Notifications</h2>{count > 0 && <p>You have {count} new notifications</p>}</section>;\n}",
      "function TaskList({ tasks }) {\n  return <ul>{tasks.map(task => <li key={task.id}>{task.title}</li>)}</ul>;\n}",
      "const students = ['Ali', 'Aida', 'Nurlan'];\nfunction StudentList() {\n  return React.createElement('ul', null,\n    students.map(name => React.createElement('li', { key: name }, name)));\n}",
      "function Clicker() {\n  function handleClick() { console.log('Clicked!'); }\n  return <button onClick={handleClick}>Click me</button>;\n}",
      "const selectButton = <button onClick={() => handleSelect(5)}>Select student</button>;",
      "function WarningBox() {\n  return <div style={{ backgroundColor: 'yellow', padding: 10 }}>Warning!</div>;\n}",
      "function Info() {\n  return <><h2>About the course</h2><p>This course teaches React basics.</p></>;\n}",
      "const example = <Card title=\"JSX Topic\"><p>We are learning JSX today.</p></Card>;",
      "const user = { name: 'Aida', age: 19, group: 'FE-01' };\nconst spread = <UserProfile {...user} />;\nconst explicit = <UserProfile name={user.name} age={user.age} group={user.group} />;",
      "function Access({ isAdmin }) {\n  return <div>{isAdmin ? <p>Welcome, admin!</p> : <p>Access denied</p>}</div>;\n}",
      "function NameInput() {\n  const [name, setName] = React.useState('');\n  return <><label>Name<input value={name} onChange={event => setName(event.target.value)} /></label><p>Hello, {name}</p></>;\n}",
      "// Pass only trusted, static HTML or HTML sanitized before it reaches this component.\nfunction HtmlBlock({ html }) {\n  return <div dangerouslySetInnerHTML={{ __html: html }} />;\n}",
      "function ProfileCard({ name }) {\n  return <article><h3>{name}</h3></article>;\n}\nconst example = <ProfileCard name=\"Aida\" />;",
      "function Title() {\n  return (\n    <div>\n      {/* Main title of the page */}\n      <h1>JSX Practice</h1>\n    </div>\n  );\n}",
      "function Dashboard({ user, notifications }) {\n  return (\n    <div>\n      <h1>{user.name}'s Dashboard</h1>\n      {notifications.length > 0 && (\n        <p>You have {notifications.length} new notifications.</p>\n      )}\n    </div>\n  );\n}",
      "First paragraph: 5\nSecond paragraph: b is bigger or equal\nThird paragraph: empty (React renders no text for false)"
    ]
  }
];

export default function JsxExercises() {
  return <>
    <h2>JSX Practice</h2>
    {exercises.map(({ prefix, title, samples }) => (
      <details key={prefix}>
        <summary>{title}</summary>
        {samples.map((sample, index) => (
          <details key={sample}>
            <summary>Exercise {prefix}{index + 1}</summary>
            <pre><code>{sample}</code></pre>
          </details>
        ))}
      </details>
    ))}
  </>;
}