const express = require("express")
const router = express.Router()
const { getMagazines,getMagazineByIsbn } = require('../controller/magazinesController')
const { getBooks,getBooksByIsbn } = require('../controller/booksController')
const {getBooksAndMagazines} = require('../controller/booksmagazinesController')



router.post('/get-magazines',getMagazines)
router.post('/get-magazines-by-ISBN',getMagazineByIsbn)

router.post('/get-books',getBooks)
router.post('/get-book-by-ISBN',getBooksByIsbn)

// Print out all books and magazines with all their details 
router.post('/get-books-and-magazines',getBooksAndMagazines)

module.exports = router;