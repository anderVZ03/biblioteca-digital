#!/bin/bash

# 1. Actualizar e instalar Lynis
apt update && apt install -y lynis cron

# 2. Crear carpeta para guardar reportes
mkdir -p /opt/reports

# 3. Crear entrada cron diaria
echo "0 6 * * * root /usr/bin/lynis audit system --cronjob --report-file /var/log/lynis/lynis-report.dat && cp /var/log/lynis/lynis-report.dat /opt/reports/\$(date +\%F).dat" > /etc/cron.d/lynis

# 4. Ejecutar auditoría inicial manual
lynis audit system --cronjob --report-file /var/log/lynis/lynis-report.dat

# 5. Copiar el reporte inicial
cp /var/log/lynis/lynis-report.dat /opt/reports/$(date +%F).dat
