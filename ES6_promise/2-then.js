const handleResponseFromAPI = (promise) => {
    return new Promise((resolve, reject) => {
        resolve({status: 200, body: 'success'});
        reject(new Error({}));
    })
}

handleResponseFromAPI()
    .then(value => {
        console.log(value)
    })
    .catch(error => {
        console.log(error);
    })
    .finally(() => {
        console.log('Got a response from the API')
    });

export default handleResponseFromAPI;