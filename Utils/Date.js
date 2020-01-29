import moment from 'moment';

export const CheckIfNowIsMoreLongerThanDate = (date) => {
    return moment().format() > date;
}

export const EndOfNextDay = () => {
    return moment().add(1, 'days').endOf('day').format();
}