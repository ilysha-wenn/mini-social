module.exports.init = (config) => {
    try {
        const express = require('express');
        const bodyParser = require('body-parser');
        const fileUpload = require('express-fileupload');
        const app = express();

        app.use(express.static('static'));
        app.use(fileUpload({}));
        app.use(express.json());
        app.use(bodyParser.urlencoded({ extended: true }));
        app.use(bodyParser.json()); 

        const userRoute = require('./entity/user/router');
        app.use('/api', userRoute);

        const postRoute = require('./entity/post/router');
        app.use('/api', postRoute);

        return app; 
    } catch (error) {
        console.log(`Error in block 'INIT':${error}`);
    }
}

module.exports.start = (config, app) => {
    try {
        const port = config.server.PORT;
        app.listen(port);
        console.log(`Server started on http://localhost:${port}`);

    } catch (error) {
        console.log(`Error in block 'START':${error}`);
    }
}