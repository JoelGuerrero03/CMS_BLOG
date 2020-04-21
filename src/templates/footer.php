<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>
    <?php
            $archivo = basename($_SERVER['PHP_SELF']);
            $pagina = str_replace(".php", "", $archivo);
            if($pagina == 'index'){
              echo '<script src="../../../CMS_BLOG/src/js/header.js"></script>';
            } else if($pagina == 'blog'){
              echo '<script src="../../../CMS_BLOG/src/js/blog.js"></script>';
            } else if($pagina == 'pagina1Blog'){
            echo '<script src="../../../CMS_BLOG/src/js/pagina1Blog.js"></script>';
          }  
    ?>
</body>
</html>