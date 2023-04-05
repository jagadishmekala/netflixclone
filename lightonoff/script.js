function switchoff(){
    document.getElementById("bulbo").src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-off-img.png";
    document.getElementById("cato").src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-eyes-img.png";
    document.getElementById("son").style.backgroundColor="green";
    document.getElementById("sof").style.backgroundColor="red";
}
function switchon(){
    document.getElementById('bulbo').src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-on-img.png"
    document.getElementById("cato").src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-img.png";
    document.getElementById("son").style.backgroundColor="red";

    document.getElementById("sof").style.backgroundColor="grey";
}