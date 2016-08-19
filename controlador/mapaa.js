$('#page_mapaa').live('pageshow', function(event) {
	$(document).ready(function(){
		
		alert("hola");

		var id_tipo_turistico = getUrlVars()["id_tipo_turistico"];
		
	   
	   //alert('ID TIPO TURISTICO: '+id_tipo_turistico);
	
	
		$.getJSON("http://localhost/sitio_turistico/lista_sitios_turisticos.php",
			{ id_tipo_turistico: id_tipo_turistico },
		    function(data){
		    	alert('ID TIPO TURISTICO: '+id_tipo_turistico);
		    	var cont=0;
		        $.each(data, function(i,item){
		        	
		        	var nombre=item.sitio_nombre;
		        	var descripcion=item.sitio_descripcion;
		        	var foto=item.sitio_foto;
		        	var latitud=item.mapa_latitud;
		        	var longitud=item.mapa_longitud;
		        	
		        	
	            	
	            	//var aux = '<li><a href="akivaurla.html?id_notificacion='+item.id_nad+'"> '+sms+' </br></a></li>';
	            	//var aux = '<h4 class="help"><b>'+nombre+'</h4>';

	            	$('#map_canvas').gmap({ 'center': new google.maps.LatLng(-3.975032, -79.201980) });
					//$('#map_canvas').gmap('addMarker', { 'position': new google.maps.LatLng(-3.974983, -79.202149) } );
					$('#map_canvas').gmap('addMarker', { 'position':  '-3.975032, -79.201980', 'bounds': true }).click(function() {
                		$('#map_canvas').gmap('openInfoWindow', { 'content': '<center>Conservatorio de Música Salvador Bustamante Celi<br><img src="img/rutas/conservatorio_salvador_bustamante_celi.jpg" height="150" width="150"></center>' }, this);
        			});
            
	            	
 
		    	});
		    	$('#id_contenedor_lista_sitios_mapas').trigger('refresh');
			    $('#id_contenedor_lista_sitios_mapas').trigger('create');
	            $('#id_contenedor_lista_sitios_mapas').listview('refresh');
        	})

		
		function getUrlVars() {
		    var vars = [], hash;
		    var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
		    for(var i = 0; i < hashes.length; i++)
		    {
		        hash = hashes[i].split('=');
		        vars.push(hash[0]);
		        vars[hash[0]] = hash[1];
		    }
		    return vars;
		}
		
	});
});