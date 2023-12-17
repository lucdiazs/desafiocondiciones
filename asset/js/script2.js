function calcularstikers() {
    let stikers1 = parseInt(document.getElementById("stikers1").value)
    let stikers2 = parseInt(document.getElementById("stikers2").value)
    let stikers3 = parseInt(document.getElementById("stikers3").value)
    let msg = document.getElementById("msg")

    let suma = stikers1 + stikers2 + stikers3
    if (suma <= 10){
        msg.innerHTML = "Llevas " + suma + " stikers."
    }
    else if (suma > 10){
        msg.innerHTML = "Llevas demaciados stikers!!"
    }
    else {
        msg.innerHTML = "Tienes que seleccionar una cantidad válida!"
    }
}