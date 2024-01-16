
// const getTemp = (latitude, longitude, Place_name) => { 
//     console.log(latitude, longitude)
//     fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,wind_speed_10m&hourly=temperature_2m,relative_humidity_2m,wind_speed_10m`)
//     .then(res => res.json())
//     .then(res =>{
//         if(document.getElementById('temp_1')) {
//             document.getElementById('temp_1').remove()
//         }
//         console.log(res.current.temperature_2m)
//         const temp = document.createElement('h3')
//         const place = document.createTextNode("Tagadējā temperatūra: " + res.current.temperature_2m)
//         temp.id = 'temp_1'
//         temp.appendChild(place);

//         document.getElementById(Place_name).appendChild(temp);
//     }) 
// }

const Submit = (a) => {
    a.preventDefault()
    console.log("aaa")
    const q1 = document.getElementById('q1')
    if(q1.value==""){
        console.log("dasdas")
    }
    
}

console.log("donkey")

