import { Router, Response, Request, NextFunction } from 'express';
import Controller from '../../utils/interface/controllers.interface.js';
import HttpException from '../../utils/exceptions/http.exception.js';
import ValidateMiddleware from '../../middlewares/validation.middleware.js';
import { login, register } from './users.validation.js';
import UserService from './users.service.js';

class UserController implements Controller {
  public path = '/users';
  public router = Router();
  private UserService = new UserService();

  constructor() {
    this.initialiseRoutes();
  }

  private initialiseRoutes(): void {
    this.router.post(
      `${this.path}/register`,
      validationMiddleware(register),
      this.register
    );
    this.router.post(
      `${this.path}/login`,
      validationMiddleware(login),
      this.login
    );
    this.router.get(`${this.path}`, authenticated, this.getUser);
  }

  private register = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Response | void> => {
    try {
      const { name, email, password } = req.body;

      const token = await this.UserService.register(
        name,
        email,
        password,
        'user'
      );

      res.status(201).json({ token });
    } catch (error) {
      next(new HttpException(400, error.message));
    }
  };

  private login = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Response | void> => {
    try {
      const { email, password } = req.body;

      const token = await this.UserService.login(email, password);

      res.status(200).json({ token });
    } catch (error) {
      next(new HttpException(400, error.message));
    }
  };

  private getUser = (
    req: Request,
    res: Response,
    next: NextFunction
  ): Response | void => {
    if (!req.user) {
      return next(new HttpException(404, 'No logged in user'));
    }

    res.status(200).send({ data: req.user });
  };
}

export default UserController;
