//callback function 
const callFriend=(name)=>{
    console.log("Now I am free ! Calling"+name)
}

//main function
const doStudy=(callback)=>{
    console.log("I am Studying....");

    setTimeout(()=>{
        console.log("Study Finished");
        callback("My Friend");
    },3000)
}

doStudy(callFriend);