const express = require('express');
const app = express();

const allNotes = require('./db/db.json');

// Initializing app and creating port
const PORT = process.env.PORT || 3001;
const fs = require('fs');
const path = require('path');

// Body parsing, static, and route middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

// GET '/api/notes' responds with allNotes from the database
app.get('/api/notes', (req, res) => {
    res.json(allNotes.slice(1));
});

// 'notes' responds w/ the notes.html file, while all others respond w/ the index.html file
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './public/index.html'));
});

app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, './public/notes.html'));
});

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, './public/index.html'));
});
