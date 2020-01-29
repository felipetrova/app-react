const NumberToBRL = (number) => {
    var BRL = '' + number;

    BRL = BRL.replace(/([0-9]{2})$/g, ".$1");

    if( BRL.length > 6 )
        BRL = BRL.replace(/([0-9]{3}),([0-9]{2}$)/g, ".$1,$2");

    return BRL;
}

export default NumberToBRL;