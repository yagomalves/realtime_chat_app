<?php
    $conn = mysqli_connect("localhost", "root", "Lineage2*", "chat");
    if(!$conn) {
        echo "Database connected" . mysqli_connect_error();
    }