new Vue({
	el: '#app',
	data: {
		dulces: [
			{
				'dulce': 100,
				'nombre': 'Picadas comunero',
				'precio': '7700'
			},
			{
				'dulce': 200,
				'nombre': 'Bon Bon Bum',
				'precio': '4500'
			},
			{
				'dulce': 300,
				'nombre': 'Choclitos',
				'precio': '8800'
			},
			{
				'dulce': 400,
				'nombre': 'Galleta festival',
				'precio': '3900'
			},
			{
				'dulce': 500,
				'nombre': 'Trululu retro clasica',
				'precio': '3200'
			},
			{
				'dulce': 600,
				'nombre': 'Chocobreak',
				'precio': '5200'
			},
			{
				'dulce': 700,
				'nombre': 'Panelitas',
				'precio': '3200'
			},
			{
				'dulce': 800,
				'nombre': 'Jumbo',
				'precio': '33000'
			}

		],

		factura: {
			dulceSeleccionado: {
				dulce: '',
				cantidad: 0
			},
		dulcesAgregados: []
		},
		total: 0
	},
	methods: {
		infoProductoSeleccionado: function () {
			var dulce = this.factura.dulceSeleccionado.dulce;

			if (dulce) {
				info = this.dulces.find(function (lista) {
					if (lista.dulce == dulce) {
						return lista;
					}
				});

				this.factura.dulceSeleccionado.nombre = info.nombre;
				this.factura.dulceSeleccionado.precio = info.precio;
			}
		},

		agregarALista: function () {
			var dulceSeleccionado = this.factura.dulceSeleccionado,
				existe = this.factura.dulcesAgregados.find(function (el) {
					return el.dulce == dulceSeleccionado.dulce;
				});

			if (!existe) {
				this.factura.dulcesAgregados.push({
					dulce: dulceSeleccionado.dulce,
					nombre: dulceSeleccionado.nombre,
					precio: dulceSeleccionado.precio,
					cantidad: dulceSeleccionado.cantidad
				});
				this.calcularTotal();
			}
		},

		calcularTotal: function () {
			if (this.factura) {

				let self = this;

				this.factura.dulcesAgregados.forEach(function (el) {
					self.total += el.cantidad * el.precio;

				});
				console.log("total " + this.total);

			}
		}

	}, filters: {
		calcularIva: function (precio) {
			return (precio * 0.19) + precio
		}
	}
});