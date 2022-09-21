const { sortBooksAndMagazines } = require('../common/index')
const {getBooks} =require('./booksController')
const {getMagazines} = require('./magazinesController')

const getBooksAndMagazines = async(req,res) => {
    try{
//         Print out all books and magazines with all their details sorted by title. This sort
// should be done for books and magazines together.
        const books = await getBooks()
        const magazines = await getMagazines()
        const booksandmagazines = [...books,...magazines]
        const arrangedOrder = sortBooksAndMagazines(booksandmagazines)
        return res.send(arrangedOrder)

     }catch(err) {
         return res.status(400).json({success: false, message: `An error occurred : ${err}`})
     }
}                                   

module.exports={
    getBooksAndMagazines
};