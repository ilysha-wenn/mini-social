module.exports.start = async(config) => {
    const mongoose = require('mongoose');
    try {
        const url = config.database.url;
        const options = {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false
        }
        await mongoose.connect(url, options);
    } catch (error) {
        console.log(`Error in block 'DB':${error}`);
    }

}