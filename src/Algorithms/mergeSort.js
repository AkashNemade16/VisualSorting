function generateRandomNum(){
    const a = [];
    for(var i=0; i<100; i++){
    a[i] = Math.floor(Math.random()*100+1);
    return a;
    }
    }

    console.log(generateRandomNum())