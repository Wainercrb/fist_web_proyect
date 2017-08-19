var latitud = 0;
var longitud = 0;
window.addEventListener('load', cargarDatosUsuario, false);
document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('#btnEditar').addEventListener('click', editar);
    document.querySelector('#btn-ingresar-navbar').addEventListener('click', Ingresar);
    document.querySelector('#btnIngresarPerfil').addEventListener('click', verPerfiles);
    document.querySelector('#btnCerrarCesion').addEventListener('click', cerrarSesion);
    document.querySelector('#btnEliminarClienta').addEventListener('click', eliminarCuenta);
    document.querySelector('#btnMisProductos').addEventListener('click', verMisProductos);
    document.querySelector('#btnNavBuscar').addEventListener('click', buscar);
});
var Usuarios = [];
var Vendedores = [];
var usuarioActual;
var direccionLocal;


/*Carga los camponetes cuando el usuario le dio recordar contraseña*/
function cargarDatosUsuario() {
    cargarSessionStore();
    if (obtenerCookie("USUARIO") == "" || obtenerCookie("USUARIO") == null) {
        document.getElementById('input-checkbox-loginc').checked = false;
    } else {
        document.getElementById('input-checkbox-loginc').click();
        var usu = document.getElementById('txt-usuario');
        var contra = document.getElementById('txt-contrasena');
        usu.value = obtenerCookie("USUARIO");
        contra.value = obtenerCookie("CONTRASEÑA");
    }
}

function cargarSessionStore() {

    var nombreUsuario = sessionStorage.getItem('loginUsuarios');
    if (nombreUsuario != "") {
        preLoad(nombreUsuario);
    }
}

/*Verifica el usuario y carga la foto  correo y nombre del usuario, encaso de 
que no quiera recordar la contraseña elimina el cookie*/
function preLoad(pUsuario) {
    cargarUsuarios();
    for (i = 0; i < Usuarios.length; i++) {
        if ('"' + Usuarios[i].usuario + '"' == pUsuario) {
            document.getElementById("headerEmail").innerHTML = Usuarios[i].email;
            document.getElementById("headerName").innerHTML = Usuarios[i].nombre + " " + Usuarios[i].apellidoPaterno + " " + Usuarios[i].apellidoMaterno;
            bannerImg = document.getElementById('profile-img');
            bannerImg.src = "data:image/png;base64," + Usuarios[i].fotoU;
            bannerImg = document.getElementById('imgUsuarioActual');
            bannerImg.src = "data:image/png;base64," + Usuarios[i].fotoU;
            capturarLoginUsuario(Usuarios[i].usuario);
            document.getElementById('nombreVendedor').innerHTML = Usuarios[i].nombre;
            sessionStorage.setItem('posicion', JSON.stringify(i));
            usuarioActual = {
                nombre: Usuarios[i].nombre,
                tipoUsuario: "comprador",
                usuario: Usuarios[i].usuario
            };
            return;
        }
    }
    Usuarios = [];
    cargarVendedores();
    for (i = 0; i < Usuarios.length; i++) {
        if ('"' + Usuarios[i].usuario + '"' == pUsuario) {
            document.getElementById("headerEmail").innerHTML = Usuarios[i].email;
            document.getElementById("headerName").innerHTML = Usuarios[i].nombre;
            document.getElementById("EmailVendedor").innerHTML = Usuarios[i].email;
            document.getElementById("usuarioVendedor").innerHTML = Usuarios[i].usuario;
            document.getElementById("contrasenaVendedor").innerHTML = Usuarios[i].contrasenna;
            document.getElementById("servicioVendedor").innerHTML = Usuarios[i].tipoServicio;
            bannerImg = document.getElementById('profile-img');
            bannerImg.src = "data:image/png;base64," + Usuarios[i].fotoU;
            capturarLoginUsuario(Usuarios[i].usuario);
            bannerImg = document.getElementById('imgUsuarioActual');
            bannerImg.src = "data:image/png;base64," + Usuarios[i].fotoU;
            capturarLoginUsuario(Usuarios[i].usuario);
            document.getElementById('nombreVendedor').innerHTML = Usuarios[i].nombre;
            latitud = Usuarios[i].latitud;
            longitud = Usuarios[i].longitud;
            GetAddress();
            myMap();
            sessionStorage.setItem('posicion', JSON.stringify(i));
            usuarioActual = {
                nombre: Usuarios[i].nombre,
                tipoUsuario: "vendedor",
                usuario: Usuarios[i].usuario
            };
            return;
        }
    }
    alert("No se encontro el usuario");
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
/*Elimina el cookie por medo del nombre*/
function eliminarCookie(name) {
    document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}
/*Captura el usuario logeado guardandolo en el session storange*/
function capturarLoginUsuario(pUsuarioActual) {
    sessionStorage.setItem('loginUsuarios', JSON.stringify(pUsuarioActual));
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
            window.location = "VerPerfilEmpresa.html";
            return;
        }
    }
    Usuarios = [];
    cargarVendedores();
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
            window.location = "VerPerfilEmpresa.html";
            return;
        }
    }
    alert("No se encontro el usuario");
}

function initMap() {
    var x = document.getElementById('searchInput').style;
    x.display = "none";
}

function GetAddress() {
    var lat = parseFloat(latitud);
    var lng = parseFloat(longitud);
    var latlng = new google.maps.LatLng(lat, lng);
    var geocoder = geocoder = new google.maps.Geocoder();
    geocoder.geocode({
        'latLng': latlng
    }, function (results, status) {
        if (status == google.maps.GeocoderStatus.OK) {
            if (results[1]) {

                document.getElementById('location').innerHTML = results[1].formatted_address;
                document.getElementById('country').innerHTML = results[3].formatted_address;
            }
        }
    });
}

function myMap() {
    var mapProp = {
        center: new google.maps.LatLng(latitud, longitud),
        zoom: 15,
    };
    var map = new google.maps.Map(document.getElementById("map"), mapProp);
}


function editar() {
    sessionStorage.setItem('latitud', JSON.stringify(latitud));
    sessionStorage.setItem('longitud', JSON.stringify(longitud));
    window.location = "RegistroVendedor.html";

}

function verPerfiles() {
    if (usuarioActual.tipoUsuario == "comprador") {
        window.location = "VerPerfil.html";
    } else {

        window.location = "VerPerfilEmpresa.html";
    }
}

function cerrarSesion() {
    sessionStorage.clear();
    window.location = "index.html";
}

function eliminarCuenta() {
    var lcStorange = JSON.parse(localStorage.getItem('vendedores'));
    lcStorange.splice(parseInt(sessionStorage.getItem("posicion")), 1);
    localStorage.setItem('vendedores', JSON.stringify(lcStorange));
    window.location = "index.html";
}

function verMisProductos(){

    window.location = "MisProductos.html";
}
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