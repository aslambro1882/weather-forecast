document.getElementById('search-button').addEventListener('click', async function () {
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    searchField.value = '';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${searchText}&appid=27cdb0d211cd2b694df994b1501c3a7c`;
    const cityName = document.getElementById('city-name');
    cityName.innerText = searchText;
    const res = await fetch(url);
    const data = await res.json();
    displayTemp(data);
})

document.getElementById('image-01').style.display = 'none';
document.getElementById('image-02').style.display = 'none';
document.getElementById('image-03').style.display = 'none';
document.getElementById('image-04').style.display = 'none';

const displayTemp = async tempData => {
    const temperature = document.getElementById('temp');
    const currentTemp = (tempData.main.temp - 273).toFixed(1);
    temperature.innerText = currentTemp;
    tempData.weather.forEach(status => {
        console.log(status);
        const tempStatus = document.getElementById('temp-status');
        const currentStatus = status.main;
        tempStatus.innerText = currentStatus;

        console.log(tempData);

        if (currentStatus == 'Rain') {
            document.getElementById('image-02').style.display = 'inline';
            document.getElementById('image-01').style.display = 'none';
            document.getElementById('image-03').style.display = 'none';
            document.getElementById('image-04').style.display = 'none';

        }
        else if (currentStatus == 'Clouds') {
            document.getElementById('image-01').style.display = 'inline';
            document.getElementById('image-02').style.display = 'none';
            document.getElementById('image-03').style.display = 'none';
            document.getElementById('image-04').style.display = 'none';
        }
        else if (currentStatus == 'Haze') {
            document.getElementById('image-04').style.display = 'inline';
            document.getElementById('image-01').style.display = 'none';
            document.getElementById('image-02').style.display = 'none';
            document.getElementById('image-03').style.display = 'none';
        }
        else if (currentStatus == 'Clear') {
            document.getElementById('image-03').style.display = 'inline';
            document.getElementById('image-01').style.display = 'none';
            document.getElementById('image-02').style.display = 'none';
            document.getElementById('image-04').style.display = 'none';
        }


    });
}
