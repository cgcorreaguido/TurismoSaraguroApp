$('#page_lista_servicios').live('pageshow', function(event) {
	$(document).ready(function(){
		
		var id_tipo_servicio = getUrlVars()["id_tipo_servicio"];
		
	   
	   //alert('ID TIPO SERVICIO: '+id_tipo_servicio);
		//alert("aki");
	   

	  //var url='http://localhost/turismo/';
	  var url='http://www.xnet.net.ec/turismo/';
	  
	   	var cont=0;
		    	var direcciones='';
		        var mapa='';
		        var latitud_destino='';
		        var longitud_destino='';
	   //var url='http://www.xnet.net.ec/turismo/';
	
	
		
		//$.getJSON("http://localhost/turismo/index.php/admin/servicio/leer_servicios_by_id_tipo_servicio_json",
		//$.getJSON("http://www.xnet.net.ec/turismo/index.php/admin/servicio/leer_servicios_by_id_tipo_servicio_json",
		$.getJSON(url+"/index.php/admin/servicio/leer_servicios_by_id_tipo_servicio_json",
			{ id_tipo_servicio: id_tipo_servicio },
		    function(data){
		    	//alert('INGRESO ID TIPO TURISTICOOOO: '+id_tipo_servicio);
		    	//alert('data: '+data);
		    	

		        $.each(data, function(i,item){
		        	
		        	var nombre=item.servicio_nombre;
		        	var descripcion=item.servicio_descripcion;
		        	var foto=item.servicio_foto1;
		        	var latitud=item.servicio_latitud;
		        	var longitud=item.servicio_altitud;

		        	direcciones='direcciones'+cont;
		        	mapa='mapa'+cont;
		        	latitud_destino='latitud_destino'+cont;
		        	longitud_destino='longitud_destino'+cont;

		        	alert(direcciones);
	            	
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
								'<input type="hidden" id="'+latitud_destino+'" value="'+latitud+'"/>'+
								'<input type="hidden" id="'+longitud_destino+'" value="'+longitud+'"/>'+
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
            	

	            	$('#contenedor_lista_servicios').append(aux);

	            	cont=cont+1;
	            	
 
		    	});
		    	$('#contenedor_lista_servicios').trigger('refresh');
			    $('#contenedor_lista_servicios').trigger('create');
	            $('#contenedor_lista_servicios').listview('refresh');
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