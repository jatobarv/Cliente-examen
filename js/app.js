(function () {

    if ('serviceWorker' in navigator) {
        navigator.serviceWorker
            .register('./service-worker.js')
            .then(function () {
                console.log('Service Worker Registered');
            });
    }
})();

(function () {
    var app = {
/*         productoColorFilter: document.getElementById("productoColorFilter"),
 */        productoList: [],
/*         localList: [],
 */    }

    var loadData = function () {
        var xhttp = new XMLHttpRequest();
        var url = "https://cduranf1.pythonanywhere.com/productos/";

        xhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                console.log(this.responseText);
                var data = JSON.parse(this.responseText);
                displayProductos(data.results);
                app.productoList = data.results;
            }
        }
        xhttp.open('GET', url, true);
        xhttp.send();
    }

    var displayProductos = function (productos) {
        var productosContainer = document.getElementById("productosContainer");
        productosContainer.innerHTML = "";

        for (let producto of productos) {
            var productoContainer = document.createElement("div");
            var card = document.createElement("div");
            var cardBody = document.createElement("div");
            var txtproductoName = document.createElement("h3");
            var imgProducto = document.createElement("img");
            var txtProductoDescripcion = document.createElement("p");
            var txtProductoPrecio = document.createElement("p");
            var txtProductoTipo = document.createElement("p");
            productoContainer.className = "col-lg-4 col-md-6 mb-4";
            card.className = "card h-100";
            cardBody.className = "card-body";
            imgProducto.className = "card-img-top";
            imgProducto.src = producto.imageUrl;
            imgProducto.alt = producto.nombre;
            txtProductoDescripcion.innerHTML = producto.descripcion;
            txtProductoPrecio.innerHTML = "<b>$: </b>" + producto.precio;
            txtProductoTipo.innerHTML = "<b>Tipo Producto: </b>" + producto.tipo;
            txtproductoName.className = "card-title";
            txtproductoName.innerHTML = '<a href="#">' + producto.nombre + '</a>';
            // Agregar los hijos correspondientes\
            productoContainer.appendChild(card);
            card.appendChild(imgProducto);
            card.appendChild(cardBody);
            cardBody.appendChild(txtproductoName);
            cardBody.appendChild(txtProductoDescripcion);
            cardBody.appendChild(txtProductoPrecio);
            cardBody.appendChild(txtProductoTipo);
            // Agregar el contenedor al documento
            productosContainer.appendChild(productoContainer);
        }
    }
    /* if (navigator.onLine) {
        app.productoColorFilter.addEventListener("change", function (e) {
            var filteredProductos = app.productoList.filter(function (producto) {
                if (producto.tipo == app.productoColorFilter.value || app.productoColorFilter.value == "TODOS") {
                    return product;
                    localStorage.setItem('productos', producto);
                }
            });
            displayProductos(filteredProductos);
        });
        loadData();
    } else {
        displayProductos(JSON.parse(localStorage.getItem('productos')));
    }

    app.productoColorFilter.addEventListener("change", function (e) {
        var filteredProductos = app.productoList.filter(function (producto) {
            if (producto.estado == app.productoColorFilter.value) {
                return producto;
            }
        });
        displayProductos(filteredProductos);
    });

 */
    loadData();
})();
