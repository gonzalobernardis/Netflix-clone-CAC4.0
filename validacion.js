document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("formulario").addEventListener('submit', validarFormulario); 
  });
  
  function validarFormulario(evento) {
    evento.preventDefault();
    var email = document.getElementById('email').value;
    if(email.length == 0) {
      alert('No has escrito nada en el email');
      return;
    }
    var clave = document.getElementById('clave').value;
    if (clave.length < 6) {
      alert('La clave no es válida');
      return;
    }
    this.submit();
  }