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

// POST /registro
app.post('/registro', async (req, res) => {
    const { nombre, correo, contrasena } = req.body;
    try {
        const conn = await mysql.createConnection(dbConfig);
        await conn.execute('INSERT INTO usuarios (nombre, correo, contrasena) VALUES (?, ?, ?)', [nombre, correo, contrasena]);
        await conn.end();
        res.status(201).json({ mensaje: 'Usuario registrado' });
    } catch (error) {
        res.status(500).json({ error: 'Error al registrar usuario' });
    }
});

// POST /login (simulado)
app.post('/login', async (req, res) => {
    const { correo, contrasena } = req.body;
    try {
        const conn = await mysql.createConnection(dbConfig);
        const [rows] = await conn.execute('SELECT id, nombre, correo FROM usuarios WHERE correo = ? and contrasena = ?;', [correo, contrasena]);
        await conn.end();

        if (rows.length > 0) {
            res.json({ mensaje: 'Login exitoso', usuario: rows[0] });
        } else {
            res.status(401).json({ error: 'Correo no registrado' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Error en login' });
    }
});

app.listen(3001, () => {
    console.log('User service activo en puerto 3001');
});
