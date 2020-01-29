const FormatPlots = (price, minPricePlot) => {
    let options = [];
    let pricePerPlot = price / minPricePlot;

    let plots = 0;

    if(pricePerPlot > 0 && pricePerPlot < 2) {
        plots = 1;
    } else if(pricePerPlot) {
        if(pricePerPlot > 12)
            plots = 12;
        else {
            plots = Math.floor(pricePerPlot);
        }
    }

    for(var i = 1; i <= plots; i++)
    {
        let pricePlot = price / i;

        options.push({
            number: i,
            price: pricePlot.toFixed(2),
            total: price,
            interest: i >= 5,
        });
    }

    return options;
}

export default FormatPlots