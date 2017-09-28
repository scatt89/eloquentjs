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

describe('Flattening Test', () => {
    "use strict";

    const cap05Module = require('../lib/cap05');
    const flatteningObject = cap05Module().flattening;

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