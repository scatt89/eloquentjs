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

    const getCentury = year => Math.ceil(year / 100);

    const getLivedYears = person => person.died - person.born;

    const populateCenturyAges = ancestry => {
        let centuryMap = {};
        ancestry.forEach(person => {
            const century = getCentury(person.died);
            centuryMap[century] = centuryMap[century] || [];
            centuryMap[century].push(getLivedYears(person));
        });
        return centuryMap;
    };

    const mapToList = centuryAges => {
        let list = [];
        const centuries = Object.keys(centuryAges);

        centuries.forEach(century => {
            list.push({century : century, average: average(centuryAges[century]).toFixed(1)});
        });

        return list;
    };

    const historicalLifeExpectancy = ancestry => {
        const centuryAges = populateCenturyAges(ancestry);
        return  mapToList(centuryAges);
    };

    const customEvery = (array, _function) => array.every(element => _function(element));

    const customSome = (array, _function) => array.some(element => _function(element));

    return {
        flattening: flattening,
        multiLevelFlattening: multiFlattening,
        calculateAncestryAverage: calculateAverage,
        historicalLifeExpectancy: historicalLifeExpectancy,
        customEvery: customEvery,
        customSome: customSome
    };
})();

