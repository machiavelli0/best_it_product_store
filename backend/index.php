<?php
header('Content-Type: application/json');

// Simulierte Datenbankabfrage
$products = json_decode(file_get_contents('../data/products.json'), true);

echo json_encode($products);
?>
