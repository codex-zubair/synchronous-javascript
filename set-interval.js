increment = 0;

synchronous = async()=> {
   
    try{
        
        // !Stored Value For ID.
        
        // Checking Await... by fetch...


        // ! We don't need wait so no wait... git push
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
    }
    catch (error)
    {
        console.log(error);
    }

    finally
    {

        console.log("Our Mission is DONE!")
        console.log("working: " + increment);
        // data =  response.json();
        // console.log(data);
    }
}

synchronous();