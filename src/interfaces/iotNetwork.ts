export interface iotNetworkResponse {
    variables:              iotNetworkVariables;
    id:                     string;
    name:                   string;
    hardware:               string;
    connected:              boolean;
}

export interface iotNetworkVariables {
    temperature:            number;
    humidity:               number;
    pollution:              number;
    datetime?:              number;
}