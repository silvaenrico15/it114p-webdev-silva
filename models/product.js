const db = require('../util/database');

module.exports = class Product {
    constructor(id, title, image_url, description, price) {
        this.id = id;
        this.title = title;
        this.imageUrl = imageUrl;
        this.description = description;
        this.price = price;
    }

    save()
     {
        return db.execute(
            'INSERT INTO products (title, price, imageUrl, description, created_by) VALUES (?, ?, ?, ?, ?)',
            [this.title, this.price, this.imageUrl, this.description, 'SYSTEM']
          );
    }

    static deleteById(id) 
    {
        return db.execute('DELETE FROM products WHERE products.id = ?', [id]);
    }

    static fetchAll() {
        return db.execute('SELECT * FROM products');
    }

    static findById(id) {
        return db.execute('SELECT * FROM products WHERE products.id = ?', [id]);
    }
}