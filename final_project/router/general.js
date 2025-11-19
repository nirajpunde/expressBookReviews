const express = require('express');
let books = require("./booksdb.js");
let isValid = require("./auth_users.js").isValid;
let users = require("./auth_users.js").users;
const public_users = express.Router();


public_users.post("/register", (req,res) => {
  //Write your code here
  return res.status(300).json({message: "Yet to be implemented"});
});

// Get the book list available in the shop
public_users.get('/',function (req, res) {
  //Write your code here
  return res.status(300).json(JSON.stringify(books));
});

// Get book details based on ISBN
public_users.get('/isbn/:isbn',function (req, res) {
  //Write your code here
  const book = books.find(b => b.isbn === req.params.isbn);
  if (!book) return res.status(404).json({ message: 'Book not found' });
  res.json(book);
 });
  
// Get book details based on author
public_users.get('/author/:author',function (req, res) {
  //Write your code here
  const filteredBooks = books.filter(b => b.author.toLowerCase().includes(req.params.author.toLowerCase()));
  if (!filteredBooks) return res.status(404).json({ message: 'Book not found' });
  res.json(filteredBooks);
});

// Get all books based on title
public_users.get('/title/:title',function (req, res) {
  //Write your code here
   const filteredBooks = books.filter(b => b.title.toLowerCase().includes(req.params.title.toLowerCase()));
    res.json(filteredBooks);
  return res.status(300).json(JSON.stringify(filtered_books));
});

//  Get book review
public_users.get('/review/:isbn',function (req, res) {
  //Write your code here
  return res.status(300).json({message: "Yet to be implemented"});
});

module.exports.general = public_users;
