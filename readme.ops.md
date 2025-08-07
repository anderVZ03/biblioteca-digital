# 🛡️ Auditoría de Seguridad con Lynis – Actividad 15 (Grupo 1)

## 📦 Pasos: Clonar → Ejecutar → Validar
**IMPORTANTE:** Asegurarse de que Ubuntu WSL tenga conexión a internet para realizar los pasos
```bash
# 1. Clonar el repositorio
git clone https://github.com/usuario/andervz03-biblioteca-digital.git

# 2. Ejecutar el script de instalación de Lynis (Solo funciona en entorno WSL o Linux)
sudo bash install_lynis.sh
```

---

## 🔧 Variables y puertos

- **Herramienta utilizada:** Lynis (auditoría del sistema operativo)
- **Puerto utilizado:** Ninguno. La auditoría opera directamente sobre el host.
- **Archivos relevantes:**
  - `/var/log/lynis/lynis-report.dat` → reporte diario automatizado
  - `/opt/reports/YYYY-MM-DD.dat` → respaldo diario de los reportes

---

## ✅ Validación de la herramienta

Una vez ejecutado el script, se puede verificar el funcionamiento con:

```bash
# Comprobar índice de seguridad
sudo grep hardening_index /var/log/lynis/lynis-report.dat

# Verificar las últimas líneas del reporte
sudo tail -n 15 /var/log/lynis/lynis-report.dat

# Ver resumen de hallazgos (OK, WARNING, SUGGESTION)
sudo lynis audit system | tee ~/lynis-salida.txt
grep "\[ " ~/lynis-salida.txt
```

---

## 📸 Capturas de evidencia
### Hardening

Aquí se muestra una puntuación que calcula Lynis al finalizar la auditoría. Representa el nivel de seguridad general del sistema, basado en las configuraciones actuales y los hallazgos obtenidos.

![Captura: Hardening Index](MKDocs/biblioteca-docs/docs/assets/hardening-index.png)

### 📄 Últimas 15 líneas del reporte (`lynis-report.dat`)

La siguiente secuencia de capturas muestra el contenido completo de las últimas 15 líneas generadas por el archivo de reporte de Lynis. Estas líneas confirman que la auditoría se ejecutó correctamente y que se alcanzó un índice de endurecimiento adecuado.

**Captura 1:**

![Captura: Últimas líneas del reporte 1](MKDocs/biblioteca-docs/docs/assets/captura-tail-1.png)

**Captura 2:**

![Captura: Últimas líneas del reporte 2](MKDocs/biblioteca-docs/docs/assets/captura-tail-2.png)

**Captura 3:**

![Captura: Últimas líneas del reporte 3](MKDocs/biblioteca-docs/docs/assets/captura-tail-3.png)


### Tabla “OK / Warning / Suggestion”

En la Captura se muestra el nombre del archivo o componente evaluado, el resultado de la prueba y la categoría correspondiente **[ OK ], [ WARNING ], [ SUGGESTION ]** que indica la actividad.

![Captura: Resumen de hallazgos](MKDocs/biblioteca-docs/docs/assets/resumen-hallazgos-1.png)
![Captura: Resumen de hallazgos 2](MKDocs/biblioteca-docs/docs/assets/resumen-hallazgos-2.png)
![Captura: Resumen de hallazgos 3](MKDocs/biblioteca-docs/docs/assets/resumen-hallazgos-3.png)

---

## 🧪 Prueba funcional

Una vez desplegado el sistema principal (por ejemplo con `docker-compose up -d`), el sistema Lynis opera como auditoría de host, **independiente del entorno de contenedores**, y ejecuta diariamente un análisis automatizado vía `cron`.

Se puede validar la vigilancia continua con:

```bash
# Visualizar el reporte actualizado generado por cron
ls -lh /opt/reports/

# Ver el contenido más reciente
sudo cat /opt/reports/$(date +%F).dat | grep hardening_index
```

> Esto demuestra que la herramienta está activa y monitoreando el host todos los días, sin intervención manual.
