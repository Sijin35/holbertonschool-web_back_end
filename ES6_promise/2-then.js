const handleResponseFromAPI = (promise) => {
    const promise1 = new Promise((resolve, reject) => {
        resolve({status: 200, body: 'success'});
        reject(new Error({}));
    })
    
    promise1
        .then(value => {
            console.log(value)
        })
        .catch(error => {
            console.log(error);
        })
        .finally(() => {
            console.log('Got a response from the API');
        });
}

export default handleResponseFromAPI;