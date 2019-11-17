import { Request, Response } from 'express';

export default class ItemController {
  public show(req: Request, res: Response): void {
    res.render('item/show.html.twig', { msg: 'show' });
  }
}
