
const path = require('path')
const fileDir = path.normalize(path.join(__dirname, '..','/csvFiles'));
const { getCsvData, findByIsbn } = require('../common/index')

let booksDetail;

const getBooks = async(req,res) => {
    try{

        const filename = fileDir+'/books.csv';
        const books = await getCsvData(filename)
        booksDetail = books
        return booksDetail

     }catch(err) {
        return res.status(400).json({success: false, message: `An error occurred : ${err}`})
     }
}

const getBooksByIsbn = async(req,res) => {
    try{
        const { isbn } = req.body
        if(!booksDetail) booksDetail = await getBooks()

        let matchFound = findByIsbn(booksDetail,isbn)
        if(!matchFound) return res.status(404).json({message: 'Book not Found!!..'})

        return res.send(matchFound)

    } catch(error) {
        return res.status(400).json({success: false, message: `An error occurred : ${err}`})
    }
   
}

module.exports={
    getBooks,
    getBooksByIsbn
};