module.exports = () => {
    "use strict";

    const flattening = (arrays) => {
        return arrays.reduce((array1, array2) => {
            return array1.concat(array2);
        }, []);
    };

    return {
        flattening: flattening
    };
};
