# 🐳 Despliegue con Docker Compose

El archivo **docker-compose.yml**,  define y ejecuta todos los servicios del proyecto Biblioteca digital, usando contenedores Docker. Con la orden (`docker-compose up`) se levantan:

- Base de datos
- 3 microservicios: catálogo, usuario y préstamo
- Una función FaaS
- Una interfaz de usuario

---

## 📂 Estructura de Servicios


### 🔸 Base de datos - `db`
Contenedor con MariaDB 10.11. Al iniciar, ejecuta un script que contiene la definición de la base de datos y las tablas.
```
image: mariadb:10.11
environment:
  MYSQL_ROOT_PASSWORD: root
  MYSQL_DATABASE: biblioteca
volumes:
  - ./sql/init.sql:/docker-entrypoint-initdb.d/init.sql:ro

```
---
### 📚 Catálogo – `catalogo`
Microservicio que utiliza Node.js 22 en el puerto 3000 y utiliza las variables de entorno para realizar la conexión con la base de datos. Contiene la API para el catálogo de libros.

---
### 👤 Usuario  – `usuario`
Microservicio que utiliza Node.js 22 en el puerto 3001 y utiliza las variables de entorno para realizar la conexión con la base de datos.
Contiene las APIs para el inicio y registro de usuarios.

---
### 📄 Prestamo  – `prestamo`
Microservicio que utiliza Node.js 22 en el puerto 3002 y utiliza las variables de entorno para realizar la conexión con la base de datos.
Contiene las APIs para registrar prestamos y obtener el historia de pedidos.

--- 
### 🌐 Frontend – `frontend`
Interfaz web de la biblioteca digital, que utiliza y expone el servicio en el puerto 4000. Utiliza Node.js en su versión 22 sirviendo archivos estáticos unicamente.

---
### 🔔 Función FaaS – `faas`
Función que envía correos cada hora cuando un préstamos está por vencer.

- Trigger: programado (cron)
- Lenguaje: Node.js 22
- Usa un archivo .env para las credenciales de correo.
---
## ▶️ Levantar el proyecto
Hay que ejecutar desde la raíz del proyecto el comando `docker-compose up --build`

De ese modo:

- Compila todos los servicios

- Crea el volumen db_data para persistencia

- Corre todo en localhost

---
## 💾 Volúmenes
Se usa para mantener persistencia de datos en la DB, incluso luego de reinicios.
```
volumes:
  db_data:
```
---
## 📷 Capturas del sistema
Puedes ver más en [Capturas](../capturas.md)
