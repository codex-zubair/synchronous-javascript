increment = 0;


console.log("working: " + increment);
// !Stored Value For ID.
const interValID = setInterval(() => {
    console.log(increment++);
    // !nested interVal.
    setTimeout(() => {
        console.log("working: " + increment);

        // !Fun With SetTimeOut.
        if (increment >= 5) {
            clearInterval(interValID);
            console.log(increment++);

        }

    }, 1000)
}, 1000)