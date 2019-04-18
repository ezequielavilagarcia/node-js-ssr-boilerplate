import path from 'path';

import express from 'express';
import compression from 'compression';
import helmet from 'helmet';
import dotenv from 'dotenv';

import { errorHandlerController } from './controllers';
import { boilerplateRouter } from './routers';

// Config environment variables
dotenv.config({ path: path.join(__dirname, 'environments', '.env') });

const app = express();

// Set ejs as view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// protect your app from some well-known web vulnerabilities by setting HTTP headers appropriately.
app.use(helmet());
// middleware used to compress to gzip => best practice in performance.
app.use(compression());
// It parses incoming requests with JSON payloads.
app.use(express.json());
// It parses incoming requests with urlencoded payloads.
app.use(express.urlencoded({ extended: false }));
// It serves static files
app.use(express.static(path.join(__dirname, 'public')));

// express routes
app.use('/boilerplate', boilerplateRouter);

// Error handler middlewares
app.use(errorHandlerController.pageNotFound);
app.use(errorHandlerController.handleGenericErrors);

export default app;
