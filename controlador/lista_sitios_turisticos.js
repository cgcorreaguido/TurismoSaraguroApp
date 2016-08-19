$('#page_lista_sitios_turisticos').live('pageshow', function(event) {
	$(document).ready(function(){
		
		var id_tipo_turistico = getUrlVars()["id_tipo_turistico"];
		
	   
	   //alert('INRESO: EL ID TIPO TURISTICO: '+id_tipo_turistico);
	   
	   //var url='http://localhost/turismo/';
	   var url='http://www.xnet.net.ec/turismo/';
	
	
		
		//$.getJSON("http://localhost/turismo/index.php/admin/sitio_turistico/leer_sitios_turisiticos_by_id_tipo_turistico_json",
		//$.getJSON("http://www.xnet.net.ec/turismo/index.php/admin/sitio_turistico/leer_sitios_turisiticos_by_id_tipo_turistico_json",
		$.getJSON(url+"/index.php/admin/sitio_turistico/leer_sitios_turisiticos_by_id_tipo_turistico_json",
			{ id_tipo_turistico: id_tipo_turistico },
		    function(data){
		    	//alert('INGRESO ID TIPO TURISTICOOOO: '+id_tipo_turistico);
		    	var cont=0;
		        $.each(data, function(i,item){
		        	
		        	var nombre=item.sitio_nombre;
		        	var descripcion=item.sitio_descripcion;
		        	var foto=item.sitio_foto1;
		        	var latitud=item.sitio_latitud;
		        	var longitud=item.sitio_altitud;
		        	
		        	var direcciones='direcciones'+cont;
		        	var mapa='mapa'+cont;
		        	var latitud_destino='latitud_destino'+cont;
		        	var longitud_destino='longitud_destino'+cont;

		        	//alert(direcciones);
	            	
	            	//var aux = '<li><a href="akivaurla.html?id_notificacion='+item.id_nad+'"> '+sms+' </br></a></li>';
	            	var aux = '<h4 class="help"><b>'+nombre+'</h4>'+
						'<div data-role="collapsible-set">'+
							'<div data-role="collapsible" data-collapsed="true" data-theme="a" data-content-theme="b">'+
								'<h3>Imagen</h3>'+
								'<center>'+
									'<img src="'+url+foto+'" height="35%" width="40%">'+
								'</center>'+
							'</div>'+

							'<div data-role="collapsible" data-collapsed="true" data-theme="a" data-content-theme="b">'+
								'<h3>Descripcion</h3>'+
								'<center>'+
									'<p>'+descripcion+'</p>'+
								'</center>'+
							'</div>'+
							'<div data-role="collapsible" data-collapsed="true" data-theme="a" data-content-theme="b">'+
								'<h3>Itinerario</h3>'+
								'<center>'+
								'<div id="'+direcciones+'" style="width: 275px">RUTA TURISTICA</div>'+
								'<input type="text" id="'+latitud_destino+'" value="'+latitud+'"/>'+
								'<input type="text" id="'+longitud_destino+'" value="'+longitud+'"/>'+
								'</center>'+
							'</div>'+

							'<div data-role="collapsible" data-collapsed="true" data-theme="a" data-content-theme="b">'+
								'<h3>Mapa</h3>'+
								'<center>'+
								'<div id="'+mapa+'" style="width: 100%; height: 500px"></div>'
								'<p>aki va el mapa</p>'+
								'</center>'+
							'</div>'+
						'</div>';
            	

	            	$('#contenedor_lista_sitios_turisticos').append(aux);

	            	cont=cont+1;
	            	
 
		    	});
		    	$('#contenedor_lista_sitios_turisticos').trigger('refresh');
			    $('#contenedor_lista_sitios_turisticos').trigger('create');
	            $('#contenedor_lista_sitios_turisticos').listview('refresh');
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