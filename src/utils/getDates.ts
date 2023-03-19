export const getTodayDatetime = (date: string) => {
    let [month, day, year] = date.split('/');
    day = day.length === 1 ? `0${day}` : day;
    month = month.length === 1 ? `0${month}` : month;

    const start =new Date(`${year}-${month}-${day}T01:00:00`);
    const end =new Date(`${year}-${month}-${+day + 1}T01:00:00`);

    return {start: start.getTime(), end: end.getTime()}
}