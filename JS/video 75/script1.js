console.log('hey I am clog1');

function loadscript(src, callback) {
    let sc = document.createElement("script")
    sc.src = src;
    sc.onload = callback("Atrajit")
    document.body.append(sc)
}
document.getElementById("button").style.backgroundColor=getRandomColor();
loadscript("script3.js",callback)