import app from './app';
import { loggerService } from './services';
import { SERVER_CONSTANTS } from './config';

const SERVER_PORT = process.env.SERVER_PORT || SERVER_CONSTANTS.DEFAULT_SERVER_PORT;

app.listen(SERVER_PORT, () => {
  loggerService.info('Server listening at ports', SERVER_PORT);
});
