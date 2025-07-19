# 📧FaaS

Envía correos electrónicos automáticos a usuarios con préstamos próximos a vencer (24 horas antes).

## ⚙️ Configuración

Archivo .env:

env
SMTP_USER=`anonimocorporativo000@gmail.com`
SMTP_PASS= `zpuw fkoo cbve tvom`

## 📦 Dependencias

nodemailer: Para envío de correos

mysql2/promise: Conexión a BD MySQL

dotenv: Manejo de variables de entorno

## ⏰ Programación

Ejecución diaria mediante CRON:

cron

## 🐳 Dockerfile

```dockerfile
FROM node:18
WORKDIR /app
RUN apt-get update && apt-get install -y cron
COPY package*.json ./
RUN npm install
COPY . .
COPY crontab /etc/cron.d/faas
RUN chmod 0644 /etc/cron.d/faas
RUN crontab /etc/cron.d/faas
RUN touch /var/log/cron.log
CMD node index.js && cron && tail -f /var/log/cron.log
```

## 📝 Flujo de trabajo

Consulta préstamos que vencen al día siguiente

Obtiene datos de usuario y libro

Envía correo personalizado

Registra resultados en logs.