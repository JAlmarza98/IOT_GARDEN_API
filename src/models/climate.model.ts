import { Schema, model } from "mongoose";
import { iotNetworkVariables } from "../interfaces/iotNetwork";

const climateSchema = new Schema<iotNetworkVariables>({
    temperature: { type: Number, required: true},
    humidity: { type: Number, required: true},
    pollution: { type: Number, required: true},
    datetime: { type: Number, required: true}
});

const climateData = model<iotNetworkVariables>("climateData", climateSchema);

export default climateData;