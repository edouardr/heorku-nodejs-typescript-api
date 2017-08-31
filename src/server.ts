import * as express from "express";

/**
 * The server.
 *
 * @class Server
 */
export class Server {
    
      public app: express.Application;
    
      /**
       * Bootstrap the application.
       *
       * @class Server
       * @method bootstrap
       * @static
       * @return {ng.auto.IInjectorService} Returns the newly created injector for this app.
       */
      public static bootstrap(): Server {
        return new Server();
      }
    
      /**
       * Constructor.
       *
       * @class Server
       * @constructor
       */
      constructor() {
        this.app = express();
        this.config();
        this.routes();
        this.api();
      }
    
      /**
       * Create REST API routes
       *
       * @class Server
       * @method api
       */
      public api() {
        //empty for now
      }
    
      /**
       * Configure application
       *
       * @class Server
       * @method config
       */
      public config() {
        //empty for now
      }
    
      /**
       * Create router
       *
       * @class Server
       * @method api
       */
      public routes() {
        //empty for now
      }
    }