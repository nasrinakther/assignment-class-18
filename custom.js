document.querySelector("#inputs").addEventListener("input", function(e){
    let meter = e.target.value;
    
    let centimeter = meter * 100;
    let milimeter = meter * 1000;
    let kilometer = meter * 0.001;
    let foot = meter * 3.280839895;
    let inchi = meter * 39.37007874;

    document.querySelector("#centi").innerHTML = centimeter;
    document.querySelector("#milimeter").innerHTML = milimeter;
    document.querySelector("#kilometer").innerHTML = kilometer;
    document.querySelector("#foot").innerHTML = foot;
    document.querySelector("#inchi").innerHTML = inchi;

})