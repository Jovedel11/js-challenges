const degree = document.querySelector('.degree')

async function fetchCity(city) {
  const weatherAppKey = 'd10bc0cc5b7d421a95d110626251407';
  const url = `http://api.weatherapi.com/v1/current.json?key=${weatherAppKey}&q=${city}`
  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error(`Error fetching ${response.status}`);
    const data  = await response.json();
    console.log(`Temp of ${city}: ${data.current.temp_f}`)
    console.log(data.current)
  } catch (error) {
    console.log('Unexpected Error Occurred')
  }
}

fetchCity("London")

