// Get the form and suggestion section from the page
const form = document.getElementById('weatherForm');
const suggestionSection = document.getElementById('suggestion');

// Listen for the form submit event
form.addEventListener('submit', function(event) {
  // Stop the form from refreshing the page
  event.preventDefault();

  // Get the selected weather and temperature value
  const weather = document.getElementById('weather').value;
  const temperature = document.getElementById('temperature').value;

  // Create a variable for the message
  let message = '';

  // Check the weather and set the message
  if (weather === 'sunny') {
    message = `It's sunny! 😎 Don't forget your sunglasses and sunscreen.`;
  } else if (weather === 'cloudy') {
    message = `It's cloudy ☁️. You might want a light jacket just in case.`;
  } else if (weather === 'rainy') {
    message = `It's rainy! 🌧️ Bring an umbrella and wear waterproof shoes.`;
  } else if (weather === 'snowy') {
    message = `It's snowy! ❄️ Wear a warm coat, gloves, and boots.`;
  } else if (weather === 'windy') {
    message = `It's windy! 💨 A windbreaker or hoodie is a good idea.`;
  } else {
    message = `Please select the weather.`;
  }

  // You can also give extra advice based on temperature
  if (temperature !== '') {
    const temp = Number(temperature);
    if (temp < 40) {
      message += ` It's pretty cold! 🧣 Dress warmly.`;
    } else if (temp > 85) {
      message += ` It's hot outside! 🥤 Stay hydrated.`;
    }
  }

  // Show the message in the suggestion section
  suggestionSection.innerHTML = `<p>${message}</p>`;
});
