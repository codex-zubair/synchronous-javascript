console.log("hey! wait for me. i'm Rock!");
var timeID = setTimeout(() => {
    console.log(`hey sorry! 
I'm back Thanks for waiting!`);

    if (timeID) {
        console.log("oh No! i'm late!");
        clearTimeout(timeID2);
    }

}, 5000);
console.log(`alright!
 we are waiting for you:
 3 seconds ok!
 come fast!`);



var timeID2 = setTimeout(() => {
    console.log(`Alright! No Problem!`);
}, 9000);

