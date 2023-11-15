const express = require("express");
const connectDb = require("./config/dbConnection");
const errorHandler = require("./middleware/errorHandler");
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./docs/swagger.json');
const dotenv = require("dotenv");
const cors = require('cors')

dotenv.config()
connectDb();
const app = express();
const port = process.env.PORT || 5000;

app.use(cors())
app.use(express.json());



app.use("/api/contacts", require("./routes/contactRoutes"));
app.use("/api/users", require("./routes/userRoutes"));
app.use(errorHandler);

app.use('/api', swaggerUi.serve, swaggerUi.setup(swaggerDocument));


app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
