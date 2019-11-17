import { NextFunction, Request, Response } from 'express';
import app from '../App';

export default class FrontController {
  public home(req: Request, res: Response): void {
    res.render('test.html.twig', { msg: 'coco' });
  }

  public authentication(req: Request, res: Response, next: NextFunction): void {
    if (req.method === 'POST') {
      const { path } = req.body;
      app.get('db').connect(path).catch((e: Error) => {
        next(e);
      });
    }

    res.render('authentication.html.twig');
  }
}
