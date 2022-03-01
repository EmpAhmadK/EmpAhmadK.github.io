<?php

header('Content-Type: application/json');

$data = [
	'keputusanBL' => (time() % 10000) * 3
];

echo json_encode($data);
