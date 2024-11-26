setTimeout(function(name,gender){
    console.log(name + " is " + gender);
}, 1000, "Tom", "boy");

setInterval((name,gender) => {
    console.log(name + " is " + gender);
}, 1000, "Tom1", "boy1");