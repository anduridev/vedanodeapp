require('dotenv').config();
const express = require('express');
const cors = require('cors');
const auth = require('./src/middlewares/auth')
const bodyParser = require('body-parser');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger/swagger.json');
const errorHandler = require('./src/middlewares/errorHandler');
const guestRoutes = require('./src/routes/guestRoutes');
const stockRoutes = require("./src/routes/stockRoutes");
const divisionRoute = require('./src/routes/divisionRoutes');
const app = express();
app.use(auth);
app.use(cors());
app.use(bodyParser.json());
// Routes
app.use('/api/guests', guestRoutes);
app.use("/api/stock",stockRoutes);
app.use("/api/division",divisionRoute);
// Error Handling
app.use(errorHandler);
// Swagger Docs
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
const PORT = process.env.PORT || 9000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

