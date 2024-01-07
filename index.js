import express from 'express';
import routes from './src/routes/routes';
import bodyParser from 'body-parser';

require('dotenv').config({ path:'./config/homolog.env' });

const app = express();
const port = process.env.PORT;

//========= app.use ==========//
app.set('view engine','ejs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use('/', routes);

app.listen(port, (msgError) => {
    if(msgError){
        throw new Error(msgError);
    }else{
        console.warn('Server is running on port ' + port);
    }
})