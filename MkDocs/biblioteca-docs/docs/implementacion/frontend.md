# 🖥️ Frontend Web

## 🏗️ Estructura de archivos

public/

├── index.html    # Estructura principal

├── style.css     # Estilos CSS

└── script.js     # Lógica de la aplicación

## 🔌 Endpoints consumidos

| Servicio  | Endpoint    | Método | Descripción                     |
|-----------|-------------|--------|---------------------------------|
| Usuarios  | /login      | POST   | Autenticación de usuarios       |
| Catálogo  | /libros     | GET    | Obtener listado de libros       |
| Préstamos | /prestamos  | POST   | Registrar nuevo préstamo        |
| Préstamos | /historial  | POST   | Obtener historial de usuario    |

## 🎨 Características

Interfaz responsive con pestañas

Modal para confirmación de préstamos

Validación de formularios

Gestión de estado de sesión

## 🐳 Dockerfile

```dockerfile
FROM node:22
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 4000
CMD ["node", "index.js"]
``
