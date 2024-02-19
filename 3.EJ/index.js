//? 1.1 Basandote en el array siguiente, crea una lista ul > li  dinámicamente en el html que imprima cada uno de los paises.
const countries1 = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];

const ul = document.createElement("ul");
for (const countrie of countries1) {
	const li = document.createElement("li");
	li.textContent = countrie;
	ul.appendChild(li);
	}
document.body.appendChild(ul);

//? 1.2 Elimina el elemento que tenga la clase .fn-remove-me.
const eliminados = document.querySelectorAll(".fn-remove-me");
for (const eliminado of eliminados) {
	eliminado.remove();
}

//? 1.3 Utiliza el array para crear dinamicamente una lista ul > li de elementos en el div de html con el atributo data-function="printHere".
const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];

const ulCars = document.createElement("ul");
for (const car of cars) {
	const li = document.createElement("li");
	li.textContent = car;
	 li.setAttribute ("data-function", "print here");
	ulCars.appendChild(li);
	}
document.body.appendChild(ulCars);

//? 1.4 Crea dinamicamente en el html una serie de divs que contenga un elemento h4 para el titulo y otro elemento img para la imagen.
const countries2 = [
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1'}, 
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5'}
];

for (const countrie2 of countries2) {
	const div = document.createElement("div");
	const title = document.createElement("h4");
	const img = document.createElement("img");

	title.textContent =countrie2.title;
	img.src =countrie2.imgUrl;

	div.appendChild(title);
	div.appendChild(img);	
	document.body.appendChild(div);
}
//* 1.5 Basandote en el ejercicio anterior. Crea un botón que elimine el último elemento de la serie de divs.

const buttonDelete = document.createElement("button");
buttonDelete.textContent = "Borra el ultimo elemento";

function eliminarUD() {
	const allDivs = document.querySelectorAll("div");
	allDivs[allDivs.length-1].remove();
}
buttonDelete.addEventListener("click", eliminarUD);
document.body.appendChild(buttonDelete);

//* 1.6 Basandote en el ejercicio anterior. Crea un botón para cada uno de los divs que elimine ese mismo elemento del html.

const allDivsToRemove2 = document.querySelectorAll("div");

for (const div of allDivsToRemove2) {
    const button = document.createElement("button");
    button.textContent = "Elimíname!"
    button.addEventListener("click", (e) => e.target.parentElement.remove())
    div.appendChild(button);
}