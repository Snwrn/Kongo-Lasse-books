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
	}, {
		name: "Bok 9",
		field: "av Namn Efternamn",
		pic: "./img/bookCover1.jpg"
	}, {
		name: "Bok 10",
		field: "av Namn Efternamn",
		pic: "./img/bookCover2.jpg"
	}, {
		name: "Bok 11",
		field: "av Namn Efternamn",
		pic: "./img/bookCover3.jpg"
	}, {
		name: "Bok 12",
		field: "av Namn Efternamn",
		pic: "./img/bookCover4.jpg"
	}, {
		name: "Bok 13",
		field: "av Namn Efternamn",
		pic: "./img/bookCover5.jpg"
	}, {
		name: "Bok 14",
		field: "av Namn Efternamn",
		pic: "./img/bookCover6.jpg"
	}, {
		name: "Bok 15",
		field: "av Namn Efternamn",
		pic: "./img/bookCover1.jpg"
	}, {
		name: "Bok 16",
		field: "av Namn Efternamn",
		pic: "./img/bookCover3.jpg"
	},

	{
		name: "Bok 17",
		field: "av Namn Efternamn",
		pic: "./img/bookCover1.jpg"
	}, {
		name: "Bok 18",
		field: "av Namn Efternamn",
		pic: "./img/bookCover2.jpg"
	}, {
		name: "Bok 19",
		field: "av Namn Efternamn",
		pic: "./img/bookCover3.jpg"
	}, {
		name: "Bok 20",
		field: "av Namn Efternamn",
		pic: "./img/bookCover4.jpg"
	}, {
		name: "Bok 21",
		field: "av Namn Efternamn",
		pic: "./img/bookCover5.jpg"
	}, {
		name: "Bok 22",
		field: "av Namn Efternamn",
		pic: "./img/bookCover6.jpg"
	}, {
		name: "Bok 23",
		field: "av Namn Efternamn",
		pic: "./img/bookCover1.jpg"
	}, {
		name: "Bok 24",
		field: "av Namn Efternamn",
		pic: "./img/bookCover3.jpg"
	},
];
//dynamisk skapa content på sidan
let firstTwelve = books.slice(0, 12)
let nextTwelve = books.slice(12, 24)

function loadPage() {
	let divRow = document.querySelector('.row');
	let divMore = document.getElementById("demo");

	for (let book of firstTwelve) {

		let divCol = document.createElement('div');
		divCol.setAttribute("class", "col-lg-3 col-md-4 col-sm-6 col-xs-12");
		divCol.setAttribute("style", "padding:10px;");
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
		divBody.setAttribute("class", "card-body");
		abc.appendChild(divBody);
		let h4 = document.createElement('h4');
		h4.setAttribute("class", "card-title");
		divBody.appendChild(h4);
		let p = document.createElement('p');
		divBody.appendChild(p);
		a.appendChild(abc);
		divCol.appendChild(a);
		h4.innerHTML = book.name;
		p.innerHTML = book.field;
		divBody.appendChild(h4);
		divRow.appendChild(divCol);
	}
	
	for (let book of nextTwelve) {

		let divCol = document.createElement('div');
		divCol.setAttribute("class", "col-lg-3 col-md-4 col-sm-6 col-xs-12");
		divCol.setAttribute("style", "padding:10px;");
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
		divBody.setAttribute("class", "card-body");
		abc.appendChild(divBody);
		let h4 = document.createElement('h4');
		h4.setAttribute("class", "card-title");
		divBody.appendChild(h4);
		let p = document.createElement('p');
		divBody.appendChild(p);
		a.appendChild(abc);
		divCol.appendChild(a);
		h4.innerHTML = book.name;
		p.innerHTML = book.field;
		divBody.appendChild(h4);
		divMore.appendChild(divCol);
	}
}