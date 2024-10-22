import express, { Request, Response } from 'express';

const app = express();
const port = 3000;

const students: string[] = [
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

app.get('/class', (req: Request, res: Response) => {
    res.json({
        students: students,
        totalStudents: students.length
    });
});

app.listen(port, () => {
    console.log(`API running on http://localhost:${port}`);
});
