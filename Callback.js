const fetchData = callback => {

      console.log("Data Fetching.....");

      const infoData = {
        name : "Nakib Hasan Jhalak",
        designation : "Front-End Developer"
      }

      setTimeout(()=>{
        callback(infoData);
      },2000)

}

const getData = data => {
    
      console.log(data);

}

fetchData(getData);
