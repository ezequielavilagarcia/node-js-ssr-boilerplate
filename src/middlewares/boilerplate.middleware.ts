import { Request, Response, NextFunction } from 'express';
/**
 * Boilerplate middleware
 */
export function boilerplateMiddleware(req: Request, res: Response, next: NextFunction) {
  next();
}
