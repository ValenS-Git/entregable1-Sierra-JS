//creamos la funcion de compra de videojuegos
function compraStockDeVidejuegos(){

    //se crea el inventario de los videojuegos
    let videojuegos = [];
    do {
        //Le pedimos al usuario que juego comprar para stockearse
        let nombre = prompt("Introduzca el titulo del juego a comprar (o escriba 'salir' para finalizar)");
        //Aca se verifica si el usuario puso un juego o finalizo la compra
        if (nombre.toLowerCase() != "salir") {
            videojuegos.push({
                nombre
            })
        } else {
            alert("Finalizo su compra de videojuegos");
            break;
        }
    } while(true)
    //Una vez finalizado el bucle de compra, se muestra en consola lo que compro.
    console.log("Inventario de juegos:");
    for(let i = 0; i < videojuegos.length; i++) {
        let videojuego = videojuegos[i];
        let x = i;
        let numero = x;
        console.log (`${numero} - ${videojuego.nombre}`);
    }
}
compraStockDeVidejuegos();