//Install express server
const express = require('express');
const path = require('path');

const app = express();

app.use((req, res, next) => {
  if (process.env.NODE_ENV === "production") {
    if (req.headers["x-forwarded-proto"] !== "https") {
      // the statement for performing our redirection
      return res.redirect("https://" + req.headers.host + req.url);
    } else {
      return next();
    }
  } else {
    return next();
  }
});

// Serve only the static files form the dist directory
app.use(express.static('./dist/stop-corruption-web-app'));

app.get('/*', function(req,res) {

res.sendFile(path.join(__dirname,'/dist/stop-corruption-web-app/index.html'));
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);
