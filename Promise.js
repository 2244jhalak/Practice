
const fetchData = () => {
    console.log("Data fetching.....");
    return new Promise((resolve,reject)=> {
        const status = true;
        const infoData = {
            name : "Nakib Hasan Jhalak",
            designation : "Front-End Developer"
        }
        if(status){
            setTimeout(()=> {
                resolve(infoData)
            },2000)
        }
        else{
            reject("Something went wrong")
        }
    })
}

fetchData()
.then(data=>console.log(data))
.catch(error=>console.error(error))