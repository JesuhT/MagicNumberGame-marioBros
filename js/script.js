var numeroSecreto = Math.floor(Math.random() * 100) + 1;
var intentos = 0;
var puntosT = 0;

function adivinarNumero() {
    const guess = parseInt(document.getElementById("guess").value);

    if (isNaN(guess) || guess < 1 || guess > 100) {
        document.getElementById("mensaje").textContent =
            "Por favor, ingresa un número válido entre 1 y 100.";
    } else {
        intentos++;

        if (guess === numeroSecreto) {
            document.getElementById(
                "mensaje"
            ).textContent = `¡Felicidades! Adivinaste el número en ${intentos} intentos.`;
            document.getElementById("reinicio").style.display = "flex";
            document.getElementById("button").style.display = "none";
            document.getElementById("guess").style.display = "none";
            document.getElementById("peach").src = "assets/gif/kiss.webp";
            document.getElementById("peach").style.transition="transform 0.5s ease";
            document.getElementById("peach").style.height = "7rem";
            document.getElementById("mario").src = "assets/gif/bowser-crying.gif";
            document.getElementById("mario").style.width = "5rem";
            document.getElementById("mario").style.paddingLeft = "300px";
            document.getElementById("bowser").style.display = "none";
            if(intentos<2){
                puntosT+=250;
            }
            intentos=0;
            puntosT+=100;
            document.getElementById("cantidad").textContent = puntosT;
            numeroSecreto = Math.floor(Math.random() * 100) + 1;
        } else {
            let mensaje = "";
            
            if (numeroSecreto > guess) {
                mensaje = "El numero es mayor.";
            } else {
                mensaje = "El numero es menor.";
            }

            document.getElementById("mensaje").textContent = mensaje;
            let distancia = guess - numeroSecreto;
            // Movimiento de Mario hacia Peach
            if(intentos<3){
                puntosT+=Math.floor(Math.abs(distancia/2));
            } else if (intentos>2) {
                puntosT+=Math.floor(Math.abs(distancia/2)-20);                
            }
            document.getElementById("cantidad").textContent = puntosT;
            if (intentos < 10) {

                const maxMovement = 400; // La máxima distancia que Mario puede moverse hacia la derecha

                let movimiento = (Math.abs(distancia) * 850) / maxMovement;// Ajusta el movimiento dentro del contenedor
                let paddingM = parseFloat(document.getElementById("mario").style.paddingLeft);
                let movimientoC = Math.abs(distancia) * 2 + paddingM;
                // Limita el movimiento dentro del contenedor
                movimiento = Math.min(movimiento, maxMovement);

                if (distancia > 0) {
                    movimiento = Math.min(movimientoC, maxMovement);
                    document.getElementById("mario").style.paddingLeft = `${movimientoC}px`;
                }
                else
                    document.getElementById("mario").style.paddingLeft = `${movimiento}px`;


                // document.getElementById("mario").style.transform = `translateX(${movimiento}PX)`;


            } else {
                // Bowser aparece y Mario muere
                document.getElementById("peach").src = "assets/gif/bowser-dancing.gif";
                document.getElementById("bowser").style.display = "none";
                document.getElementById("mensaje").textContent =
                    "¡Bowser se llevó a Peach y Mario murió!";
                document.getElementById("button").style.display = "none";
                document.getElementById("guess").style.display = "none";
                document.getElementById("mario").style.display = "none";
                document.getElementById("reinicio").style.display = "flex";
                numeroSecreto = Math.floor(Math.random() * 100) + 1;
            }

        }
    }
}
function reiniciar() {
    document.getElementById("reinicio").style.display = "none";
    intentos = 0;
    document.getElementById("button").style.display = "inline";
    document.getElementById("guess").style.display = "inline";
    //Vuelven a aparecer mario y peach
    document.getElementById("peach").src = "assets/gif/princess-peach.gif";
    document.getElementById("mario").src = "assets/gif/mj.gif";
    document.getElementById("mario").style.paddingLeft = "400px";
    document.getElementById("mario").style.display = "";
    document.getElementById("bowser").style.display = "";
    document.getElementById("mensaje").textContent = "";
    puntosT=0;
    document.getElementById("cantidad").textContent = puntosT;
}
