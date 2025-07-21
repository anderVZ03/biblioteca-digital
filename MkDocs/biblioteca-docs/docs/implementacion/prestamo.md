# Servicio de Préstamos

Este microservicio gestiona los préstamos de libros y el historial de usuarios en la Biblioteca Digital.

## 📦 Tecnologías usadas

- **Node.js** con **Express**
- **Base de datos MySQL**
- Middleware: `cors`, `express.json`
- Conexión asincrónica mediante `mysql2/promise`

## ⚙️ Configuración

El servicio utiliza las siguientes variables de entorno para conectarse a la base de datos:

| Variable       | Valor por defecto |
|----------------|-------------------|
| `DB_HOST`      | `db`              |
| `DB_USER`      | `root`            |
| `DB_PASSWORD`  | `root`            |
| `DB_NAME`      | `biblioteca`      |

## 🚀 Endpoints

### Registrar Préstamo

**POST** `/prestamos`

Registra un nuevo préstamo de un libro a un usuario.

- **Body JSON requerido:**

```json
{
  "id_usuario": 1,
  "id_libro": 2,
  "fecha_devolucion": "2025-07-17"
}
```

### Consultar Historial de Préstamos

**POST** `/historial`

Obtiene el historial de préstamos de un usuario ordenado por fecha de devolución.

- **Body JSON requerido:**

```json
{
  "id_usuario": 1
}
```
# 🐳 Dockerfile para el Servicio de Préstamos

Este `Dockerfile` define cómo construir la imagen Docker para el microservicio de **préstamos** de la Biblioteca Digital. Permite encapsular la aplicación en un contenedor ligero y reproducible.

---

## 📄 Contenido del Dockerfile

```Dockerfile
FROM node:22

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY index.js .

EXPOSE 3002

CMD ["node", "index.js"]
```