const makeRequest = async(url, method) => {
    try{
        const result = await $.ajax({
            url: url,
            method: method,
        })
        return result;
    }catch(error){
        console.log(error)
    }
};

const getData = () => {
    makeRequest("http://numbersapi.com/1/30/date?json", "GET").then(
        (res) => console.log(res)
    )};
getData();