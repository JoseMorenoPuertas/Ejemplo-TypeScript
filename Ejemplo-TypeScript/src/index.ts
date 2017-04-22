function saluda()
{
    var usuario = (document.getElementById("nombreUsuario")).value;
    (document.getElementById("lblSaludo")).textContent = "Hola " + usuario;
};