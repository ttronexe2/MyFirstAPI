const express = require('express');
const app = express();
const port = 3001;

const students = [
    "Adrià Baltrons",
    "Nil Marquez",
    "Joshua Abril",
    "Mateo Achá",
    "Arnau Gil",
    "Joan Cookies",
    "Adrián Lozano",
    "Paul Francés",
    "Satenik Satenik",
    "Pol Cubo",
    "Roger Bustos",
    "Nico Atletico"
];

app.get('/class', (req, res) => {
    res.json({
        students: students,
        totalStudents: students.length
    });
});

app.listen(port, () => {
    console.log(`API running on http://localhost:${port}`);
});
