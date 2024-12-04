// export const dateFormatter = new Intl.DateTimeFormat('pt-BR')

const priceFormatter = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
});

// priceFormatter.format(summary.income)}

const currencyFormatter = (amount: number) => {
  return priceFormatter.format(amount);
};

export default currencyFormatter;
