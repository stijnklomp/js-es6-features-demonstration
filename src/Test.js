export const firstClass = () => {
    let count = 0

    const increment = () => {
        count += 1
    }

    return {
        getCount: () => count,
        increment
    }
}

let count = 0

export const secondClass = {
    getCount: () => count,
    increment: () => {
        count += 1
    }
}

export const thirdClass = (() => {
    let count = 0

    const increment = () => {
        count += 1
    }

    return {
        getCount: () => count,
        increment
    }
})();
