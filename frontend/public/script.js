let usuarioActual = null;
let libroSeleccionado = null;

// LOGIN
document.getElementById("login-form").addEventListener("submit", async (e) => {
    e.preventDefault();

    const correo = document.getElementById("correo").value;
    const contrasena = document.getElementById("contrasena").value;

    const res = await fetch("http://localhost:3001/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ correo, contrasena }),
    });

    const data = await res.json();
    if (res.ok) {
        usuarioActual = data.usuario.id;
        mostrarContenido();
        cargarLibros();
        cargarHistorial();
    } else {
        document.getElementById("login-error").textContent = data.error || "Error al iniciar sesión.";
    }
});

// MOSTRAR CONTENIDO 
function mostrarContenido() {
    document.getElementById("login-section").classList.add("hidden");
    document.getElementById("libros-section").classList.remove("hidden");
    document.getElementById("logout-btn").classList.remove("hidden");
}

// CERRAR SESIÓN 
document.getElementById("logout-btn").addEventListener("click", () => {
    location.reload();
});

// CARGAR LIBROS 
async function cargarLibros() {
    const res = await fetch("http://localhost:3000/libros");
    const libros = await res.json();

    const lista = document.getElementById("libros-list");
    lista.innerHTML = "";

    libros.forEach((libro) => {
        const item = document.createElement("li");
        item.innerHTML = `
      <strong>${libro.titulo}</strong> — ${libro.autor}
      <button class="btn-prestar">Prestar</button>
    `;
        item.querySelector(".btn-prestar").addEventListener("click", () => {
            libroSeleccionado = libro;
            document.getElementById("libro-elegido").textContent = `${libro.titulo} — ${libro.autor}`;
            document.getElementById("modal").classList.remove("hidden");
        });
        lista.appendChild(item);
    });
}

// CONFIRMAR PRÉSTAMO 
document.getElementById("confirmar-prestamo").addEventListener("click", async () => {
    const res = await fetch("http://localhost:3002/prestamos", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            id_usuario: usuarioActual,
            id_libro: libroSeleccionado.id,
            fecha_devolucion: new Date(Date.now() + 86400000).toISOString().split('T')[0]
        }),
    });

    if (res.ok) {
        alert("Préstamo realizado con éxito");
        cerrarModal();
        cargarHistorial();
    } else {
        alert("Error al prestar el libro");
    }
});

// CERRAR MODAL 
document.getElementById("cerrar-modal").addEventListener("click", cerrarModal);

function cerrarModal() {
    document.getElementById("modal").classList.add("hidden");
}

// CARGAR HISTORIAL 
async function cargarHistorial() {
    const res = await fetch(`http://localhost:3002/historial`,{
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            id_usuario: usuarioActual
        })
    });
    const historial = await res.json();

    const lista = document.getElementById("historial-list");
    lista.innerHTML = "";

    historial.forEach((prestamo) => {
        const item = document.createElement("li");
        item.textContent = `${prestamo.titulo} — prestado hasta ${new Date(prestamo.fecha_devolucion).toLocaleDateString()}`;
        lista.appendChild(item);
    });
}

// ============ PESTAÑAS ============
document.getElementById("tab-libros").addEventListener("click", () => {
    document.getElementById("libros-section").classList.remove("hidden");
    document.getElementById("historial-section").classList.add("hidden");
    activarPestaña("tab-libros");
});

document.getElementById("tab-historial").addEventListener("click", () => {
    document.getElementById("libros-section").classList.add("hidden");
    document.getElementById("historial-section").classList.remove("hidden");
    activarPestaña("tab-historial");
});

function activarPestaña(id) {
    document.getElementById("tab-libros").classList.remove("active");
    document.getElementById("tab-historial").classList.remove("active");
    document.getElementById(id).classList.add("active");
}
