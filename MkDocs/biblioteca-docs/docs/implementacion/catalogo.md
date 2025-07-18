# Servicio de Catálogo

Este microservicio permite consultar los libros disponibles en la Biblioteca Digital.

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

---

## 🚀 Endpoint

### Obtener libros

**GET** `/libros`

Consulta todos los libros registrados en el sistema.

- **Parámetros:** Ninguno

- **Respuesta exitosa:**
  - Código: `200`
  - Cuerpo: Lista de libros en formato JSON con todos los campos de la tabla `libros`

```json
[
  {
    "id": 2,
    "titulo": "Cien años de soledad",
    "autor": "Gabriel García Márquez",
    ...
  }
]
```
# 🐳 Dockerfile para Catalogo Node.js

Este `Dockerfile` permite crear una imagen Docker para el microservicio de **catálogos** desarrollado en Node.js. Su objetivo es facilitar la construcción, despliegue y ejecución del servicio en un contenedor aislado y portable.

---

## 📄 Contenido del Dockerfile

```Dockerfile
FROM node:22

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY index.js .

EXPOSE 3000

CMD ["node", "index.js"]
```