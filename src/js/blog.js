document.body.onload = blogElement;

function blogElement() {
    let contenedor = document.createElement("div");
    contenedor.classList.add("container");
    let etiquetaA = document.createElement("a");
    let parrafo = document.createElement('h1');
    parrafo.innerHTML = "Logotipo";
    etiquetaA.appendChild(parrafo);
    contenedor.appendChild(etiquetaA);
    let articulos = document.createElement('div');
    articulos.classList.add('row');
    contenedor.appendChild(articulos);
    //articulo 1
    let articulo1 = document.createElement('div');
    articulo1.classList.add('col-6');
    articulos.appendChild(articulo1);
    let imagen1 = document.createElement('img');
    imagen1.classList.add('col-12');
    imagen1.setAttribute("src", "../../../CMS_BLOG/src/assets/img/artificial-intelligence-3382507_1920.jpeg");
    articulo1.appendChild(imagen1);
    let titulo1 = document.createElement('h3');
    titulo1.innerHTML = "Inteligencia Artificial";
    articulo1.appendChild(titulo1);
    let parrafo1 = document.createElement('p');
    parrafo1.innerHTML = "La Inteligencia Artificial (IA) es la combinación de algoritmos planteados con el propósito de crear máquinas que presenten las mismas capacidades que el ser humano. Una tecnología que todavía nos resulta lejana y misteriosa, pero que desde hace unos años está presente en nuestro día a día a todas horas.";
    articulo1.appendChild(parrafo1);
    //articulo 2
    let articulo2 = document.createElement('div');
    articulo2.classList.add('col-6');
    articulos.appendChild(articulo2);
    let imagen2 = document.createElement('img');
    imagen2.classList.add('col-12');
    imagen2.setAttribute("src", "../../../CMS_BLOG/src/assets/img/cienciaFiccion.jpeg");
    articulo2.appendChild(imagen2);
    let titulo2 = document.createElement('h3');
    titulo2.innerHTML = "Ciencia ficción";
    articulo2.appendChild(titulo2);
    let parrafo2 = document.createElement('p');
    parrafo2.innerHTML = "La Ciencia Ficción es un popular género literario, cuyo contenido gira en torno a hipotéticos logros científicos y técnicos que podrían sucederse en el futuro próximo, en tanto, es justamente esta cuestión científica que propone la que lo diferencia del género fantástico, en el cual las situaciones resultan ser el fruto de la imaginación.";
    articulo2.appendChild(parrafo2);
    //articulo 3
    let articulo3 = document.createElement('div');
    articulo3.classList.add('col-6');
    articulos.appendChild(articulo3);
    let imagen3 = document.createElement('img');
    imagen3.classList.add('col-12');
    imagen3.setAttribute("src", "../../../CMS_BLOG/src/assets/img/cienciaFiccion.jpeg");
    articulo3.appendChild(imagen3);
    let titulo3 = document.createElement('h3');
    titulo3.innerHTML = "Ciencia ficción";
    articulo3.appendChild(titulo3);
    let parrafo3 = document.createElement('p');
    parrafo3.innerHTML = "La Ciencia Ficción es un popular género literario, cuyo contenido gira en torno a hipotéticos logros científicos y técnicos que podrían sucederse en el futuro próximo, en tanto, es justamente esta cuestión científica que propone la que lo diferencia del género fantástico, en el cual las situaciones resultan ser el fruto de la imaginación.";
    articulo3.appendChild(parrafo3);







    document.body.appendChild(contenedor);
    document.querySelector('a').setAttribute('href', '../../../CMS_BLOG/index.php');








}