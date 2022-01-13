export const totalAmount = (transactions) => {
    let total = 0;
    transactions.map((transaction) => {
        total += Number(transaction["amount"])
    })
    return total.toFixed(2)
}