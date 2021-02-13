exports.min = function min(array) {
    if (!array || array.length === 0) {
        return 0;
    }

    let minValue = array[0];

    array.forEach((item) => {
        if (minValue > item) {
            minValue = item;
        }
    });

    return minValue;
};

exports.max = function max(array) {
    if (!array || array.length === 0) {
        return 0;
    }

    let maxValue = array[0];

    array.forEach((item) => {
        if (maxValue < item) {
            maxValue = item;
        }
    });

    return maxValue;
};

exports.avg = function avg(array) {
    if (!array || array.length === 0) {
        return 0;
    }

    return (
        array.reduce((acc, item) => {
            return acc + item;
        }) / array.length
    );
};
