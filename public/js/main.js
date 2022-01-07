const cityname = document.getElementById('cityname');
const submitbtn = document.getElementById('submitbtn');
const city_name = document.getElementById('city_name');
const temp_val = document.getElementById('temp_val');
const temp_status = document.getElementById('temp_status');
// const data_hide = document.querySelector('.middle_layer');


const getinfo = async(event) => {
    event.preventDefault();
    let cityval= cityname.value;

    if(cityval === ""){
        city_name.innerText = ` Plz write the name of your city`;
        // data_hide.classList.add('datahide');
    }
    else{
        try{
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityval}&units=metric&appid=9ceb6173cef108b594c5beaf4874b827`;
            const response = await fetch(url);
            const data = await response.json();
            // console.log(data);
            const arrdata = [data];

            city_name.innerText = `${arrdata[0].name}, ${arrdata[0].sys.country}`;
            temp_val.innerText = arrdata[0].main.temp;
            temp_status.innerText = arrdata[0].weather[0].main;
            
            
            // const tempmod = arrdata[0].weather.main;

            // if(tempmod == "Clear"){
            //     temp_status.innerText = "<i class='fas fa-sun' style='color: #eccc68;' ></i>";
            // }
            // else if(tempmod == "Clouds"){
            //     temp_status.innerText = "<i class='fas fa-cloud' style='color: #f1f2f6;' ></i>";
            // }
            // else if(tempmod == "Rain"){
            //     temp_status.innerText = "<i class='fas fa-cloud-rain' style='color: #a4b0be;' ></i>";
            // }
            // else{
            //     temp_status.innerText = "<i class='fas fa-sun' style='color: #eccc68;' ></i>";
            // }
            // data_hide.classList.remove('datahide');
        }catch{
            city_name.innerText = ` Plz enter the name of your city properly`;
            // data_hide.classList.add('datahide');
        }
    }
}

submitbtn.addEventListener('click',getinfo);