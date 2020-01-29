const CalculatePercentCouponByDiscount = (discount, price) => {
    let discountValue = (parseFloat(discount) * 100);
    
    return (parseFloat(discountValue) / price);
}

export default CalculatePercentCouponByDiscount;