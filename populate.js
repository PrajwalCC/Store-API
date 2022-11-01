// here we are dynamically adding products data from products.json to database.
// by invoking the populate.js
require('dotenv').config()

const connectDB = require('./db/connect')
const Product = require('./models/product')

const jsonProducts = require('./products.json')

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI)
    await Product.deleteMany()
    await Product.create(jsonProducts)
    console.log('Success!!!!')
    // 0 is success code
    process.exit(0)
  } catch (error) {
    console.log(error)
    // 1 is error code
    process.exit(1)
  }
}

start()
