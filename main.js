const amountInput = document.getElementById("amount");
const fromCurrencySelect = document.getElementById("from-currency");
const toCurrencySelect = document.getElementById("to-currency");
const convertButton = document.getElementById("convert-button");
const result = document.getElementById("result");

convertButton.addEventListener("click", function(event) {
  event.preventDefault();
  const amount = amountInput.value;
  const fromCurrency = fromCurrencySelect.value;
  const toCurrency = toCurrencySelect.value;
  fetch(`https://api.exchangerate-api.com/v4/latest/${fromCurrency}`)
    .then(response => response.json())
    .then(data => {
      const exchangeRate = data.rates[toCurrency];
      const convertedAmount = (amount * exchangeRate).toFixed(2);
      result.innerHTML = `${amount} ${fromCurrency} convertendo ${convertedAmount} ${toCurrency}.`;
    })
    .catch(error => {
      result.innerHTML = "Erro, tente novamente";
      console.error(error);
    });
});

