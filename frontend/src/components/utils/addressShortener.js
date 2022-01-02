export const addressShortener = (address) => {
    return address.slice(0,3) + "..." + address.slice(address.length-3);
} 