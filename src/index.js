import express from 'express';
import handlebars from 'express-handlebars';
import mongoose from 'mongoose';

const app = express();
app.listen(5001, () => console.log('Server is listening on http://localhost:5001...'));

//* express config
app.use('/public', express.static('src/public'));
app.use(express.urlencoded({ extended: false }));

//* handlebars config
app.engine('hbs', handlebars.engine({ extname: 'hbs', runtimeOptions: { allowProtoPropertiesByDefault: true } }));
app.set('view engine', 'hbs');
app.set('views', './src/views');

app.get('/', (req, res) => {
    res.render('home');
});
