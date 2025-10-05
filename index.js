
//Data Load Function (main)
const loadData=(callback)=>{
    console.log("Loading data from server.....")

    setTimeout(()=>{
        console.log("Data loaded successfully");
        callback();
    },2000)
}

//callback function
const showDashboard=()=>{
    console.log("Showing Dashboard to User...")
}

//Main Call
 loadData(showDashboard)