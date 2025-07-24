# 📋 Plan de Pruebas

## Objetivos

- Validar que los endpoints de cada microservicio funcionen correctamente.
- Garantizar una cobertura de al menos el 80%.

## Tipos de prueba

- Funcionales (respuesta esperada)
- Integración (comunicación entre servicios)
- Automatizadas (Newman)

## Matriz de Casos

| Caso | Servicio  | Endpoint      | Método | Esperado |
|------|-----------|---------------|--------|----------|
| C1   | Catálogo  | /libros       | GET    | 200      |
| C2   | Usuario   | /login        | POST   | 200 o 401|
| C3   | Préstamo  | /historial    | POST   | 200      |
