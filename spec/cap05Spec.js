describe('Array patterns test', () => {
    "use strict";

    const people = [
        {"name":"anna", age:1},
        {"name":"pablo", age:2},
        {"name":"maria", age:3},
        {"name":"sara",  age:4},
        {"name":"rafa",  age:5}
    ];

    it('When redoce is invoked in people array the result should be',() => {
        expect(15).toEqual(people.map((person) => person.age).reduce((total, current) => total + current), 0);
    });

});

const cap05Module = require('../lib/cap05');

describe('Flattening Test', () => {
    "use strict";

    const flatteningObject = cap05Module.flattening;

    it('when arrays invoked, result should be only one array', () => {
        expect([1,2,3,4,5,6]).toEqual(flatteningObject([[1,2,3],[4,5],[6]]));
        expect([1,2,3,4,5,6]).toEqual(flatteningObject([[1,2,3],[4,5],[6],[]]));
        expect([1,2,3,4,5,6]).toEqual(flatteningObject([[],[1,2,3],[4,5],[6]]));
        expect([10,20,30,30]).toEqual(flatteningObject([[],[10],[20],[30,30]]));
        expect([1,2,3,4,5,6]).toEqual(flatteningObject([[],[1,2,3],[4,5],[6]]));
        expect([1]).not.toEqual(flatteningObject([[],[]]));
    });

    it('when arrays with multiply empty arrays is invoked, result should be only one empty array', () => {
        expect([]).toEqual(flatteningObject([[],[],[]]));
    });
});

describe('Multi level flattening', () => {
    'use strict';

    const multiLevelFlattening = cap05Module.multiLevelFlattening;

    it('When pass multilevel array, should be flatt and return only one array', () => {
        expect([1,2,3,4,{five:5}]).toEqual(multiLevelFlattening([1,[2],[[3],4,{five:5}]]));
        expect([1,2,3,4]).toEqual(multiLevelFlattening([1,[2],[[3],4]]));
        expect([1,2,3,4,5,6,7,8,9]).toEqual(multiLevelFlattening([[[1],[2]],[3],[4,5,6],[[[7],8],9,[[[]]]]]));
    });
});

const ancestry = JSON.parse(require('../lib/resources/ancestry.js'));

describe('Ancestry average calculation', () => {
    'use strict';

    const calculateAncestryAverage = cap05Module.calculateAncestryAverage;

    it('average should be', () => {
        expect(30.9375).toEqual(calculateAncestryAverage(ancestry));
    });
});

describe('Historial life expectancy', () => {
    'use strict';

    const historicalLifeExpectancy = cap05Module.historicalLifeExpectancy;

    it('historicalLifeExpectancy should be pass if array return are equal', () => {
        expect(historicalLifeExpectancy(ancestry)).toHistoricalLifeExpectancyEqual([{century: '16', average: '43.5'},{century: '17', average:'51.2'},{century: '18', average: '52.8'},{century: '19', average:'54.8'},{century: '20', average:'84.7'},{century: '21', average:'94.0'}]);
    });
});