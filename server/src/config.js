module.exports = {
    database : {
        url :  process.env.url || `mongodb+srv://admin:admin@cluster0.svotz.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`
    },
    server: {
        PORT: process.env.PORT || 8000
    }
}