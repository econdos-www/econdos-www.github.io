var gmaps = {
	map: null,
	points: null,
	infowindows: null,

	init: function(){
		var that = gmaps;
		that.infowindows = [];
		that.points = [
		    {
		    	"id": 1,
		        "lat": -23.5453209,
		        "lng": -46.311625,
		        "name": "ProAtiva",
		        "address": "Rua Manoel Teixeira, 31.",
				"neighborhood": "Parque Maria Helena",
				"build": "Loja",
				"city": "Suzano - SP. Brasil",
		        "phone": "55 11 4742 5836",
		        "email": "contato@alpserv.com.br"
		    }
		];

		var latlng = new google.maps.LatLng(-23.5453209, -46.311625);	 

	    var options = {
	        zoom: 14,
	        center: latlng,
	        mapTypeId: google.maps.MapTypeId.ROADMAP,
	        scrollwheel: false
	    };		

	    that.map = new google.maps.Map(document.getElementById("map"), options);


	    $.each(that.points, function(index, point) {
	        var marker = new google.maps.Marker({
	            position: new google.maps.LatLng(point.lat, point.lng),
	            title: point.name,
	            map: that.map,
	    		icon: "img/map_icon.png",
	        });

	        that.infowindows[point.id] = new google.maps.InfoWindow();

			that.infowindows[point.id].marker = marker;

			that.infowindows[point.id].listener = google.maps.event.addListener(marker, 'click', function (e) {
				that.showInfowindow(point.id);
			});		 
	    });

		that.showInfowindow(0);

	},

	showInfowindow: function(id){

		var that = this;
		var point = that.points[0];
		
		var title = point.name
		$('#map_detail_title').html(title);
		
		var headquarter =
			'' + point.address + '</br>' + point.neighborhood + '</br>' + 
			point.build + '</br>' + point.city;
		$('#map_detail_headquarter span').html(headquarter);
		
		var telephone = point.phone;
		$('#map_detail_telephone  span').html(telephone);
		
		var mail = point.email;
		$('#map_detail_mail span').html(mail);

		$('#map_detail').fadeIn();
    	that.closeAllInfowindows();
		

	},

	closeAllInfowindows: function(){

		var that = this;
		that.infowindows.forEach(function(infowindow) {
		    infowindow.close();
		});

	},
}


function close_map_detail(){
	$('#map_detail').fadeOut();
}
