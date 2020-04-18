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
    imagen3.setAttribute("src", "../../../CMS_BLOG/src/assets/img/hacking.jpg");
    articulo3.appendChild(imagen3);
    let titulo3 = document.createElement('h3');
    titulo3.innerHTML = "Hacking";
    articulo3.appendChild(titulo3);
    let parrafo3 = document.createElement('p');
    parrafo3.innerHTML = 'Cuando se habla sobre“ Hacking” o se menciona la palabra“ Hacker” normalmente se suele pensar en alguien que tiene profundos conocimientos sobre máquinas que realizan funciones de computo y que, además, son personas que realizan cosas“ imposibles” para el resto de mortales, habitualmente también se relacionan con personas que se dedican a realizar estafas a gran escala sobre bancos y / o grandes multinacionales, eso para la sociedad moderna, es un hacker.Aunque las líneas anteriores resulten molestas y muy desagradables, la realidad es que la cultura del Hacking se encuentra distorsionada por la sociedad y se ha ido perdiendo poco a poco la esencia de lo que significa realmente la palabra“ Hacker.';
    articulo3.appendChild(parrafo3);
    //articulo 4
    let articulo4 = document.createElement('div');
    articulo4.classList.add('col-6');
    articulos.appendChild(articulo4);
    let imagen4 = document.createElement('img');
    imagen4.classList.add('col-12');
    imagen4.setAttribute("src", "../../../CMS_BLOG/src/assets/img/covid-19.jpg");
    articulo4.appendChild(imagen4);
    let titulo4 = document.createElement('h3');
    titulo4.innerHTML = "Covid-19";
    articulo4.appendChild(titulo4);
    let parrafo4 = document.createElement('p');
    parrafo4.innerHTML = 'El patógeno se detectó en Wuhan, China, el pasado diciembre y hasta este 20 de marzo, la Organización Mundial de la Salud (OMS) contabilizaba más de 209.000 casos de personas enfermas a causa del virus y más de 8.700 muertes.Esta palabra se refiere a toda una familia de virus, la de los coronavirus, que se llaman así porque sus membranas tienen puntas en forma de corona. Se trata de una familia de virus muy antigua. El estudio "Un caso para el origen antiguo de los coronavirus", publicado en 2013 en el Journal of Virology, dice que el ancestro común más reciente de estos virus tiene unos 10.000 años, pero que es probable que las primeras versiones de los coronavirus hayan existido durante millones de años.';
    articulo4.appendChild(parrafo4);
    //articulo 5
    let articulo5 = document.createElement('div');
    articulo5.classList.add('col-6');
    articulos.appendChild(articulo5);
    let imagen5 = document.createElement('img');
    imagen5.classList.add('col-12');
    imagen5.setAttribute("src", "../../../CMS_BLOG/src/assets/img/programacion.jpg");
    articulo5.appendChild(imagen5);
    let titulo5 = document.createElement('h3');
    titulo5.innerHTML = "Programación";
    articulo5.appendChild(titulo5);
    let parrafo5 = document.createElement('p');
    parrafo5.innerHTML = 'La programación informática es el proceso por medio del cual se diseña, codifica, limpia y protege el código fuente de programas computacionales. A través de la programación se dictan los pasos a seguir para la creación del código fuente de programas informáticos. De acuerdo con ellos el código se escribe, se prueba y se perfecciona. El objetivo de la programación es la de crear software, que después será ejecutado de manera directa por el hardware de la computadora, o a través de otro programa.';
    articulo5.appendChild(parrafo5);
    //articulo 6
    let articulo6 = document.createElement('div');
    articulo6.classList.add('col-6');
    articulos.appendChild(articulo6);
    let imagen6 = document.createElement('img');
    imagen6.classList.add('col-12');
    imagen6.setAttribute("src", "../../../CMS_BLOG/src/assets/img/codigoBinario.jpg");
    articulo6.appendChild(imagen6);
    let titulo6 = document.createElement('h3');
    titulo6.innerHTML = "Codigo Binario";
    articulo6.appendChild(titulo6);
    let parrafo6 = document.createElement('p');
    parrafo6.innerHTML = 'Se denomina como código binario al sistema de representación de textos, imágenes o vídeos de los que se valen los ordenadores o las computadoras para procesar instrucciones. Para que el código binario pueda llevar a cabo su función debe hacer uso del sistema binario, que es un sistema de numeración que posee únicamente los dígitos o bits cero (0) y uno (1), con los cuales se pueden representar infinidad de códigos.';
    articulo6.appendChild(parrafo6);
    //footer
    let footer = document.createElement('footer');
    footer.classList.add('footer');
    let parrafoFoter = document.createElement('p');
    parrafoFoter.innerHTML = 'Inovix @logotipo 2020';
    footer.appendChild(parrafoFoter);















    document.body.appendChild(contenedor);
    document.body.appendChild(footer);
    document.querySelector('a').setAttribute('href', '../../../CMS_BLOG/index.php');








}