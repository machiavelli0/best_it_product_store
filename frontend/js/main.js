$(document).ready(function () {
	
	// Daten vom PHP-Backend abrufen und Produkte anzeigen
	function loadProducts() {
		$.ajax({
			url: '../backend/index.php',
			method: 'GET',
			dataType: 'json',
			success: function (data) {
				displayProducts(data);
			},
			error: function (error) {
				console.error('Fehler beim Abrufen der Produktdaten:', error);
			}
		});
	}

    // Funktion zum Anzeigen der Produkte
    function displayProducts(products) {
        const productList = $('#productList');
        productList.empty();

        products.forEach(function (product) {
            const productDiv = $('<div class="product">');
            productDiv.append('<img src="' + product.image + '" alt="' + product.name + '">');
            productDiv.append('<div class="infos">');
			productDiv.append('<p>Art-Nr: ' + product.articleNumber + '</p>');
            productDiv.append('<p>Name: ' + product.name + '</p>');
            productDiv.append('<p>Beschreibung: ' + product.description + '</p>');
            productDiv.append('<p>Preis: ' + product.price + '€</p>');
			productDiv.append('</div>');

            productList.append(productDiv);
        });
    }

    // Login-Formular
    $('#loginForm').submit(function (e) {
        e.preventDefault(); 

        const username = $('#usernameInput').val();
        const password = $('#passwordInput').val();

        // Überprüfen Sie die Anmeldeinformationen
        if (username === 'bestit' && password === 'ente') {
            // Anmeldung erfolgreich
            alert('Login erfolgreich!');
			loadProducts();
            $('#loginForm').hide(); // Verstecken Sie das Login-Formular
        } else {
            // Anmeldung fehlgeschlagen
            alert('Falsche Anmeldeinformationen. Bitte erneut versuchen.');
        }
    });
});
