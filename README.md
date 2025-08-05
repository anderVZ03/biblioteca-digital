# 📚 Biblioteca Digital — Microservicios + Documentación MkDocs

Bienvenido a **Biblioteca Digital**, un sistema distribuido basado en microservicios que gestiona operaciones de catálogo, préstamos, usuarios, funciones automatizadas (FaaS) y una interfaz web sencilla. Además, incluye su propia documentación técnica generada con MkDocs.

---

## 🚀 ¿Qué incluye el proyecto?

Este repositorio contiene varios módulos separados por carpetas, cada uno ejecutándose como un microservicio gracias a **Docker Compose**:

| Módulo          | Descripción |
|-----------------|-------------|
| `catalogo`      | Servicio para gestión de libros y colecciones. |
| `prestamo`      | Lógica de préstamos y devoluciones. |
| `usuario`       | Registro y autenticación de usuarios. |
| `faas`          | Funciones automatizadas programadas. |
| `frontend`      | Interfaz web ligera. |
| `sql/init.sql`  | Script de inicialización de la base de datos. |
| `MkDocs`        | Documentación técnica del sistema. |

---

## ⚙️ Requisitos

- Docker + Docker Compose
- Python 3.10 o superior (solo si vas a trabajar con la documentación)

---

## 🧪 Cómo ejecutar el sistema

Solo necesitas **un comando** para levantar todos los microservicios:

```bash
docker-compose up --build
```

Este comando:
- Construye todas las imágenes necesarias
- Levanta los contenedores
- Expone los servicios en sus respectivos puertos

---

## 📄 Documentación técnica

La documentación se encuentra dentro de la carpeta [`MkDocs/biblioteca-docs`](MkDocs/biblioteca-docs). Está generada con **MkDocs** y estilizada con el tema **Material for MkDocs**.

### 🧰 Instrucciones para desarrolladores

1. Accede a la carpeta de la documentación:

   ```bash
   cd MkDocs/biblioteca-docs
   ```

2. (Opcional pero recomendado) Crea un entorno virtual:

   ```bash
   python -m venv env
   source env/bin/activate  # Linux/macOS
   env\Scripts\activate     # Windows
   ```

3. Instala las dependencias:

   ```bash
   pip install -r ../requirements.txt
   ```

4. Corre el servidor local de documentación:

   ```bash
   mkdocs serve
   ```

5. Abre en el navegador: [http://localhost:8000](http://localhost:8000)

---

## 🧼 .gitignore

Ya está configurado para ignorar archivos temporales, entornos virtuales, módulos `node_modules`, y otros archivos que no deben subirse al repositorio.

---

## 🛡️ Auditoría de Seguridad con Lynis

### 🔧 Pasos para ejecutar
- Para ejecutar correctamente los comandos de auditoría con Lynis, es necesario usar un entorno Linux. En Windows, esto se logra instalando y utilizando **WSL (Subsistema de Windows para Linux)** con una distribución como Ubuntu ya que es necesario operar desde una consola Linux funcional dentro de Windows.

```bash
sudo bash install_lynis.sh
```

---

### 🧠 Notas adicionales

- Los servicios están escritos en **Node.js** (cada uno con su propio `package.json`).
- El cron en el servicio `faas` está definido en el archivo `crontab`.
- La base de datos se inicializa con el script `sql/init.sql`.
- El `frontend` es un cliente simple HTML/JS para interactuar con los microservicios.

---


