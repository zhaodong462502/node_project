for (var i = 0; i < 5; i++) {
    setTimeout(function() {
        console.log("var:"+i);
    }, 1000);
}

for (let i = 0; i < 5; i++) {
    setTimeout(function() {
        console.log("let:"+i);
    }, 1000);
}