function UHR() {
    var jetzt = new Date(),
        h = jetzt.getHours(),
        m = jetzt.getMinutes(),
        s = jetzt.getSeconds();
        document.getElementById('UHR').innerHTML =  h+':' +m+ ':' +s;
}
setInterval(function wiederholen() { 
    // alle 3 Sekunden ausführen 
    UHR(); 
}, 1000);
