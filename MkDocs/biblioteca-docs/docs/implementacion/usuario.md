# 👤 Microservicio de Usuarios

## Endpoints

**POST** `/registro`

```json
{
  "nombre": "string",
  "correo": "string",
  "contrasena": "string"
}
```

**POST** `/login`
```json
{
  "correo": "string",
  "contrasena": "string"
}
```

```json
{
  "mensaje": "Login exitoso",
  "usuario": {
    "id": number,
    "nombre": "string",
    "correo": "string"
  }
}
```

## ⚙️ Configuración

env
DB_HOST=db
DB_USER=root
DB_PASSWORD=root
DB_NAME=biblioteca

## 🐳 Dockerfile


```dockerfile
FROM node:22
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY index.js .
EXPOSE 3001
CMD ["node", "index.js"]
```

## 🔐 Seguridad

Validación básica de credenciales

No almacena contraseñas en texto plano (debería usar bcrypt en producción)

