export const getHoursAndMinutes = (item) => {

    const itemHour = item.getHours();
    const itemMinute = item.getMinutes();

    if (itemHour < 10 && itemMinute < 10) {
        return `0${itemHour}:0${itemMinute}`
    } else if (itemHour < 10) {
        return `0${itemHour}:${itemMinute}`
    } else if (itemMinute < 10) {
        return `${itemHour}:0${itemMinute}`
    }
    return `${item.getHours()}:${item.getMinutes()}`
};