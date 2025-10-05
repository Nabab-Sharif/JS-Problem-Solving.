
const makeBreakfast=(callback)=>{
    console.log("Cooking breakfast....");  
    
    setTimeout(()=>{
        console.log("Breakfast is ready");
        callback();
    },3000);
}

function eatBreakfast(){
    console.log("Eating breakfast now....")
}

makeBreakfast(eatBreakfast);
