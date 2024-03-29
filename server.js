import express from 'express';
import session from 'express-session';
import MongoStore from 'connect-mongo';
import flash from 'connect-flash';
import path from 'path';
import mongoose from 'mongoose';
// import helmet from 'helmet';
import { env } from 'process';
import routes from './routes.js';
import {
  middlewareGlobal,
  checksCsrfError,
} from './src/middlewares/middlewareGlobal.js';

const app = express();

const dbConnection = mongoose
  .connect(env.CONNECTION_MONGODB)
  .then(() => {
    app.emit('already');
  })
  .catch((e) => console.log({ error: e }));

const sessionOptions = session({
  secret: 'asdadaavbfvundfojvn',
  store: new MongoStore({ mongoUrl: env.CONNECTION_MONGODB }),
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 1000 * 60 * 60 * 24 * 7,
    httpOnly: true,
  },
});

app.set('views', path.resolve('./src/views'));
app.set('view engine', 'ejs');
// app.use(helmet());
app.use(flash());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.resolve('./public')));
app.use(middlewareGlobal);
app.use(checksCsrfError);
app.use(routes);
app.use(sessionOptions);

app.on('already', () => {
  app.listen(3000, () => {
    console.log('Running at: http://localhost:3000');
  });
});
