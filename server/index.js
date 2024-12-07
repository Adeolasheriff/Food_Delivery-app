const express = require('express');
const mongoose = require('mongoose');
const imageRoute = require('./routes/image.js');
// const userRoute = require('./routes/userRegister')
const userRoute = require('./routes/userRegister');
const dotenv = require('dotenv');
const app = express();
dotenv.config();
const cors = require('cors');


app.use(cors());
app.use(express.json());
app.use('/api/v1/all', imageRoute)
app.use('/api/v1/user',userRoute )

const port = process.env.PORT || 5000

const connect = async (req,res) => {
    try {
        await mongoose.connect(process.env.MONGODB_URL)
        console.log('MongoDB connected')
        
    } catch (error) {
        throw error
        
    }
}

mongoose.connection.on('disconnection', () => {
    console.log('disconnected');
})

app.listen(port, () => {
    connect()
    console.log(`Server is running on port ${port}`);
})