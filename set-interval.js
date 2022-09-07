increment = 0;
console.log("working: " + increment);
const interValID = setInterval(() => {
    console.log(increment++);
    setTimeout(() => {
        console.log("working: " + increment);

        if (increment >= 5) {
            clearInterval(interValID);
            console.log(increment++);
            
        }

    }, 1000)
}, 1000)