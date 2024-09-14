const url = 'http://11092j276k4q7gr29tbkq07o7fd612rqg.bc.20.rs/xxxx?xxx=xxx';

fetch(url)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.text();
  })
  .then(data => {
    console.log('Response:', data);
  })
  .catch(error => {
    console.error('There was a problem with the fetch operation:', error);
  });
