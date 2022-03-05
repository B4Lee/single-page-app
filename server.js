const express = require('express');
const path = require('path');

const app = express();

/* This is telling Express to serve the static files in the `frontend/static` directory. */
app.use("/static", express.static(path.resolve(__dirname, "frontend", "static")))

/* This is a route that will match any URL and will send the file located at `frontend/index.html` back
to the client. */
app.get("/*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "index.html"));
});

app.listen(process.env.PORT || 3000, () => console.log("Server running..."));