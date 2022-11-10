
const contenedor = document.querySelector('.contenedor')
let elemento_jugador;
let elemento_img;

async function fulbot(){
    const get_jugadores = await fetch("https://v3.football.api-sports.io/players/topassists?season=2022&league=61",{
        "method": "GET",
	    "headers": {
		    "x-rapidapi-host": "v3.football.api-sports.io",
		    "x-rapidapi-key": "c0dace211f97a457b742b17905fa9ff2"
	    }
    })
    const data_jugadores = await get_jugadores.json()

    let arr_jugadores = data_jugadores.response
    console.log(arr_jugadores)
    get_informacion_jugadores(arr_jugadores)

}

function get_informacion_jugadores(jugadores){
    jugadores.forEach(element => {
        elemento_jugador = document.createElement('p');
        elemento_jugador.innerHTML = element.player.name
        
        elemento_img = document.createElement('img')
        elemento_img.src = element.player.photo

        contenedor.appendChild(elemento_jugador)
        contenedor.appendChild(elemento_img)
    });
}


fulbot()