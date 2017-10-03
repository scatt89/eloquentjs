module.exports = () => {
    "use strict";

    const flattening = (arrays) => {
        return arrays.reduce((array1, array2) => {
            return array1.concat(array2);
        }, []);
    };

    var flatt = (arrays) => {
        arrays.forEach((element) => {
            if(typeof element !== 'object'){
                result.push(element);
            }else{
                flatt(element);
            }
        });
    };

    const multiFlattening = (arrays) => {
        let result = [];
        flatt(arrays);
        console.log(result);
        return result;
    };

    return {
        flattening: flattening,
        multiLevelFlattening: multiFlattening
    };
};
