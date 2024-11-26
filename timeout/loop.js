setTimeout(function run(name,gender){
    console.log("1 ===>");

    console.log(" hello");
    setTimeout(run,1000);
    console.log("2 ===>");

  }, 1000);