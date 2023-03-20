import { NextFunction, Request, Response, Router } from 'express';
import { getBetweenDatetime, getTodayDatetime } from '../utils/getDates';
import climateData from '../models/climate.model';

export const weatherController: Router = Router();

weatherController.get('/today', async (req: Request, res: Response, next: NextFunction) => {
    try {
        const today = new Date();
        const {start, end} = getTodayDatetime(today.toLocaleDateString('en-ES'));

        const data = await climateData.find({ datetime: {$gte: start, $lt: end} });

        res.status(200).send({ data });
    } catch (e) {
        next(e);
    }
});

weatherController.post('/between', async (req: Request, res: Response, next: NextFunction) => {
    try {
        const {dateFrom, dateTo} = req.body;
        const {start, end} = getBetweenDatetime(dateFrom, dateTo);
        
        const data = await climateData.find({ datetime: {$gte: start, $lt: end} });

        res.status(200).send({ data });
    } catch (e) {
        next(e);
    }
});