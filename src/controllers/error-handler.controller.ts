import { Request, Response, NextFunction } from 'express';
import { GenericError } from '../models';
import { RESPONSE_CODE } from '../config';

class ErrorHandlerController {
  constructor() {}

  pageNotFound(req: Request, res: Response, next: NextFunction) {
    res.status(RESPONSE_CODE.NOT_FOUND).render('404', { pageTitle: 'Page Not Found', path: '/page-not-found' });
  }
  /**
   * This middleware is used to handle all the errors in the server.
   * It should be used as the last middleware
   */
  handleGenericErrors(error: GenericError, req: Request, res: Response, next: NextFunction) {
    const status = error.statusCode;
    const message = error.message;
    const data = error.data;
    res.status(status).json({
      message,
      data
    });
  }
}

export const errorHandlerController = new ErrorHandlerController();
