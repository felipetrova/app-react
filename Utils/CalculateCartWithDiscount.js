const CalculateCartWithDiscount = (amount, price) => {
    return price - ((price/100) * parseFloat(amount));
}

export default CalculateCartWithDiscount;