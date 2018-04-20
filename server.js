const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { graphqlExpress, graphiqlExpress } = require('apollo-server-express');
const { makeExecutableSchema } = require('graphql-tools');
const path = require('path');

const app = express();

/* Webpack config only in dev mode */
const webpack = require('webpack'); // eslint-disable-line
const webpackconfig = require('./webpack/webpack.config.dev');
const webpackMiddleware = require('webpack-dev-middleware'); // eslint-disable-line
const webpackHotMiddleware = require("webpack-hot-middleware");// eslint-disable-line

const webpackCompiler = webpack(webpackconfig);
const wpmw = webpackMiddleware(webpackCompiler, {});
app.use(wpmw);
const wphmw = webpackHotMiddleware(webpackCompiler);
app.use(wphmw);
/* END */

app.use(cors());

app.listen(9000, () => {
  console.log('Go to http://localhost:9000/graphiql to run queries!');
});
