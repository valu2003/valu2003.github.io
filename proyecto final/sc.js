function vereficaredad(edad){
    if (edad>=18){
        alert ("bienvenido");}
        else{
            alert("entra al sitio bajo su responsabilidad")
        }
    }
    let edad=parseFloat(prompt("introduce su edad"));
    console.log(vereficaredad(edad))

function calcularenvio (distanciakm){
    if (distanciakm<=40){
        alert ("el envios es gratis");}
        else{
            alert("el envio no es gratis")
        }
    }
    let distancia=parseFloat(prompt("introduce distancia en kilometros"));
    console.log(calcularenvio(distancia))
    window.addEventListener(
        'beforeunload', function(event)
        {
            event.preventDefault();
            alert('cuidado esta abandondo el sitio');
        });
    
