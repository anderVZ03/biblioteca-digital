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
}

app.get('/libros', async (req, res) => {
    try {
        const conn = await mysql.createConnection(dbConfig);
        const [result] = await conn.execute('SELECT * from libros;');
        await conn.end();
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ error: "Error al obtener libros" });
    }
})

app.listen(3000, () => {
    console.log('Catalogos activo en el puerto 3000')
})