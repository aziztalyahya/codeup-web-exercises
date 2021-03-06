
    "use strict";

    /**
     * TODO:
     * Create an object with firstName and lastName properties that are strings
     * with your first and last name. Store this object in a variable named
     * `person`.
     *
     * Example:
     *  > console.log(person.firstName) // "Rick"
     *  > console.log(person.lastName) // "Sanchez"
     */
    var person = {
        firstName: prompt("What is your first name?"),
        lastName: prompt("What is your last name?"),
        sayHello: function () {
            return("Hello from ")
        }
    };
    console.log(person.firstName);
    console.log(person.lastName);

    /**
     * TODO:
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
     */

    console.log(person.sayHello() + person.firstName + " " + person.lastName + "!");


    /** TODO:
     * HEB has an offer for the shoppers that buy products amounting to
     * more than $200. If a shopper spends more than $200, they get a 12%
     * discount. Write a JS program, using conditionals, that logs to the
     * browser, how much Ryan, Cameron and George need to pay. We know that
     * Cameron bought $180, Ryan $250 and George $320. Your program will have to
     * display a line with the name of the person, the amount before the
     * discount, the discount, if any, and the amount after the discount.
     *
     * Uncomment the lines below to create an array of objects where each object
     * represents one shopper. Use a foreach loop to iterate through the array,
     * and console.log the relevant messages for each person
     */

    var shoppers = [
        {name: 'Cameron', amount: 180},
        {name: 'Ryan', amount: 250},
        {name: 'George', amount: 320}
    ];

    shoppers.forEach(function(shopper){
        if (shopper.amount < 200) {
            console.log(shopper.name + " gets no discount.");
        }
        if (shopper.amount >= 200){
            var discount = (shopper.amount * .12);
            shopper.amount *= .88;
            console.log("Congrats " + shopper.name + "! You qualify for the discount! You will saved 12% which is $" + discount.toFixed(2) +
            ". The total price will be $" + shopper.amount.toFixed(2));
        }
    });

    /** TODO:
     * Create an array of objects that represent books and store it in a
     * variable named `books`. Each object should have a title and an author
     * property. The author property should be an object with properties
     * `firstName` and `lastName`. Be creative and add at least 5 books to the
     * array
     *
     * Example:
     * > console.log(books[0].title) // "The Salmon of Doubt"
     * > console.log(books[0].author.firstName) // "Douglas"
     * > console.log(books[0].author.lastName) // "Adams"
     */

        var books = [
            {
                title: "Frankenstein",
                author: {
                    firstName: "Mary",
                    lastName: "Shelly"
                }
            },
            {
                title: "The Great Gatsby",
                author: {
                    firstName: "F. Scott",
                    lastName: "Fitzgerald"
                }
            },
            {
                title: "Of Mice and Men",
                author: {
                    firstName:"John",
                    lastName:"Steinbeck"
                }
            },
            {
                title: "Romeo and Juliet",
                author: {
                    firstName: "William",
                    lastName: "Shakespeare"
                }
            },
            {
                title: "Harry Potter",
                author: {
                    firstName: "J.K.",
                    lastName: "Rowling"
                }
            }


        ];

     console.log(books[0].title);
     console.log(books[0].author.firstName);
     console.log(books[0].author.lastName);

    /**
     * TODO:
     * Loop through the books array and output the following information about
     * each book:
     * - the book number (use the index of the book in the array)
     * - the book title
     * - author's full name (first name + last name)
     *
     * Example Console Output:
     *
     *      Book # 1
     *      Title: The Salmon of Doubt
     *      Author: Douglas Adams
     *      ---
     *      Book # 2
     *      Title: Walkaway
     *      Author: Cory Doctorow
     *      ---
     *      Book # 3
     *      Title: A Brief History of Time
     *      Author: Stephen Hawking
     *      ---
     *      ...
     */
            // for (var i=0; i< books.length; i++){
            //     console.log("Book # " + Number(i + 1));
            //     console.log("Title: " + books[i].title);
            //     console.log("Author: " + books[i].author.firstName + books[i].author.lastName);
            //     console.log("---");
            // }
// created iteration with a forEach loop as well
    books.forEach(function(book, index){
            console.log("Book # " + parseFloat(index + 1));
            console.log("Title: " + books[index].title);
            console.log("Author: " + books[index].author.firstName + " " + books[index].author.lastName);
            console.log("---");
    });

    /**
     * Bonus:
     * - Create a function named `createBook` that accepts a title and author
     *   name and returns a book object with the properties described
     *   previously. Refactor your code that creates the books array to instead
     *   use your function.
     * - Create a function named `showBookInfo` that accepts a book object and
     *   outputs the information described above. Refactor your loop to use your
     *   `showBookInfo` function.
     */

    function createBook() {
        var title = prompt("What is the title of the book?");
        var author = [];
        author[0] = prompt("What is the authors first name?");
        author[1] = prompt("What is the author's last name?");

        do {
            var i = books.length;
            books[i] = {
                title: title,
                author:{
                    firstName: author[0],
                    lastName: author[1]
                }

            }

        } while (i < i);
    }
    createBook();
    console.log(books);

    

function showBookInfo() {
    var bookName = prompt("Please enter the title of the book you're searching for");

    for (var i=0; i<books.length; i++) {
        if (bookName === books[i].title) {
            console.log("The book you chose was book #" + (i +1) + " which is " + books[i].title + " and the author is "
            + books[i].author.firstName + " " + books[i].author.lastName);
        }
    }
}

showBookInfo();


    // function createBook(title, author) {
    //     for(i=0; i<books.length; i++)
    //     if (title === books[i].title && author === books[i].author.firstName + books[i].author.lastName){
    //         return books[i];
    //     } else console.log("Nothing matches that.");
    //
    // }


