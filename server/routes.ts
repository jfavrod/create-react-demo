import approot from 'app-root-path';
import { IncomingMessage, ServerResponse } from 'http';
import { readFileSync } from 'fs';
import { Employee } from '../src/models';

type routeHandler = (req: IncomingMessage, res: ServerResponse) => unknown;

const routes = new Map<string | RegExp, routeHandler>();

routes.set('/hello', (req, res) => {
  if (req.method === 'GET') {
    res.setHeader('Content-type', 'text/plain');
    res.end('Hello world');
  }
})

routes.set('/employees', (req, res) => {
  if (req.method === 'GET') {
    const allEmps: Employee[] = JSON.parse(
      readFileSync(`${approot.path}/data/MOCK_EMPLOYEES.json`).toString('utf-8')
    );

    let data: Employee[] = [];

    const url = new URL('http://example.com' + req.url || '');

    if (!Array.from(url.searchParams.entries()).length) {
      data = allEmps;
    }

    if (url.searchParams.has('firstName')) {
      data = allEmps.filter((emp) => emp.firstName === url.searchParams.get('firstName')) || [];
    }

    if (url.searchParams.has('department')) {
      data = data.concat(
        allEmps.filter((emp) => emp.department === url.searchParams.get('department')) || []
      )
    }

    const headers = res.getHeaders();
    headers['Content-Type'] = 'application/json';
    res.end(JSON.stringify(data))
  }
})

const dakine = {
  get: (route: string) => {
    const found = Array.from(routes.keys()).find((rt) => {
      return (new RegExp(rt)).test(route)
    });

    if (found) {
      return routes.get(found);
    }
  }
};

export default dakine;
