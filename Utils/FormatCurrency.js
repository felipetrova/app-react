const FormatCurrency = value => {
    let number = parseFloat(value).toFixed(2).split('.');

    number[0] = number[0].split(/(?=(?:...)*$)/).join('.');

    return number.join(',');
}

export default FormatCurrency;