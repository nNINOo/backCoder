import express from 'express'
import { productRouter } from './routers/ProductRouter.js';
import { ViewsRouter } from './routers/ViewRouter.js';
import handlebars from 'express-handlebars';

const PORT = process.env.PORT || 8080;

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true}));

app.engine('hbs', handlebars.engine({
    extname: '.hbs',
    defaultLayout: "main.hbs",
    })
);

app.set("view engine", "hbs");
app.set("views", "./views");

app.use('/', ViewsRouter)
app.use('/api/productos', productRouter)

app.listen( PORT, () => console.log(`Server listening on PORT ` + PORT));