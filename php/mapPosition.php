<script>
    window.onload = function () {
        cargarDbMapa();
    }
    var ltt = parseFloat('<?php echo $tpLatitud; ?>');
    var lgg = parseFloat('<?php echo $tpLongitud; ?>');
    function cargarDbMapa() {
        var myLatLng = {lat: ltt, lng: lgg};
        var map = new google.maps.Map(document.getElementById('map'), {
            zoom: 14,
            center: myLatLng
        });
        var marker = new google.maps.Marker({
            position: myLatLng,
            map: map,
            title: 'Ubicación'
        });
    }

</script>

