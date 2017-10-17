module.exports = (() => {
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

    const average = (array) => {
        const plus = (a, b) =>  a + b;
        return array.reduce(plus, 0) / array.length;
    };

    const motherIsNotNull = person => person.mother !== null;

    const motherExists = (person, index, personArray) => {
        return personArray.find(anotherPerson => anotherPerson.name === person.mother);
    };

    const calculateAverage = (ancestry) => {
        const childrenArray = ancestry
            .filter(motherIsNotNull)
            .filter(motherExists);

        const ages = (ancestry, childrenArray) => {
            const motherAgeWhenChildBorn = person => {
                return person.born - ancestry.find(mother => mother.name === person.mother).born;
            };
            return childrenArray.map(motherAgeWhenChildBorn);
        };

        return average(ages(ancestry, childrenArray));
    };

    return {
        flattening: flattening,
        multiLevelFlattening: multiFlattening,
        calculateAncestryAverage: calculateAverage
    };
})();

