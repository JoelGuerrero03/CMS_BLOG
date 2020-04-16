document.body.onload = blogElement;

function blogElement() {
    let contenedor = document.createElement("div");
    contenedor.classList.add("container");
    let etiquetaA = document.createElement("a");
    let parrafo = document.createElement('h1');
    //le agregamos al parrafo lo que va decir
    parrafo.innerHTML = "Logotipo";
    //le agregamos el parrafo al boton
    etiquetaA.appendChild(parrafo);
    contenedor.appendChild(etiquetaA);
    document.body.appendChild(contenedor);

    document.querySelector('a').setAttribute('href', '../../../CMS_BLOG/index.php');

    // etiquetaA.click = () => {
    //     window.location.href = "../../../CMS_BLOG/index.php";
    // }
}