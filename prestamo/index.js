import express from 'express';
import mysql from 'mysql2/promise';
import cors from 'cors';

const app = express();
app.use(cors())
app.use(express.json());


const dbConfig = {
    host: process.env.DB_HOST || 'db',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || 'root',
    database: process.env.DB_NAME || 'biblioteca',
};

// POST /prestamos
app.post('/prestamos', async (req, res) => {
    const { id_usuario, id_libro, fecha_devolucion } = req.body;
    try {
        const conn = await mysql.createConnection(dbConfig);
        await conn.execute(
            'INSERT INTO prestamos (id_usuario, id_libro, fecha_devolucion) VALUES (?, ?, ?)',
            [id_usuario, id_libro, fecha_devolucion]
        );
        await conn.end();
        res.status(201).json({ mensaje: 'Préstamo registrado' });
    } catch (error) {
        res.status(500).json({ error: 'Error al registrar préstamo' });
    }
});

// POST /historial?id_usuario=1
app.post('/historial', async (req, res) => {
  const { id_usuario } = req.body;

  if (!id_usuario) {
    return res.status(400).json({ error: 'Falta el parámetro id_usuario' });
  }

  try {
    const conn = await mysql.createConnection(dbConfig);
    const [rows] = await conn.execute(`
      SELECT l.titulo, l.autor, p.fecha_devolucion
      FROM prestamos p
      JOIN libros l ON p.id_libro = l.id
      WHERE p.id_usuario = ? ORDER BY p.fecha_devolucion DESC
    `, [id_usuario]);
    await conn.end();
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: 'Error al obtener historial' });
  }
});


app.listen(3002, () => {
    console.log('Loan service activo en puerto 3002');
});
