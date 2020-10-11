export const isEmptyObject = obj => obj ? Object.keys(obj).length === 0 && obj.constructor === Object : true;
export const getRandomPariority = priorities => {
    if ((typeof priorities) !== 'object' || priorities.constructor !== Array) return;
    const ri = Math.floor(Math.random() * priorities.length)
    return priorities[ri]
}