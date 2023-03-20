export const getTodayDatetime = (date: string) => {
    let [month, day, year] = date.split('/');
    day = day.length === 1 ? `0${day}` : day;
    month = month.length === 1 ? `0${month}` : month;

    const start =new Date(`${year}-${month}-${day}T01:00:00`);
    const end =new Date(`${year}-${month}-${+day + 1}T01:00:00`);

    return {start: start.getTime(), end: end.getTime()}
}

export const getBetweenDatetime = (dateFrom: string, dateTo: string) => {
    let [monthFrom, dayFrom, yearFrom] = dateFrom.split('/');
    dayFrom = dayFrom.length === 1 ? `0${dayFrom}` : dayFrom;
    monthFrom = monthFrom.length === 1 ? `0${monthFrom}` : monthFrom;

    let [monthTo, dayTo, yearTo] = dateTo.split('/');
    dayTo = dayTo.length === 1 ? `0${dayTo}` : dayTo;
    monthTo = monthTo.length === 1 ? `0${monthTo}` : monthTo;

    const start =new Date(`${yearFrom}-${monthFrom}-${dayFrom}T01:00:00`);
    const end =new Date(`${yearTo}-${monthTo}-${+dayTo +1}T00:59:59`);

    return {start: start.getTime(), end: end.getTime()}
}