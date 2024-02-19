import app from './app';
import { resolve } from 'path';
import dotenv from 'dotenv';
import { log } from './lib/log';
import type { ENV } from './types/global';
import ip from 'ip';

// clearing all previous logs
console.clear();

// Enabling all the Environment Variable accessible across the application.
dotenv.config({ path: resolve('../.env') }); // you can pass the path of your env file.

// PORT
const port = process.env.PORT || 5000;

// RUNNING ENVIORNMENT
const env: ENV = (process.env.NODE_ENV as ENV) || 'PRODUCTION';

app.listen(port, () => {
  log(
    env === 'DEVELOPMENT'
      ? `Server is running on 
http://localhost:${port}
http://${ip.address()}` // extracting the ip of current server. | This is useful if you want to test the api on the app which is not on the same pc but connected via same Network OR WiFi.
      : 'Server Started.'
  );
});
