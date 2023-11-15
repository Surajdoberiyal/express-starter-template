const swaggerAutogen = require('swagger-autogen')();

const doc = {
    host: 'localhost:5000',
    info: {
        version: '1.0.0',
        title: 'Swagger API',
        description: 'API for Managing queue calls',
        contact: {
            'name': 'API Support',
            'email': 'test@gmail.com'
        },
    },

    securityDefinitions: {
        Bearer: {
            type: 'apiKey',
            name: 'Authorization',
            in: 'header',
        },
    },

    security: [
        { Bearer: [] }, // Enable Bearer Token authentication globally
    ],
};

const outputFile = './docs/swagger.json';
const endpointsFiles = ['./server.js', './controllers/*.js'];

swaggerAutogen(outputFile, endpointsFiles, doc);

swaggerAutogen(outputFile, endpointsFiles, doc).then(() => {
    require('../server.js');
});