export const formattedAmount = (amount) => { 
    return new Intl.NumberFormat('id-ID', {
  style: 'currency',
  currency: 'IDR'
}).format(amount)

}