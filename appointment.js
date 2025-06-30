/*
document.getElementById('appointmentForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const appointmentData = {
    name: document.getElementById('name').value.trim(),
    email: document.getElementById('email').value.trim(),
    phone: document.getElementById('phone').value.trim(),
    date: document.getElementById('date').value,
    department: document.getElementById('department').value,
    time: document.getElementById('time').value,
    notes: document.getElementById('notes').value.trim()
  };

  console.log("Appointment Submitted:", appointmentData);

  // Later you can replace this with sending data to a server or Firebase
  alert("Appointment submitted successfully!");

  // Optionally reset form
  document.getElementById('appointmentForm').reset();
});
*/
/*appointment.js*/

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import {
  getFirestore,
  collection,
  addDoc,
  serverTimestamp
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyCbJdI11m8lxVuC27EfFAF12psZnJa5xRg",
  authDomain: "hospital-management-8af8e.firebaseapp.com",
  projectId: "hospital-management-8af8e",
  storageBucket: "hospital-management-8af8e.firebasestorage.app",
  messagingSenderId: "890188454493",
  appId: "1:890188454493:web:e32617339098f20f680bb4"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

document.getElementById('appointmentForm').addEventListener('submit', async function (event) {
  event.preventDefault();

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const phone = document.getElementById('phone').value.trim();
  const date = document.getElementById('date').value;
  const department = document.getElementById('department').value;
  const time = document.getElementById('time').value;
  const notes = document.getElementById('notes').value.trim();

  try {
    await addDoc(collection(db, 'appointments'), {
      name,
      email,
      phone,
      date,
      department,
      time,
      notes,
      createdAt: serverTimestamp()
    });

    alert('Appointment booked successfully!');
    document.getElementById('appointmentForm').reset();
  } catch (error) {
    console.error('Error booking appointment:', error);
    alert('Error: ' + error.message);
  }
});
