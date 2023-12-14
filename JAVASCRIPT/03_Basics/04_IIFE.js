// Imediately Invoked function Expression (IIFE)


(function chai(){
    //name IIFE i
    console.log(`DB CONNECTED`);
})();

((name) => {
    console.log(`DB CONNECTED TWO ${name}`);
})('iqbal')

