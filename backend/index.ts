import express from'express';
const mongoose = require('mongoose');
const cors = require('cors');
const user = require('./controller/user')
const faculty = require('./controller/faculty')
const admin = require('./controller/Admin')
const app = express();
const PORT = 7000;



app.use(express.json());
app.use(express.urlencoded({ extended: true })); 
app.use(cors());
app.use('/students' ,express.static('students'))
app.use('/faculty' ,express.static('faculty'))
app.use('/events' ,express.static('events'))


app.listen(PORT, () => {
  console.log(`Server is running on port http://192.168.1.138:7000`);
});

mongoose.connect("mongodb://127.0.0.1:27017/events", {
  // useNewUrlParser: true,
  // useUnifiedTopology: true
}).then(()=>{
    console.log(`mongodb is connected`)
})


app.use('/user',user)
app.use('/faculty',faculty)
app.use('/admin',admin)










