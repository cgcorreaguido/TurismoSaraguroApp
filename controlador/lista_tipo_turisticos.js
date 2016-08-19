$('#page_lista_tipo_turisticos').live('pageshow', function(event) {
	$(document).ready(function(){
		
		//var id_docente = getUrlVars()["id_docente"];
		
	   //alert("hola");
	
		
	  //var url='http://localhost/turismo/';
	  var url='http://www.xnet.net.ec/turismo/';


		//$.getJSON("http://localhost/turismo/index.php/admin/sitio_turistico/leer_tipos_sitios_turisticos_json",
		//$.getJSON("http://www.xnet.net.ec/turismo/index.php/admin/sitio_turistico/leer_tipos_sitios_turisticos_json",
		$.getJSON(url+"/index.php/admin/sitio_turistico/leer_tipos_sitios_turisticos_json",
		

		    function(data){
		    	//alert("aki");
		        $.each(data, function(i,item){
		        	
		        	var nombre=item.tipo_nombre;
		        	var id_tipo_turistico=item.id_tipo_turistico;
	            	//alert(sms);
	            	//alert(item.id_tipo_turistico);

	            	var aux = '<li><a href="lista_sitios_turisticos.html?id_tipo_turistico='+id_tipo_turistico+'">'+nombre+' </br></a></li>';
	            	
            		$('#id_lista_tipo_turisticos').append(aux);

		            
		    	});
		    	$('#contenedor_list').trigger('refresh');
			    $('#contenedor_list').trigger('create');
	            $('#id_lista_tipo_turisticos').listview('refresh');
        	});



		
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