// export default function returnHowManyArguments(...theArgs) {
//     let c = 0;
//     for (const arg of theArgs) {
//         c += 1;
//     }
//     return c;
// }

const returnHowManyArguments = (...theArgs) => {
    let c = 0;
    for (const arg of theArgs) {
        c += 1;
    }
    return c;
}

export default returnHowManyArguments;