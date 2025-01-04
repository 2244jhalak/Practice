

const fetchData = async () => {
    try {
       const data = await new Promise((resolve,reject)=> {
        const infoData = {
            name : "Nakib Hasan Jhalak",
            designation : "Front-End Developer"
        }
        const status = true;
        console.log("Data processing.....");
        if(status){
            setTimeout(()=>{
                resolve(infoData);
            },2000)
        }
        else{
            reject("Please fetch your data properly")
        }
       }) 
       console.log(data);
    } catch (error) {
        console.log(error.message)
    }
}
fetchData();