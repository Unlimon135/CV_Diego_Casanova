function validarFormulario() {
    // Obtener los valores de los campos
    const nombre = document.getElementById("nombre").value.trim();
    const apellido = document.getElementById("apellido").value.trim();
    const email = document.getElementById("email").value.trim();
    const telefono = document.getElementById("telefono").value.trim();
    const usuario = document.getElementById("usuario").value.trim();
    const password = document.getElementById("password").value.trim();
  
    // Verificar si algún campo está vacío
    if (!nombre || !apellido || !email || !telefono || !usuario || !password) {
      alert("Por favor, completa todos los campos.");
      return false; // Detiene el envío
    }
  
    alert("Formulario enviado correctamente.");
    return true; // Permite el envío
  }
  