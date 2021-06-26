import express from 'express';


const PORT = process.env.PORT || 3000;
const path = require('path');
const app = express();
const router = express.Router();

// static resources should just be served as they are
router.use(express.static(
    path.resolve(__dirname, '..', 'build'),
    { maxAge: '30d' },
));

// root (/) should always serve our server rendered page
app.get('/', (req, res, next) => {
    res.send("Hello from the backend side!");
});

// start the server
app.use(router);
app.listen(PORT, (error) => {
    if (error) {
        return console.log('Error during app startup', error);
    }
    console.log("listening on " + PORT + "...");
});