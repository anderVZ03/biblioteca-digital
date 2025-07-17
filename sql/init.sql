-- Crear tablas
CREATE TABLE IF NOT EXISTS usuarios (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(100),
  correo VARCHAR(100) UNIQUE,
  contrasena VARCHAR(255)
);

CREATE TABLE IF NOT EXISTS libros (
  id INT AUTO_INCREMENT PRIMARY KEY,
  titulo VARCHAR(255),
  autor VARCHAR(255)
);

CREATE TABLE IF NOT EXISTS prestamos (
  id INT AUTO_INCREMENT PRIMARY KEY,
  id_usuario INT,
  id_libro INT,
  fecha_devolucion DATE,
  FOREIGN KEY (id_usuario) REFERENCES usuarios(id),
  FOREIGN KEY (id_libro) REFERENCES libros(id)
);

-- Insertar datos genéricos
INSERT INTO usuarios (nombre, correo, contrasena) VALUES
('Anderson', 'avelasquez9946@utm.edu.ec', 'anderson'),
('Jhoel', 'jmendoza8518@utm.edu.ec', 'jhoel'),
('Josselin', 'jdelacruz0563@utm.edu.ec', 'josselin'),
('Eric', 'ebravo9687@utm.edu.ec', 'eric');

INSERT INTO libros (titulo, autor) VALUES
('1984', 'George Orwell'),
('Cien Años de Soledad', 'Gabriel García Márquez'),
('El Principito', 'Antoine de Saint-Exupéry');

INSERT INTO prestamos (id_usuario, id_libro, fecha_devolucion) VALUES
(1, 2, DATE_ADD(CURDATE(), INTERVAL 7 DAY)),
(2, 1, DATE_ADD(CURDATE(), INTERVAL 14 DAY)),
(3, 3, DATE_ADD(CURDATE(), INTERVAL 3 DAY));
