const express = require('express');
const app = express();
const cors = require('cors'); 
port = 8000;
db = "product_manager";
server = app.listen(port,() => console.log(`Listening on port ${port}`));

app.use(cors());
app.use(express.json()); 
app.use(express.urlencoded({ extended: true })); 

// add the following as needed
require('./server/config/mongoose.config')(db); 
require('./server/routes/product.routes')(app); 

