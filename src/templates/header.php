<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Blog </title>
    <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400&family=Roboto:wght@400;500;700&family=Turret+Road&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://necolas.github.io/normalize.css/8.0.1/normalize.css">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css">
    <link rel="stylesheet" href="../../../CMS_BLOG/src/css/componentes.css">

    <?php
            $archivo = basename($_SERVER['PHP_SELF']);
            $pagina = str_replace(".php", "", $archivo);
            if($pagina == 'index'){
              echo ' <link rel="stylesheet" href=".../../../CMS_BLOG/src/css/header.css">';
            } 
    ?>
</head>
<body>