import signUpUser from "./4-user-promise.js"
import uploadPhoto from "./5-photo-reject.js"

const handleProfileSignup = (firstName, lastName, fileName) => {
    const promise1 = signUpUser(firstName, lastName);
    const promise2 = uploadPhoto(fileName);

    return Promise.allSettled([promise1, promise2])
        .then(([status, value]) => {
            status,
            value
        });
};

export default handleProfileSignup;