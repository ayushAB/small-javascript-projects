$(document).ready(function() {

	var sc = $('#seat-map').seatCharts({
		map: [
			'aaaaaa__DDDDD',
	'aaaaaa__aaaaa',
	'aaaaaa__aaaaa',
	'bbbbbb__bbbbb',
	'bbbbbb__bbbbb',
	'bbbbbb__bbbbb',
	'ccccccccccccc'
		],
		seats: {
			a: {
				price   : 99.99,
				classes : 'front-seat' //your custom CSS class
			}
		
		},
		legend : {
			node : $('#legend'),
			items : [
				[ 'f', 'available',   'First Class' ],
				[ 'e', 'available',   'Economy Class'],
				[ 'f', 'unavailable', 'Already Booked']
			]					
		},
		naming  : {
			top    : false,
			left   : false,
			getLabel : function (character, row, column) {
			     return '';
			}
			
		},
		click: function () {
			if (this.status() == 'available') {
				//do some stuff, i.e. add to the cart
				
				return 'selected';
			} else if (this.status() == 'selected') {
				//seat has been vacated
				return 'available';
			} else if (this.status() == 'unavailable') {
				//seat has been already booked
				return 'unavailable';
			} else {
				return this.style();
			}
		}
	});

	//Make all available 'c' seats unavailable
	sc.find('c.available').status('unavailable');
	
	/*
	Get seats with ids 2_6, 1_7 (more on ids later on),
	put them in a jQuery set and change some css
	*/
	console.log(sc.get(['2_6', '1_5']));
	sc.get(['2_6', '1_5']).node().css({
		color: 'blue',background: '#ff0000'
	});
	
	console.log('Seat 1_2 costs ' + sc.get('1_2').data().price + ' and is currently ' + sc.status('1_2'));

});