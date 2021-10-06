const fs = require('fs');
const path = require('path');

const getProductsFromFile = cb => {
    fs.readFile('./items.json', (err, fileContent) => {
        if (err) {
            cb([]);
        } else {
            cb(JSON.parse(fileContent));
        }
    });

};

module.exports = class Product {
    constructor(tags, imageUrl, price, name, description) {
        this.tags = tags;
        this.imageUrl = imageUrl;
        this.price = price;
        this.name = name;
        this.description = description;
    }

    static fetchAll(cb) {
        getProductsFromFile(cb);
    }

    static filter(searchTerm, cb) {
        getProductsFromFile(products => {
            const filteredProducts = products.filter(product => {
                return product.tags.find(tag => {
                    return tag.toLowerCase() === searchTerm.toLowerCase();
                });
            });
            cb(filteredProducts);
        })
    }

}