const { connect } = require('mongoose')

const connectDB = async () => { 

    try {
        await connect('mongodb://localhost/footballdata-graphql-api')
        console.log("MongoDB connected")
    }
    catch (err) {
        console.log('There\'s trouble connecting to your DB. Please check your configuration', err)
     }

}

module.exports = { connectDB }