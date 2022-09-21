const fs = require('fs')
const { parse } = require('csv-parse')

const getCsvData = (currentFile) => {
    let csvData=[]

    return new Promise((resolve, reject) => {
        fs.createReadStream(currentFile)
            .on('error', error => {
                reject(error);
            })
            .pipe(parse({columns: true}))
            .on('data', (data) => {
                csvData.push(data);
            })
            .on('end', () => {
                resolve(csvData);
            });
    });
}

const sortBooksAndMagazines = (sortData) => {
    sortData.sort((a, b) => {
        const sortA = a.title.toUpperCase(); 
        const sortB = b.title.toUpperCase(); 
        if (sortA < sortB) {
          return -1;
        }
        if (sortA > sortB) {
          return 1;
        }   
    })
    return sortData
}

const findByIsbn =(data,isbn) => {
    return data.find(
        (item) => item.isbn === isbn)
}

module.exports = {
    getCsvData,
    sortBooksAndMagazines,
    findByIsbn
}