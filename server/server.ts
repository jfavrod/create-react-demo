import { createServer } from 'node:http'
import routes from './routes';

const server = createServer((req, res) => {
  console.log('url', req.url);
  const route = routes.get(req.url || '');

  res.setHeader('Access-Control-Allow-Origin', '*');

  if (route) {
    route(req, res);
  } else {
    res.statusCode = 404;
    res.end();
  }
});

server.listen(3001, '0.0.0.0', () => console.log('listening'));
