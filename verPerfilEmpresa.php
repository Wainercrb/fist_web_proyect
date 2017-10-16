<!DOCTYPE html>
<html lang="es">
    <head>
        <meta charset="utf-8">
        <title>Perfil del vendedor</title>
        <meta name="viewport" content="widt=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
        <link rel="stylesheet" type="text/css" href="css/bootstrap.min.css">
        <link rel="stylesheet" type="text/css" href="css/headerFooter.css">
        <link rel="stylesheet" type="text/css" href="css/verPerfilEmpresa.css">
        <link href="css/animate.min.css" rel="stylesheet">
        <script src="https://maps.googleapis.com/maps/api/js?libraries=places" async defer></script>
    </head>
    <body>
        <div id="top">
            <div class="container">
                <div class="col-md-6 offer" data-animate="fadeInDown">
                    <a href="#" class="btn btn-success btn-sm" data-animate-hover="shake">Oferta del día</a> <a href="#">Aprovecha el 35% de rebaja en ropa de niño</a>
                </div>
                <div class="col-md-6" data-animate="fadeInDown">
                    <ul class="menu">
                        <li><a href="/Nosotros.html">Nosotros</a>
                    </li>
                    <li><a href="TiposPerfil.html">Tipos de perfil</a>
                </li>
                <li><a href="ingresar.html">Login</a>
            </li>
            <li><a id="addProduct" class="btn btn-success btn-sm" data-animate-hover="shake">Nuevo producto</a>
        </li>
    </ul>
</div>
</div>
</div>
<!--Inicia la parte del banner-->
<nav class="navbar navbar-default" role="navigation">
<div class="container-fluid">
<!-- Brand and toggle get grouped for better mobile display -->
<div class="navbar-header">
    <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-megadropdown-tabs">
    <span class="sr-only">Toggle navigation</span>
    <span class="icon-bar"></span>
    <span class="icon-bar"></span>
    <span class="icon-bar"></span>
    </button>
    <a class="navbar-brand" href="index.html"><img src="img/logo%20-%20copia.jpg" width="50px" height="50px"></a>
</div>
<!-- Collect the nav links, forms, and other content for toggling -->
<div class="navbar-collapse style= collapse in" id="bs-megadropdown-tabs" style="padding-left: 0px;">
    <form class="navbar-form navbar-left" role="search" height="10px">
        <div class="form-group div-search ">
            <div class="input-group input-group-lg input-group-full search">
                <input type="text" class="form-control" id="btn-search" aria-label="Search" size="100">
                <div class="input-group-btn">
                    <div class="btn btn-default">
                        <select id="selectCategoriaBuscar" class="form-control select">
                            <option value="">Todas</option>
                            <option value="">Hombre</option>
                            <option value="">Mujeres</option>
                            <option value="">Niños</option>
                            <option value="">Casa</option>
                            <option value="">Jardin</option>
                            <option value="">Motores</option>
                            <option value="">Honits</option>
                            <option value="">Consolas</option>
                            <option value="">Otros</option>
                        </select>
                    </div>
                    <div class="btn btn-default second-select">
                        <select  id="selectDistancia" class="form-control select second-select">
                            <option value="5">5km</option>
                            <option value="10">10km</option>
                            <option value="20">20km</option>
                            <option value="30">30km</option>
                            <option value="40">40km</option>
                            <option value="50">50km</option>
                            <option value="60">+km</option>
                        </select>
                    </div>
                    <button id="btnNavBuscar" type="button" class="btn btn-default"><span class="glyphicon glyphicon-search" aria-hidden="true" id="span-buscar"></span></button>
                </div>
            </div>
        </div>
    </form>
    <ul class="nav navbar-nav navbar-right" id="navbar-nav">
        <li class="dropdown">
            <a href="#" class="dropdown-toggle" data-toggle="dropdown">
                <span class="glyphicon glyphicon-user"></span>
                <strong>Usuario</strong>
                <span class="glyphicon glyphicon-chevron-down"></span>
            </a>
            <ul style="background-color:white;" class="dropdown-menu">
                <li>
                    <div class="navbar-login div-position">
                        <div class="row">
                            <div class="col-lg-4">
                                <p class="text-center">
                                    <img id="profile-img" class="center-block" src="img/img-profile.jpg" />
                                </p>
                            </div>
                            <div class="col-lg-8">
                                <p class="text-center"><strong id="headerName">Nombre Apellido</strong></p>
                                <p class="text-center small" id="headerEmail">correoElectronico@email.com</p>
                                <p class="text-center">
                                    <a id="btnIngresarPerfil" class="btn btn-primary btn-block btn-sm">ver mi perfil</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </li>
                <li class="divider"></li>
                <li>
                    <div class="navbar-login navbar-login-session div-position">
                        <div class="row">
                            <div class="col-lg-12">
                                <p>
                                    <a id="btnCerrarCesion" class="btn btn-danger btn-block btn-sm">Cerrar Sesion</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
        </li>
        <li class="dropdown">
            <a href="#" class="dropdown-toggle" data-toggle="dropdown">Ingresar<span class="caret"></span></a>
            <ul id="login-dp" class="dropdown-menu">
                <li>
                    <div class="row">
                        <div class="col-lg-12 second-div text-center">
                            Registrar como
                            <div class="social-buttons">
                                <a  class="btn btn-primary">Usuario</a>
                                <a href="#" class="btn btn-primary">Empresa</a>
                            </div>
                            <h2 id="h2">Ingreso rápido</h2>
                            <form class="form" role="form" method="post" action="login" accept-charset="UTF-8" id="login-nav">
                                <div class="form-group">
                                    <label class="sr-only" for="exampleInputEmail2">Usuario</label>
                                    <input type="text" class="form-control" id="txt-usuario" placeholder="Usuario" required="">
                                </div>
                                <div class="form-group">
                                    <label class="sr-only" for="exampleInputPassword2">Contraseña</label>
                                    <input type="password" class="form-control" id="txt-contrasena" placeholder="Contraseña" required="">
                                    <div id="btnOlvidoContrasena" class="help-block text-center"><a href="#">Olvido su contraseña?</a></div>
                                </div>
                                <div class="form-group">
                                    <button type="button" id="btn-ingresar-navbar" class="btn btn-primary btn-block">Ingresar</button>
                                </div>
                                <div class="checkbox">
                                    <label>
                                        <input type="checkbox" id="input-checkbox-loginc"> Recordarme!
                                    </label>
                                </div>
                            </form>
                        </div>
                        <div class="bottom text-center">
                            ¿eliminar tu cuenta? <a><b id="btnEliminarClienta">click</b></a>
                        </div>
                    </div>
                </li>
            </ul>
        </li>
    </ul>
</div>
<!-- /.navbar-collapse -->
</div>
<!-- /.container-fluid -->
</nav>
<!--Termina la parte del banner-->
<!--Inicia la parte del menú-->
<!--sub-banner del menu de gategorias-->
<div class="container" id="main-conteint">
<div class="row main">
<!--Da el margin del div de afueroc con form-->
<div class="sub-container">
    <form role="form">
        <div class="form-group">
            <div class="text-center">
                <img  id="imgUsuarioActual" src="img/user.png" class="img-circle" onmouseover="this.width=70;this.height=70;" onmouseout="this.width=64;this.height=64;" width="64" height="64" paddin-top = "2%">
            </div>
            <h4 class="text-center" id="nombreVendedor"></h4>
            <div class="alert alert-success class midiv">
                <span class="label label-primary">Correo</span>
                <p id="EmailVendedor"></p>
            </div>
            <div class="alert alert-success class midiv">
                <span class="label label-primary">Usuario</span>
                <p id="usuarioVendedor">root</p>
            </div>
            <div class="alert alert-success class midiv">
                <span class="label label-primary">Contraseña</span>
                <span class="glyphicon glyphicon-eye-open" id="eye"></span>
                <input id="contrasenaVendedor" type="password" class="transparent-input"></input>
            </div>
            <div class="alert alert-success class midiv">
                <span class="label label-primary">Tipo Servicio</span>
                <p id="servicioVendedor"></p>
            </div>
            <div id="mapMain">
                <div id="map"></div>
                <ul id="geoData" class="list-group">
                    <li class="list-group-item">Direccion completa: <span id="location" ></span></li>
                    <li class="list-group-item">País: <span id="country"></span></li>
                </ul>
            </div>
            <div class="form-group">
                <div class="cols-sm-10">
                    <div class="carousel slide media-carousel" id="media">
                        <div class="carousel-inner" id="media">
                            <div class="item  active">
                                <div class="row">
                                    <div class="cols-sm-10">
                                        <a class="thumbnail" href="#"><img alt="" src="img/decision.jpg" width="150px" height="150px" ></a>
                                    </div>
                                </div>
                            </div>
                            <div class="item">
                                <div class="row">
                                    <div class="cols-sm-10">
                                        <a class="thumbnail" href=""><img alt="" src="http://placehold.it/150x150" width="150px" height="150px">    </a>
                                    </div>
                                </div>
                            </div>
                            <div class="item">
                                <div class="row">
                                    <div class="cols-sm-10">
                                        <a class="thumbnail" href=""><img alt="" src="http://placehold.it/150x150" width="150px" height="150px"></a>
                                    </div>
                                </div>
                            </div>
                            <div class="item">
                                <div class="row">
                                    <div class="cols-sm-10">
                                        <a class="thumbnail" href="#"><img alt="" src="http://placehold.it/150x150" width="150px" height="150px"></a>
                                    </div>
                                </div>
                            </div>
                            <div class="item">
                                <div class="row">
                                    <div class="cols-sm-10">
                                        <a class="thumbnail" href=""><img alt="" src="http://placehold.it/150x150" width="150px" height="150px">   </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <a data-slide="prev" href="#media" class="left carousel-control">‹</a>
                        <a data-slide="next" href="#media" class="right carousel-control">›</a>
                    </div>
                </div>
            </div>
            <h1 class="components" text-align ="center">
            <button type="button" class=" btn btn-primary" id="btnEditar"><img src="img/edit.png" onmouseover="this.width=70;this.height=70;" onmouseout="this.width=64;this.height=64;" width="64" height="64">
            </button>
            <button type="button" class=" btn btn-primary" id="btnMisProductos"><img src="img/editProuct.png" onmouseover="this.width=70;this.height=70;" onmouseout="this.width=64;this.height=64;" width="64" height="64">
            </button>
            </h1>
        </div>
    </form>
</div>
</div>
</div>
<!--Termina la parte del contenido -->
<footer id="footer-Section">
<!--footer es la etiqueta que indica el pie de página-->
<div class="footer-top-layout">
<div class="container">
    <div class="row">
        <div class="mi-informacion">
            <h4>NUESTRA INFORMACIÓN</h4>
            <p>Estamos para servirle</p>
            <!--bloque del pie de pagina-->
            <div class="post-blog-date">--------------------</div>
        </div>
        <div class=" col-lg-8 col-lg-offset-2" id="midive">
            <div class="col-sm-4">
                <div class="footer-col-item">
                    <!--footer-col-item divide en un pequeño contenedor el pie de página-->
                    <h4>Dirección local</h4>
                    <address>
                        Barrio Maracana, San Carlos<br>
                        Quesado 200m sur regional,
                    </address>
                </div>
            </div>
            <div class="col-sm-4">
                <div class="footer-col-item">
                    <h4>Teléfonos</h4>
                    <address>
                        50661250382<br>
                        24711733
                    </address>
                </div>
            </div>
            <div class="col-sm-4">
                <div class="footer-col-item">
                    <h4>Correos</h4>
                    <address>
                        2011.peswainer.1996@gmail.com<br>
                        R&Bcompany@gmail.com
                    </address>
                </div>
            </div>
        </div>
    </div>
</div>
</div>
<div class="footer-bottom-layout">
<div class="socialMedia-footer">
    <a href="https://youtube.com"><img src="img/youtube.png" onmouseover="this.width=150;this.height=150;" onmouseout="this.width=128;this.height=128;" width="128" height="128"></a>
    <a href="https://www.facebook.com/wainer.rodriguez"><img src="img/facebook.png" onmouseover="this.width=150;this.height=150;" onmouseout="this.width=128;this.height=128;" width="128" height="128"></a>
    <a href="https://www.twitter.com"><img src="img/twitter.png" onmouseover="this.width=150;this.height=150;" onmouseout="this.width=128;this.height=128;" width="128" height="128"></a>
    <a href="https://www.whatsapp.com"><img src="img/whatsapp.png" onmouseover="this.width=150;this.height=150;" onmouseout="this.width=128;this.height=128;" width="128" height="128"></a>
    <a href="https://www.pinteres.com"><img src="img/pinterest.png" onmouseover="this.width=150;this.height=150;" onmouseout="this.width=128;this.height=128;" width="128" height="128"></a>
</div>
<div class="copyright-tag">create by Wainer Rodríguez Bonilla.</div>
</div>
</footer>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
<script src="js/bootstrap.min.js"></script>
<script type="text/javascript" src="js/verPerfilEmpresa.js"></script>
</body>
</html>