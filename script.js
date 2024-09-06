// Fetch the JSON data
fetch('brokerage.json')
  .then(response => response.json())
  .then(data => {
    displayBrokerageInfo(data.Brokerage);
    displayOffices(data.Offices);
    displayNews(data['Private-News']);
  })
  .catch(error => console.error('Error fetching the JSON:', error));

// Function to display brokerage info
function displayBrokerageInfo(brokerage) {
  const brokerageDiv = document.getElementById('brokerage-info');
  brokerageDiv.innerHTML = `
    <h2>${brokerage.BrokerageName}</h2>
    <p><strong>ID:</strong> ${brokerage.ID}</p>
    <img src="${brokerage.DisplayPicture}" alt="${brokerage.BrokerageName}" width="150">
  `;
}

// Function to display office data
function displayOffices(offices) {
  const officesDiv = document.getElementById('offices');
  offices.forEach(office => {
    const officeDiv = document.createElement('div');
    officeDiv.classList.add('office');
    officeDiv.innerHTML = `
      <h3>${office.OfficeName}</h3>
      <p><strong>Address:</strong> ${office.AddressLineOne}, ${office.City}, ${office.State} ${office.Zip}, ${office.Country}</p>
      <p><strong>Phone:</strong> ${office.Phone}</p>
      <p><strong>Email:</strong> <a href="mailto:${office.Email}">${office.Email}</a></p>
    `;
    officesDiv.appendChild(officeDiv);
  });
}

// Function to display private news
function displayNews(newsItems) {
  const newsDiv = document.getElementById('news');
  newsItems.forEach(item => {
    const newsItemDiv = document.createElement('div');
    newsItemDiv.classList.add('news-item');
    newsItemDiv.innerHTML = `
      <h3>${item.title}</h3>
      <p>${item.meta_description}</p>
      <img src="${item.image}" alt="${item.image_title}" width="150">
      <p><strong>Author:</strong> ${item.author}</p>
    `;
    newsDiv.appendChild(newsItemDiv);
  });
}
