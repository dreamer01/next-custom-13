import express, { NextFunction, Request, Response } from 'express';
import { parse } from 'url';
import next from 'next';

const port = parseInt(process.env.PORT || '3000', 10);
const dev = process.env.NODE_ENV === 'development';
const nextApp = next({ dev });
const handle = nextApp.getRequestHandler();

nextApp.prepare().then(() => {
  const app = express();

  app.get(
    '/a/*',
    [
      (req: Request, _res: Response, next: NextFunction) => {
        console.log('URL : ', req.url);
        console.log('ENV ', process.env.NODE_SUBENV);
        next();
      },
    ],
    (req: Request, res: Response) => {
      const parsedUrl = parse(req.url!, true);
      handle(req, res, parsedUrl);
    }
  );

  app.get(
    '/b/*',
    [
      (req: Request, _res: Response, next: NextFunction) => {
        console.log('URL : ', req.url);
        console.log('ENV ', process.env.NODE_SUBENV);
        next();
      },
    ],
    (req: Request, res: Response) => {
      const parsedUrl = parse(req.url!, true);
      handle(req, res, parsedUrl);
    }
  );

  app.get(
    '/api/*',
    [
      (req: Request, _res: Response, next: NextFunction) => {
        console.log('URL : ', req.url);
        console.log('ENV ', process.env.NODE_SUBENV);
        next();
      },
    ],
    (req: Request, res: Response) => {
      const parsedUrl = parse(req.url!, true);
      handle(req, res, parsedUrl);
    }
  );

  app.get('*', (req: Request, res: Response) => {
    const parsedUrl = parse(req.url!, true);
    handle(req, res, parsedUrl);
  });

  app.listen(port, () => {
    console.log(
      `> Server listening at http://localhost:${port} as ${
        dev ? 'development' : process.env.NODE_ENV
      }`
    );
  });
});
