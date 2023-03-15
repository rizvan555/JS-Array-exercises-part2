const checkCelsius = () => {
  let fahrenheit = [0, 32, 45, 50, 75, 80, 99, 120];

  const celsiusResult = fahrenheit.map((num) =>
    Math.round((num - 32) / 1.8).toFixed()
  );
  return celsiusResult;
};
console.log(checkCelsius());
