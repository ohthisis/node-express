const fetchData= async ()=>{
    const apiurl=localStorage.getItem("apiurl");

    if(apiurl){
        const response=await fetch(`${apiurl}/users`);
        const data=response.json();
        console.log(data);
    }
    else{
        window.location.href="/api";
    }
};
fetchData()