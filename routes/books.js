const express = require("express")
const router = express.Router()
const path = require('path')
const fileDir = path.normalize(path.join(__dirname, '..','/csvFiles'));
const { getCsvData } = require('../common/index')

router.post('/get-books',async(req, res) => {
    try{
       const filename = fileDir + '/books.csv';
       const books = await getCsvData(filename)
       return res.send(books);
    }catch(err) {
        return res.status(400).json({success: false, message: `An error occurred : ${err}`})
    }
  })

module.exports=router;