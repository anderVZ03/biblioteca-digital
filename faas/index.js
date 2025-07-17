import mysql from 'mysql2/promise';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
dotenv.config();

const dbConfig = {
  host: 'db',
  user: 'root',
  password: 'root',
  database: 'biblioteca'
};

// Función principal
async function sendReminders() {
  const conn = await mysql.createConnection(dbConfig);

  const [rows] = await conn.execute(`
    SELECT prestamos.id, usuarios.correo, libros.titulo, prestamos.fecha_devolucion
    FROM prestamos
    JOIN usuarios ON prestamos.id_usuario = usuarios.id
    JOIN libros ON prestamos.id_libro = libros.id
    WHERE fecha_devolucion = DATE_ADD(CURDATE(), INTERVAL 1 DAY)
  `);
  console.log(rows)

  await conn.end();

  if (rows.length === 0) {
    console.log('No hay préstamos próximos a vencer.');
    return;
  }

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS
    }
  });

  for (const p of rows) {
    const mailOptions = {
      from: '"Biblioteca" <no-reply@biblioteca.com>',
      to: p.correo,
      subject: `📚 Recordatorio de devolución: ${p.titulo}`,
      text: `Hola, recuerda devolver el libro "${p.titulo}" antes del ${p.fecha_devolucion}.`
    };

    try {
      await transporter.sendMail(mailOptions);
      console.log(`✅ Recordatorio enviado a ${p.correo}`);
    } catch (err) {
      console.error(`❌ Error al enviar a ${p.correo}:`, err.message);
    }
  }
}

sendReminders();
