import http from 'http';
import climateData from '../models/climate.model';
import { iotNetworkResponse } from '../interfaces/iotNetwork';

export const getGardenData = () => {
    const options = {
        protocol: 'http:',
        hostname: `${process.env.IOT_GATEWAY as string}`,
        port: 80,
        path: '/',
        method: 'GET'
    };

    http.get(options, (res) => {
        let data = ''
         
        res.on('data', (chunk) => {
            data += chunk;
        });
        
        // Ending the response 
        res.on('end', () => {
            saveGardenData(JSON.parse(data));
        });
           
    }).on("error", (err) => {
        console.log("Error: ", err)
    }).end()
}

const saveGardenData = async(data: iotNetworkResponse) => {
    const now = new Date(),
    offset = -(now.getTimezoneOffset() * 60 * 1000);
    
    data.variables.datetime = +now + offset;
    const climate = new climateData(data.variables);
    await climate.save();
}
