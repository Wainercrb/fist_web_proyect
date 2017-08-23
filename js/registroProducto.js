var productos = [];
document.querySelector('#btnIngresar').addEventListener('click', capturar);
window.addEventListener('load', cargarDatosUsuario, false);
document.querySelector('#btn-ingresar-navbar').addEventListener('click', Ingresar);
document.querySelector('#btnCerrarCesion').addEventListener('click', cerrarSesion);
document.querySelector('#addProduct').addEventListener('click', addProducto);
document.querySelector('#btnIngresarPerfil').addEventListener('click', verPerfiles);
document.querySelector('#btnOlvidoContrasena').addEventListener('click', olvidoContrasena);
document.querySelector('#btnEliminarClienta').addEventListener('click', eliminarCuenta);
var Usuarios = [];
var Vendedores = [];
var editar = false;
var usuarioActual = {
    nombre: "",
    tipoUsuario: "",
    usuario: ""
};
/*funcion captura los catos  que ingresan por interfaz*/
function capturar() {
    productos = [];
    var CaT = document.getElementById("categoria");
    var value = CaT.options[CaT.selectedIndex].value;
    var text = CaT.options[CaT.selectedIndex].text;
    var sCaT = document.getElementById("subCategoria");
    var value = sCaT.options[sCaT.selectedIndex].value;
    var finaSCategoria = sCaT.options[sCaT.selectedIndex].text;
    var codigo = document.querySelector('#txtCodigo').value,
    nombre = document.querySelector('#txtNombre').value,
    marca = document.querySelector('#txtMarca').value,
    precio = document.querySelector('#txtPrecio').value,
    cantidad = document.querySelector('#txtCantidad').value,
    categoria = text,
    subCategoira = finaSCategoria,
    descripcion = document.querySelector('#txtDescripcion').value;
    if (verificarDatos(codigo, nombre, marca, precio, cantidad, categoria, subCategoira, descripcion) == true) {
        if (editar == true) {
            eliminarProducto();
        }
        addProductos(codigo, nombre, marca, precio, cantidad, categoria, subCategoira, descripcion);
    }
}
/*funcion crea un objeto de los datos que ingresan por parametros*/
function addProductos(pCodigo, pNombre, pMarca, pPrecio, pCantidad, pCategoria, pSubCategoria, pDescripcion) {
    var nuevoProducto = {
        codigo: pCodigo,
        nombre: pNombre,
        marca: pMarca,
        precio: pPrecio,
        cantidad: pCantidad,
        categoria: pCategoria,
        subCategoria: pSubCategoria,
        descripcion: pDescripcion,
        vendedor: usuarioActual.usuario
    };
    cargarTodosProductos();
    productos.push(nuevoProducto);
    guardarLista(productos);
}
/*funcion gurda el objeto y si era tipo editar carga las paginas donde se muestran los productos, si no carga esta misma*/
function guardarLista(listaFinalProductos) {
    localStorage.setItem('Producto', JSON.stringify(listaFinalProductos));
    if (editar == true) {
        window.location = "MisProductos.html";
    } else {
        window.location = "NuevoProducto.html";
    }
}
/*Carga los camponetes cuando el usuario le dio recordar contraseña*/
function cargarDatosUsuario() {
    if (parseInt(sessionStorage.getItem('verProducto')) >= 0) {
        editar = true;
    }
    cargarSessionStore();
    if (obtenerCookie("USUARIO") == "" || obtenerCookie("USUARIO") == null) {
        document.getElementById('input-checkbox-loginc').checked = false;
    } else {
        document.getElementById('input-checkbox-loginc').click();
        var usu = document.getElementById('txt-usuario');
        var contra = document.getElementById('txt-contrasena');
        usu.value = obtenerCookie("USUARIO");;
        contra.value = obtenerCookie("CONTRASEÑA");
    }
}
/*funcion verifica si hay un usuario registrado y si hay carga los datos del mismo a interfaz*/
function cargarSessionStore() {
   var nombreUsuario = sessionStorage.getItem('loginUsuarios');
    if (nombreUsuario != "") {
        preLoad(nombreUsuario);
    }
}
/*Verifica el usuario y carga la foto  correo y nombre del usuario, encaso de 
que no quiera recordar la contraseña elimina el cookie*/
function preLoad(pUsuario) {
    Usuarios = [];
    cargarUsuarios();
    for (i = 0; i < Usuarios.length; i++) {
        if ('"' + Usuarios[i].usuario + '"' == pUsuario) {
            document.getElementById("headerEmail").innerHTML = Usuarios[i].email;
            document.getElementById("headerName").innerHTML = Usuarios[i].nombre + " " + Usuarios[i].apellidoPaterno + " " + Usuarios[i].apellidoMaterno;
            bannerImg = document.getElementById('profile-img');
            bannerImg.src = "data:image/png;base64," + Usuarios[i].fotoU;
            capturarLoginUsuario(Usuarios[i].usuario);
            usuarioActua.nombre = Usuarios[i].nombre;
            usuarioActual.tipoUsuario = "comprador";
            usuarioActual.usuario = Usuarios[i].usuario;
            return;
        }
    }
    Usuarios = [];
    cargarVendedores();
    for (i = 0; i < Usuarios.length; i++) {
        if ('"' + Usuarios[i].usuario + '"' == pUsuario) {
            document.getElementById("headerEmail").innerHTML = Usuarios[i].email;
            document.getElementById("headerName").innerHTML = Usuarios[i].nombre;
            bannerImg = document.getElementById('profile-img');
            bannerImg.src = "data:image/png;base64," + Usuarios[i].fotoU;
            capturarLoginUsuario(Usuarios[i].usuario);
            usuarioActual.nombre = Usuarios[i].nombre;
            usuarioActual.tipoUsuario = "vendedor";
            usuarioActual.usuario = Usuarios[i].usuario;
            if (editar === true) {
                editarProductos();
            }
            return;
        }
    }
}
/*funcion carga los elementos del arreglo producto a la interfaz*/
function editarProductos() {
    cargarTodosProductos();
    var x = parseInt(sessionStorage.getItem('verProducto'));
    document.getElementById('txtCodigo').value = productos[x].codigo;
    document.getElementById('txtNombre').value = productos[x].nombre;
    document.getElementById('txtMarca').value = productos[x].marca;
    document.getElementById('txtPrecio').value = productos[x].precio;
    document.getElementById('txtCantidad').value = productos[x].cantidad;
    document.getElementById('txtDescripcion').value = productos[x].descripcion;
    buscarIndex("categoria", productos[x].categoria);
    buscarIndex("subCategoria", productos[x].subCategoria);
}
/*Obtiene el arreglo del local storange, lo parsea y lo agrega a la lista*/
function cargarUsuarios() {
    var listaUsuarios = localStorage.getItem('AllUsers');
    if (listaUsuarios != null) {
        Usuarios = JSON.parse(listaUsuarios);
    } else {
        Usuarios = [];
    }
    return Usuarios;
}
/*Carga todos los productos de local Storange y los agrega al arreglo*/
function cargarTodosProductos() {
    var listaUsuarios = localStorage.getItem('Producto');
    if (listaUsuarios != null) {
        productos = JSON.parse(listaUsuarios);
    } else {
        productos = [];
    }
    return productos;
}
/*Obtiene el arreglo del local storange, lo parsea y lo agrega a la lista*/
function cargarVendedores() {
    var listaUsuarios = localStorage.getItem('vendedores');
    if (listaUsuarios != null) {
        Usuarios = JSON.parse(listaUsuarios);
    } else {
        Usuarios = [];
    }
    return Usuarios;
}
/*Obtine y retorna el cookie por medio de la clave*/
function obtenerCookie(clave) {
    var name = clave + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1);
        if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
    }
    return "";
}
/*crea un cooki, clave nombre del cookie, valor del cookie, y expiracíon del mismo*/
function crearCookieuSUARIO(clave, valor, diasexpiracion) {
    var d = new Date();
    d.setTime(d.getTime() + (diasexpiracion * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toUTCString();
    document.cookie = clave + "=" + valor + "; " + expires;
}
/*Captura el usuario logeado guardandolo en el session storange*/


function capturarLoginUsuario(pUsuarioActual) {
    sessionStorage.setItem('loginUsuarios', JSON.stringify(pUsuarioActual));
}
/*Elimina el cookie por medo del nombre*/
function eliminarCookie(name) {
    document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}
/*Verifica el usuario y carga la foto  correo y nombre del usuario, encaso de 
que no quiera recordar la contraseña elimina el cookie*/
function Ingresar() {
    cargarUsuarios();
    var usuario = document.querySelector('#txt-usuario').value;
    var contra = document.querySelector('#txt-contrasena').value;
    var check = document.getElementById('input-checkbox-loginc').checked;
    for (i = 0; i < Usuarios.length; i++) {
        if (Usuarios[i].usuario == usuario && Usuarios[i].contrasenna == contra) {
            if (check == true) {
                crearCookieuSUARIO("USUARIO", usuario, 900);
                crearCookieuSUARIO("CONTRASEÑA", contra, 900);
            } else {
                eliminarCookie("USUARIO");
                eliminarCookie("CONTRASEÑA");
            }
            capturarLoginUsuario(Usuarios[i].usuario);
            window.location = "NuevoProducto.html";
            return;
        }
    }
    Usuarios = [];
    cargarSessionStore();
    for (i = 0; i < Usuarios.length; i++) {
        if (Usuarios[i].usuario == usuario && Usuarios[i].contrasenna == contra) {
            if (check == true) {
                crearCookieuSUARIO("USUARIO", usuario, 900);
                crearCookieuSUARIO("CONTRASEÑA", contra, 900);
            } else {
                eliminarCookie("USUARIO");
                eliminarCookie("CONTRASEÑA");
            }
            capturarLoginUsuario(Usuarios[i].usuario);
            window.location = "NuevoProducto.html";
            return;
        }
    }
    alert("No se encontro el usuario");
}

function verificarDatos(codigo, nombre, marca, precio, cantidad, categoria, subCategoira, descripcion) {
 if (editar == false) {
        if (codigo.length <= 0 || codigo == "") {
            VerError("labelCodigo", "codigo producto (verifique este dato)");
            return false;
        } else {
            VerError2("labelCodigo", "Codigo Produto");
        }
    }
    if (nombre.length <= 3 || nombre == null) {
        VerError("labelNombre", "Nombre Producto (verifique este dato)");
        return false;
    } else {
        VerError2("labelNombre", "Nombre Producto");
    }
    if (marca.length <= 3 || marca == null) {
        VerError("labelMarca", "Marca Producto (verifique este dato)");
        return false;
    } else {
        VerError2("labelMarca", "Marca Producto");
    }
    if (precio.length <= 0 || precio == null) {
        VerError("labelPrecio", "Precio Producto (verifique este dato)");
        return false;
    } else {
        VerError2("labelPrecio", "Precio Producto");
    }
    if (cantidad.length <= 0 || cantidad == null) {
        VerError("labelCatidad", "Cantidad Producto (verifique este dato)");
        return false;
    } else {
        VerError2("labelCatidad", "Catidad Producto");
    }
    if (categoria.length <= 3 || categoria == null) {
        VerError("labelCategoria", "Categoria Producto (verifique este dato)");
        return false;
    } else {
        VerError2("labelCategoria", "Categoria Producto");
    }
    if (subCategoira.length <= 3 || subCategoira == null) {
        VerError("labelSubCategora", "Sub-Categoria Producto (verifique este dato)");
        return false;
    } else {
        VerError2("labelSubCategora", "Sub-Categoria Producto");
    }
    if (descripcion.length <= 3 || descripcion == null) {
        VerError("labelDescripcion", "Descripción Producto (verifique este dato)");
        return false;
    } else {
        VerError2("labelDescripcion", "Descripción Producto");
    }
    return true;
}

/*Pinta de rojo el elemto que ingresa por parametro y agrega un nuevo label*/
function VerError(label, dato) {
    var x = document.getElementById(label).style;
    x.color = "red";
    document.getElementById(label).innerHTML = dato;
}
/*Pinta de verde el elemento que ingresa por parametro y le agrega un dato*/
function VerError2(label, dato) {
    var x = document.getElementById(label).style;
    x.color = "green";
    document.getElementById(label).innerHTML = dato;
}
/*funcion carga la pagina del perfil dependiendo del usuario*/
function verPerfiles(){
    if(usuarioActual.tipoUsuario == "comprador"){
        window.location ="VerPerfil.html";
    }else if(usuarioActual.tipoUsuario == "vendedor"){
        window.location = "VerPerfilEmpresa.html";
    }else{
        alert("No puedes acceder a esta información por que no estas registrado");
    }
}
/*funcion elimina el sessionStorange y carga la pagina principal*/
function cerrarSesion(){
  sessionStorage.clear();
  window.location = "index.html";
  return;
}
/*funcion verifica que el usuario sea vendedor y si lo es carga la pagina para que agrege un nuevo producto*/
function addProducto(){
  if (usuarioActual.tipoUsuario === "vendedor") {
    window.location = "NuevoProducto.html";
}else{
    alert("No tienes permisos para esta acción");
}
}
/*funcion vefica que este un usurio logeado y si lo esta cagar la pagina para cambiar contraseña*/
function olvidoContrasena(){
  if(usuarioActual.tipoUsuario =="" || usuarioActual.tipoUsuario == ""){
      window.location = "CambioContrasenna.html";
  }else{
      alert("Actualmente estas registrado");
  }
}
/*Funcion guarda un un valor en sessionStorange para cargar la pagina de buscar y cargar ese elemento*/
function buscar(){
  var CaT = document.getElementById("selectCategoriaBuscar");
  var value = CaT.options[CaT.selectedIndex].value;
  var text = CaT.options[CaT.selectedIndex].text;
  var sCaT = document.getElementById("selectDistancia");
  var value = sCaT.options[sCaT.selectedIndex].value;
  var finaSCategoria = sCaT.options[sCaT.selectedIndex].value;
  if(document.getElementById("btn-search").value == ""){
   sessionStorage.setItem('valorBuscar', "-");
}else{
  sessionStorage.setItem('valorBuscar', document.getElementById("btn-search").value);
}
sessionStorage.setItem('categoria', text);
sessionStorage.setItem('distancia', finaSCategoria);
window.location = "BuscarArticulo.html";

}
/*carga  el tipo de servicio al select por medio del index del select*/
function buscarIndex(lmnt, etxt){
  var x = document.getElementById(lmnt);
  for(var i=0; i < x.options.length; i++){
     if (x.options[i].text === etxt){
        x.options[i].selected = true;

    }
}
}
/*funcion elimina del localStorange*/
function eliminarProducto() {
    var x = parseInt(sessionStorage.getItem('verProducto'));
    var lcStorange = JSON.parse(localStorage.getItem('Producto'));
    lcStorange.splice(x, 1);
    localStorage.setItem('Producto', JSON.stringify(lcStorange));
    sessionStorage.setItem('verProducto', '-1');
}
/*funcion elimina mi perfil del localStorange*/
function eliminarCuenta() {
    var lcStorange = JSON.parse(localStorage.getItem('vendedores'));
    lcStorange.splice(parseInt(sessionStorage.getItem("posicion")), 1);
    localStorage.setItem('vendedores', JSON.stringify(lcStorange));
    window.location = "index.html";
}
