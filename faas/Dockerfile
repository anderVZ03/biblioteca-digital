FROM node:18

WORKDIR /app

RUN apt-get update && apt-get install -y cron

COPY package*.json ./
RUN npm install

COPY . .

# Copiamos el archivo crontab
COPY crontab /etc/cron.d/faas

# Damos permisos al archivo crontab
RUN chmod 0644 /etc/cron.d/faas

# Aplicamos el cron
RUN crontab /etc/cron.d/faas

# Creamos carpeta para logs (opcional)
RUN touch /var/log/cron.log

# Comando que arranca cron y el script (cron en background)
CMD node index.js && cron && tail -f /var/log/cron.log