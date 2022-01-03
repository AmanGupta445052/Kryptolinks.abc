const indianFormat = (number) => {
    const num = number.toString();
    let lastThree = num.substring(num.length-3);
    let otherNumbers = num.substring(0,num.length-3);
    if(otherNumbers != '')
        lastThree = ',' + lastThree;
    return otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ",") + lastThree;
}


export const ethPriceInINR = (totalAmount,ethPriceInUSD) => {
    const priceInINR =  Math.floor(totalAmount * ethPriceInUSD * 75);
    return `${indianFormat(priceInINR)}`;
}
