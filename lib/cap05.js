module.exports = () => {
    "use strict";

    const flattening = (arrays) => {
        return arrays.reduce((array1, array2) => {
            return array1.concat(array2);
        }, []);
    };

    const isDeepArray = (currentVal) => {
        return Array.isArray(currentVal) && currentVal.some((element) =>{
            return Array.isArray(element);
        });
    };

    const multiFlattening = (array) => {
        return array.reduce((beforeVal, currentVal) => {
            if(isDeepArray(currentVal)){
                return beforeVal.concat(multiFlattening(currentVal));
            }
            return beforeVal.concat(currentVal);
        }, []);
    };

    return {
        flattening: flattening,
        multiLevelFlattening: multiFlattening
    };
};
