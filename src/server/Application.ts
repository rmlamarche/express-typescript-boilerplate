import * as express from 'express';

export class Application {

  private _app: express.Application;

  constructor() {
    this._app = express();
  }

  public listen() {

    this._app.listen(4444, () => {
      console.log('app listening!');
    });

    this._app.get('/', (req, res, next) => {
      return res.send('Hello world');
    });
  }

}
