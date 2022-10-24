function getTime(){
    let d = new Date();
    let time = d.toLocaleTimeString();
    console.log(time);
}

var loop = setInterval(getTime, 1000);
