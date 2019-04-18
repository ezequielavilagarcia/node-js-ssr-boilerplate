import { Request, Response, NextFunction } from 'express';
import { boilerplateService } from '../services';

class BoilerplateController {
  constructor() {}

  getData(req: Request, res: Response, next: NextFunction) {
    const data = boilerplateService.getData();
    res.render('boilerplate', { pageTitle: 'Boilerplate page', path: '/boilerplate' });
  }
}

export const boilerplateController = new BoilerplateController();
