<?php

header('Content-Type: text/event-stream');
header('Cache-Control: no-cache');

$data_baharu = rand(0,56);
echo "data: $data_baharu";
flush();

?>