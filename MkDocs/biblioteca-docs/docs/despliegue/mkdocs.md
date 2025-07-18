# 📘 Documentación con MkDocs

Este proyecto usa **MkDocs** y el tema **Material** para generar una documentación clara y profesional.

---

## 🏗️ Estructura del Proyecto

La documentación está en la carpeta `docs/` y organizada por secciones:

- `configuracion/`: Base de datos y tecnologías usadas
- `despliegue/`: Guías para levantar el sistema y la documentación
- `implementacion/`: Detalles de los microservicios, frontend y función FaaS
- `assets/`: Diagramas e imágenes de apoyo

---

## ⚙️ Comandos Básicos

### ▶️ Levantar la documentación localmente

```
mkdocs serve
```
Abre el sitio en http://localhost:8000

---
### 🏗️ Generar sitio estático
Crea una carpeta site/ con los archivos HTML listos para desplegar.

```
mkdocs build
```