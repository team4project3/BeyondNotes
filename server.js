//reference to dependecies
const { cloudinary } = require('./client/src/utils/cloudinary');
const express = require("express");
const mongoose = require("mongoose");
const postRoutes = require("./routes");
const routes = require("./routes/api-routes");
// const route = require("./routes/api");


const app = express();
var cors = require('cors');

const session = require("express-session");
// Requiring passport as we've configured it
const passport = require("./config/passport");

//set image upload size
app.use(express.json({ limit: '300mb' }));
app.use(express.urlencoded({ limit: '300mb', extended: true }));
app.use(cors());

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


//get a list of public id's from the file folder in cloudinary
app.get('/api/images', async (req, res) => {
  const { resources } = await cloudinary.search
      .expression('folder:imageupload')
       
      .sort_by('created_at', 'desc')
      .max_results(1)
      .execute();
//sends back an array of ID's to be tested on the front end (localhost:3001/api/images)
  const publicIds = resources.map((file) => file.public_id);
  res.send(publicIds);
  console.log(resources)
});
app.post('/api/upload', async (req, res) => {
  try {
      const fileStr = req.body.data;
      const uploadResponse = await cloudinary.uploader.upload(fileStr, {
          //references the folder where files will be stored within cloudinary site
          upload_preset: 'imageupload',
      });
      console.log(uploadResponse);
      res.json({ uploadResponse });
  } catch (err) {
      console.error(err);
      res.status(500).json({ err: 'Uh Oh Dangerr---> failed' });
  }
});


// Add routes, both API and view

routes(app)
app.use(postRoutes);

// Connect to the Mongo DB
// mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/reactcms");
mongoose.connect(process.env.MONGODB_URI || "mongodb+srv://ashleyfeese@outlook.com:tsxD74CnTFkfd8b@cluster-pc46vxpz.dw5fl.mongodb.net/heroku_pc46vxpz?retryWrites=true&w=majority");
// mongoose.connect(process.env.MONGODB_URI || "mongodb://team4:project3team4@ds115472.mlab.com:15472/heroku_pc46vxpz");
// mongoose.connect(process.env.MONGODB_URI || "mongodb+srv://ashleyfeese@outlook.com:tsxD74CnTFkfd8b@cluster-pc46vxpz.dw5fl.mongodb.net/heroku_pc46vxpz?retryWrites=true&w=majority");
//mongoose.connect(process.env.MONGODB_URI || "mongodb+srv://TravisMongoDB:MqBlpNquJAE37KUP@beyond-notes.gxtpt.mongodb.net/Beyond-Notes?retryWrites=true&w=majority");



// mongoose.connect(MONGODB_URI);


// Start the API server

const PORT = process.env.PORT || 3001;
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
