const mongoose = require('mongoose')
const Category = require('../models/category')

async function exe() {
    try {
        await new Category({
            name: 'Categoria nueva',
            slug: 'nueva',
            products: []
        }).save()
        await new 
        mongoose.disconnect()
    } catch(err) {
        console.log(err.message)
        mongoose.disconnect()
    }
}

exe()