let books = [{
	name: "Bok 1",
	field: "av Namn Efternamn",
	pic: "./img/bookCover1.jpg"
}, {
	name: "Bok 2",
	field: "av Namn Efternamn",
	pic: "./img/bookCover2.jpg"
}, {
	name: "Bok 3",
	field: "av Namn Efternamn",
	pic: "./img/bookCover3.jpg"
}, {
	name: "Bok 4",
	field: "av Namn Efternamn",
	pic: "./img/bookCover4.jpg"
}, {
	name: "Bok 5",
	field: "av Namn Efternamn",
	pic: "./img/bookCover5.jpg"
}, {
	name: "Bok 6",
	field: "av Namn Efternamn",
	pic: "./img/bookCover6.jpg"
}, {
	name: "Bok 7",
	field: "av Namn Efternamn",
	pic: "./img/bookCover1.jpg"
}, {
	name: "Bok 8",
	field: "av Namn Efternamn",
	pic: "./img/bookCover3.jpg"
}, ];




function loadPage() {




	let divRow = document.getElementById("BooksCards");


	let firstFour = books.slice(0, 4)
	let nextFour = books.slice(4, 8)
	console.log(books.length);
	let item1 = document.getElementById("item1");
	let item2 = document.getElementById("item2");


	for (let book of firstFour) {


		let divCol = document.createElement('div');
		divCol.setAttribute("class", "col-12 col-md-3 ");
		divCol.setAttribute("style", "padding:10px; margin:0; display:inline-block; ");
		let abc = document.createElement("div");
		let a = document.createElement("a");
		a.setAttribute("style", "text-decoration:none; color:black;");
		a.href = 'produkt.html';
		abc.setAttribute("class", "card");
		let imgImg = document.createElement('img');
		abc.appendChild(imgImg);
		imgImg.setAttribute("class", "card-img-top");
		imgImg.setAttribute("src", book.pic);
		let divBody = document.createElement("div");
		a.appendChild(abc);
		divBody.setAttribute("class", "card-body");
		abc.appendChild(divBody);

		let h4 = document.createElement('h4');
		h4.setAttribute("class", "card-title");

		let p = document.createElement('p');
		p.setAttribute("style", "height:2.5vw; -webkit-hyphens: none; hyphens: none; ");
		divBody.appendChild(p);
		divCol.appendChild(a);




		h4.innerHTML = book.name;
		p.innerHTML = book.field;

		divBody.appendChild(h4);


		item1.appendChild(divCol);


	}
	for (let book of nextFour) {

		let divCol = document.createElement('div');
		divCol.setAttribute("class", "col-12 col-md-3 ");
		divCol.setAttribute("style", "padding:10px; margin:0; display:inline-block; ");
		let abc = document.createElement("div");
		let a = document.createElement("a");
		a.setAttribute("style", "text-decoration:none; color:black;");
		a.href = 'produkt.html';
		abc.setAttribute("class", "card");
		let imgImg = document.createElement('img');
		abc.appendChild(imgImg);
		imgImg.setAttribute("class", "card-img-top");
		imgImg.setAttribute("src", book.pic);
		let divBody = document.createElement("div");
		a.appendChild(abc);
		divBody.setAttribute("class", "card-body");
		abc.appendChild(divBody);

		let h4 = document.createElement('h4');
		h4.setAttribute("class", "card-title");

		let p = document.createElement('p');
		p.setAttribute("style", "height:2.5vw; -webkit-hyphens: none; hyphens: none; ");
		divBody.appendChild(p);
		divCol.appendChild(a);




		h4.innerHTML = book.name;
		p.innerHTML = book.field;

		divBody.appendChild(h4);


		item2.appendChild(divCol);


	}
	
	


}










function makeCarousel() {
	var c = document.getElementById("BooksCrads").childNodes;;

	let itemCarro = document.createElement("div");
	itemCarro.setAttribute("class", "carousel-item active");
	itemCarro.appendChild(c[0]);
	itemCarro.appendChild(c[1]);
	itemCarro.appendChild(c[2]);
	itemCarro.appendChild(c[3]);

	divRow.appendChild(itemCarro);
}
