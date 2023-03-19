import { Application, Router } from 'express';
import { PingController } from "./controllers/PingController";
import { weatherController } from './controllers/weather/WeatherController';

const _routes: [string, Router][] = [
    ['/ping', PingController],
    ['/weather', weatherController]
];

export const routes = (app: Application) => {
    _routes.forEach((route) => {
        const [url, controller] = route;
        app.use(url, controller);
    });
};