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