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

### 1. Registrar Préstamo

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