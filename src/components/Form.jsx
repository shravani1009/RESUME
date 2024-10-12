import "./FormsStyles.css";
import React, { useState } from 'react';
import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';

const Form = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission

    // Create a new workbook
    const wb = XLSX.utils.book_new();
    // Create a worksheet with the form data
    const ws = XLSX.utils.json_to_sheet([{ Name: name, Email: email, Message: message }]);
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

    // Generate buffer and create a blob
    const wbout = XLSX.write(wb, { bookType: 'xlsx', type: 'binary' });
    const blob = new Blob([s2ab(wbout)], { type: 'application/octet-stream' });

    // Save the file
    saveAs(blob, 'FormData.xlsx');

    // Clear the form fields
    setName('');
    setEmail('');
    setMessage('');
  };

  // Helper function to convert string to ArrayBuffer
  const s2ab = (s) => {
    const buf = new ArrayBuffer(s.length);
    const view = new Uint8Array(buf);
    for (let i = 0; i < s.length; i++) {
      view[i] = s.charCodeAt(i) & 0xFF;
    }
    return buf;
  };

  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <label>Your Name</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
        <label>Email</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <label>Message</label>
        <textarea rows="6" value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Type your message here" required></textarea>
        <button className="btn">Submit</button>
      </form>
    </div>
  );
}

export default Form;
