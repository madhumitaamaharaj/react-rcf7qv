import React, { useState } from 'react';

function App() {
  const [logs, setLogs] = useState([]);

  const handleMouseOver = () => {
    const time = new Date().toLocaleString();
    const log = { time, eventName: 'in' };
    setLogs([...logs, log]);
  };

  const handleMouseOut = () => {
    const time = new Date().toLocaleString();
    const log = { time, eventName: 'out' };
    setLogs([...logs, log]);
  };

  return (
    <div>
      <h1 onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>Header 1</h1>
      <h2>Header 2</h2>
      <div>Div</div>
      <table>
        <thead>
          <tr>
            <th>Time</th>
            <th>Event Name</th>
          </tr>
        </thead>
        <tbody>
          {logs.map((log, index) => (
            <tr key={index}>
              <td>{log.time}</td>
              <td>{log.eventName}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
