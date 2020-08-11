//reference to dependecies
const { cloudinary } = require('./client/src/utils/cloudinary');
const express = require("express");

const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
var cors = require('cors');

const session = require("express-session");
// Requiring passport as we've configured it
const passport = require("./config/passport");



//get a list of public id's from the file folder in cloudinary
app.get('/api/images', async (req, res) => {
  const { resources } = await cloudinary.search
      .expression('folder:imageselector')
      .sort_by('public_id', 'desc')
      .max_results(5)
      .execute();
//sends back an array of ID's to be tested on the front end (localhot:3001/api/images)
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
app.use(express.static("public"));
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// We need to use sessions to keep track of our user's login status
app.use(
  session({ secret: "keyboard cat", resave: true, saveUninitialized: true })
);
app.use(passport.initialize());
app.use(passport.session());



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
