const formButton = document.querySelector('#btn');

const API_KEY = 'cMV8oF7PtSGxAWgJaEyUUpAnN7fPNUPA';

formButton.addEventListener("click", async (e) => {
  e.preventDefault();
  const searchInput = document.querySelector("#input").value;
  const url = `http://api.giphy.com/v1/gifs/search?q=${encodeURIComponent(searchInput)}&api_key=${API_KEY}&limit=5`;
  
  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error('Request failed');
    
    const data = await response.json();
    displayData(data);
  } catch (error) {
    console.log('Error:', error.message);
  }
});

const displayData = (data) => {
  const results = data.data;
  const container = document.querySelector('#results-container');
  
  container.innerHTML = '';
  
  results.forEach((result) => {
    const imageUrl = result.images.original.url;
    const imageElement = document.createElement('img');
    imageElement.src = imageUrl;
    container.appendChild(imageElement);
  });
};