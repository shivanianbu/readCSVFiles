
const path = require('path')
const fileDir = path.normalize(path.join(__dirname, '..','/csvFiles'));
const { getCsvData,findByIsbn } = require('../common/index')

let magazineDetails;

const getMagazines = async(req,res) => {
    try{
        const filename = fileDir+ '/magazines.csv';
        const magazines = await getCsvData(filename)
        magazineDetails = magazines
        return magazines
    
    }catch(err) {
        return res.status(400).json({success: false, message: `An error occurred : ${err}`})
    }
}

const getMagazineByIsbn = async(req,res) => {
    try{
        const { isbn } = req.body
        if(!magazineDetails) magazineDetails = await getMagazines()

        let matchFound = findByIsbn(magazineDetails,isbn)
        if(!matchFound) return res.status(404).json({message: 'Magazine not Found!!..'})

        return res.send(matchFound)

    } catch(error) {
        return res.status(400).json({success: false, message: `An error occurred : ${err}`})
    }
}

module.exports={
    getMagazines,
    getMagazineByIsbn
};