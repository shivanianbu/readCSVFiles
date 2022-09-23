const { sortBooksAndMagazines } = require('../common/index')
const {getBooks} =require('./booksController')
const {getMagazines} = require('./magazinesController')

let booksandmagazines;

const getBooksAndMagazines = async(req,res) => {
    try{

        const books = await getBooks()
        const magazines = await getMagazines()
        booksandmagazines = [...books,...magazines]
        const arrangedOrder = sortBooksAndMagazines(booksandmagazines)
        return arrangedOrder
     }catch(err) {
         return {success: false, message: `An error occurred : ${err}`}
     }
}                                   

const getBookMagazineByAuthor = async(req,res) => {
    const { author } = req.body
    let SearchedByAuthor=[]

    if(!booksandmagazines) booksandmagazines = await getBooksAndMagazines()
    booksandmagazines.map((item) =>{
        item.authors=item.authors.split("|")
    })

    booksandmagazines.filter((item) =>{
         item.authors.map((authorName) => {
            if(authorName === author) SearchedByAuthor.push(item)
        })
    })
    return res.send(SearchedByAuthor)
}

module.exports={
    getBooksAndMagazines,
    getBookMagazineByAuthor
};