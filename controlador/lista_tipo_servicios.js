$('#page_lista_tipo_servicio').live('pageshow', function(event) {
	$(document).ready(function(){
		
		//var id_docente = getUrlVars()["id_docente"];


		//var url='http://localhost/turismo/';
	   var url='http://www.xnet.net.ec/turismo/';

		
		//$.getJSON("http://localhost/turismo/index.php/admin/servicio/leer_tipos_servicios_json",
		//$.getJSON("http://www.xnet.net.ec/turismo/index.php/admin/servicio/leer_tipos_servicios_json",
		$.getJSON(url+"/index.php/admin/servicio/leer_tipos_servicios_json",

		    function(data){
		    	
		        $.each(data, function(i,item){
		        	
		        	var nombre=item.tipo_servicio_nombre;
		        	var id_tipo_servicio=item.id_tipo_servicio;
	            	
	            	//alert(item.id_tipo_turistico);

	            	var aux = '<li><a href="lista_servicios.html?id_tipo_servicio='+id_tipo_servicio+'">'+nombre+' </br></a></li>';
	            	
            		$('#id_lista_tipo_servicio').append(aux);

		            
		    	});
		    	$('#contenedor_list').trigger('refresh');
			    $('#contenedor_list').trigger('create');
	            $('#id_lista_tipo_servicio').listview('refresh');
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