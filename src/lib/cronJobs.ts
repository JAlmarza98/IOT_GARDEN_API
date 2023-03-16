import cron from 'node-cron';
import { getGardenData } from '../jobs/getGardenData';

class CronJob {
  initScheduledJobs()  {

    // At every 15th minute.
    const scheduledJobFunction = cron.schedule("*/15 * * * *", () => {
      getGardenData();
    });
  
    scheduledJobFunction.start();
  }

}

export default CronJob;
