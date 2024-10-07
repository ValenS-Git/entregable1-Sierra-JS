//Programa que se basa en la compra de juegos y se muestra en consola los juegos obtenidos
function compraStockDeVidejuegos(){

    let videojuegos = [];
    do {
        let nombre = prompt("Introduzca el titulo del juego a comprar (o escriba 'salir' para finalizar)");
        if (nombre.toLowerCase() != "salir") {
            videojuegos.push({
                nombre
            })
        } else {
            alert("Finalizo su compra de videojuegos");
            break;
        }
    } while(true)
    console.log("Inventario de juegos:");
    for(let i = 0; i < videojuegos.length; i++) {
        let videojuego = videojuegos[i];
        let x = i;
        let numero = x;
        console.log (`${numero} - ${videojuego.nombre}`);
    }
}
compraStockDeVidejuegos();