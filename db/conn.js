const mongoose = require('mongoose')

async function main() {
    await mongoose.connect('mongodb://0.0.0.0:27017/firstbanco')
    console.log('Connectou ao MongoDB com o mongoose!')
}



main().catch((err) => console.log(err))


module.exports = mongoose