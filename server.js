//reference to dependecies
const { cloudinary } = require('./client/src/utils/cloudinary');
const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
var cors = require('cors');

//get a list of public id's from the file folder in cloudinary
app.get('/api/images', async (req, res) => {
  const { resources } = await cloudinary.search
      .expression('folder:imageselector')
      .sort_by('public_id', 'desc')
      .max_results(5)
      .execute();
//sends back an array of ID's to be tested on the front end (localhost:3001/api/images)
  const publicIds = resources.map((file) => file.public_id);
  res.send(publicIds);
});
app.post('/api/upload', async (req, res) => {
  try {
      const fileStr = req.body.data;
      const uploadResponse = await cloudinary.uploader.upload(fileStr, {
          //references the folder where files will be stored within cloudinary site
          upload_preset: 'imageselector',
      });
      console.log(uploadResponse);
      res.json({ msg: 'Awesome--> Image loaded' });
  } catch (err) {
      console.error(err);
      res.status(500).json({ err: 'Uh Oh Danger Sir Robinson Danger---> failed' });
  }
});


//set image upload size
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));
app.use(cors());

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Add routes, both API and view
app.use(routes);

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/reactcms");

// Start the API server
const PORT = process.env.PORT || 3001;
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
// ahhhhhh
