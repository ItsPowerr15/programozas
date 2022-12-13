// console.log(`András
// Koppány
// Andris
// Bendegúz

// Gellén András
// 2007.03.09
// 180cm`);

// console.log(22 + 13)
// console.log(22 - 13)
// console.log(22 * 13)
// console.log(22 / 13)
// console.log(22 / 13)
// console.log(15 / 30 * 100)

// let varible = 23
// console.log('a kedvenc számom a: 23');

// let a = 123
// let b = 526
// let c;

// c = a;
// a = b;
// b = c;

// console.log('a erteke', a);
// console.log('b erteke', b);

// let varible1 = `${63} kg`;
// let varible2 = `${180} cm`;
// console.log(varible1);
// console.log(varible2);

// // mellette lévő dolgok azok kommentek

// // let varible = 'a';
// // let varible2 = 12;
// // let varible3 = false;

// // let varible4 = varible2 + 32;

// // varible = varible + 32;
// // varible2 += 32;

// // const constvarible = 12;

// // constvarible = 14;

// // console.log(varible2);


// let d = 3;

// a = 12;

// if (d < 5) {
//     console.log('kisebb');
// } else if (d == 10) {
//     console.log('a egyenlő 10');
// } else {
//     console.log('hello');
// }

// if (d < 5 || d > 10) {
//     console.log('cica');
// }

// if (d < 5 && d == 3) {
//     console.log('kutya');
// }


// let e = 1;
// while (e <= 100) {
//     console.log(e);
//     e++;
// }

// for (let f = 1; f <= 100; f++) {
//     console.log(f);
// }

// let g = 2;
// while (g <= 500) {
//     console.log(g);
//     g += 2;
// }


// function akarmi(a) {
//     console.log("Hello", a)
// }

// akarmi("andras");

// function valami(b) {
//     return b * 2;
// }

// console.log(valami(21));

// function random(c, d) {
//     return c + d;
// }

// console.log(random(12, 18));

// function faktorial(e){
//     while(e < 100)
//     e++
//     console.log(e)
// }
// faktorial(3);


// const array = [1, 4, 5, 7];
// console.log(array[2]);
// console.log(array[0] + array[2]);
// console.log(array);



// let personalInformation = {
//     height: 182,
//     name: {
//         first: 'Gellén',
//         last: 'András',
//     },
// };

// console.log(personalInformation.height);
// console.log(personalInformation.name.first, personalInformation.name.last);

// personalInformation.favoritegame = ['OSU!', 'Overwatch 2', 'LOL']

// console.log(personalInformation.favoritegame);

// console.log(Object.keys(personalInformation));
// console.log(Object.values(personalInformation));


const data = {
	allTimeFavoriteBookId: 4,
	authors: [
		{
			authorId: 1,
			name: 'J. K. Rowling',
		},
		{
			authorId: 2,
			name: 'George R. R. Martin',
		},
		{
			authorId: 3,
			name: 'Stephen King',
		},
	],
	books: [
		{
			bookId: 1,
			title: 'Harry Potter és a Bölcsek Köve',
			authorId: 1,
			score: 12,
			releaseDate: 1997,
		},
		{
			bookId: 2,
			title: 'Trónok Harca',
			authorId: 2,
			score: 8,
			releaseDate: 2002,
		},
		{
			bookId: 3,
			title: 'Harry Potter és a Titkok Kamrája',
			authorId: 1,
			score: 16,
			releaseDate: 1998,
		},
		{
			bookId: 4,
			title: 'Tortúra',
			authorId: 3,
			score: 4,
			releaseDate: 1987,
		},
	],
};

const favoritebook = data.books.find((item) => item.bookId === data.allTimeFavoriteBookId);
const favoritebooktitle = favoritebook.title;
console.log(favoritebooktitle);

const favoritebookAuthor = data.authors.find((item) => item.authorId === favoritebook.authorId);
const favoritebookAuthorName = favoritebookAuthor.name;
console.log(favoritebookAuthorName);

const score = data.books.filter((item) => item.score > 8);
console.log(score);

const releaseDate = data.books.filter((item) => item.releaseDate < 2000);
console.log(releaseDate);