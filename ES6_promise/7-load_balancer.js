const loadBalancer = (chinaDownload, USDownload) => {
    return Promise.race([chinaDownload, USDownload])
        .then(value => {
            return value;
        })
}

export default loadBalancer;