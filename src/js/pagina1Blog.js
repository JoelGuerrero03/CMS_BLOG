document.body.onload = pagina1Blog;


function pagina1Blog() {
    let contenedor = document.createElement("div");
    contenedor.classList.add("container");
    let etiquetaA = document.createElement("a");
    let parrafo = document.createElement('h1');
    parrafo.innerHTML = "Logotipo";
    etiquetaA.appendChild(parrafo);
    contenedor.appendChild(etiquetaA);

    document.body.appendChild(contenedor);
    document.querySelector('a').setAttribute('href', '../../../CMS_BLOG/index.php');


}