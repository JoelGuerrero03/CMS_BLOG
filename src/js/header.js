document.body.onload = headerElement;

function headerElement() {
    // Creamos el div 1
    var div1 = document.createElement("div");
    //agregamos la clase al div 1
    div1.classList.add("background");
    // Creamos el div 2
    var div2 = document.createElement("div");
    //agregamos la clase al div 2
    div2.classList.add("transbox");
    // agregamos el div 2 al div 1
    div1.appendChild(div2);
    //mandamos al dom la creacion de los div
    document.body.appendChild(div1);
    //crear h1
    var h1 = document.createElement("h1");
    // Añadir el nodo Text como hijo del nodo tipo Element
    h1.innerHTML = "LOGOTIPO"
        //agrega al div 2 el h1 
    div2.appendChild(h1);
    //creamos el boton
    let boton = document.createElement("button");
    //agregamos la clase al boton
    boton.classList.add("btn");
    //agregamos el boton al div 2
    div2.appendChild(boton);
    //creamos un parrafo 
    let parrafo = document.createElement('p');
    //le agregamos al parrafo lo que va decir
    parrafo.innerHTML = "Ir al blog";
    //le agregamos el parrafo al boton
    boton.appendChild(parrafo);

    //redirigimos la pagina a donde estan todos los blog
    boton.onclick = () => {
        window.location = "../../../CMS_BLOG/blog.php";
    };
}