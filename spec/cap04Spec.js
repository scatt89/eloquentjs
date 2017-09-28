describe('deepEqual module test', () => {
    "use strict";

    const DeepEqual = require('../lib/cap04');
    const areObjectType = DeepEqual().areObjectType;
    const deepEqual = DeepEqual().deepEqual;

    it('When ob1 and ob2 are both objects not null return true', function() {
        expect(true).toEqual(areObjectType({},{}));
    });

    it('When ob1 and ob2 are both null return false', function() {
        expect(false).toEqual(areObjectType(null,null));
    });

    it('When ob1 or ob2 are null return false', function() {
        expect(false).toEqual(areObjectType({},null));
    });

    it('When ob1 and ob2 are null return true', function() {
        expect(true).toEqual(deepEqual(null,null));
    });

    it('When ob1 or ob2 are different types return false', function() {
        expect(false).toEqual(deepEqual(1,{}));
    });

    it('When ob1 and ob2 are primitives with equal values return true', function() {
        expect(true).toEqual(deepEqual(1,1));
    });

    it('When ob1 and ob2 are primitives with different values return true', function() {
        expect(false).toEqual(deepEqual(2,1));
    });

    it('When ob1 and ob2 are equal objects return true', function() {
        const ob1 = {"hola":1, "que":2, "tal":3};
        const ob2 = {"hola":1, "que":2, "tal":3};
        expect(true).toEqual(deepEqual(ob1,ob2));
    });

    it('1 When ob1 and ob2 are different objects return false', function() {
        const ob1 = {"hola":1, "que":2, "tal":3};
        const ob2 = {"hola":1, "que":2, "tal":4};
        expect(false).toEqual(deepEqual(ob1,ob2));
    });

    it('2 When ob1 and ob2 are different objects return false', function() {
        const ob2 = {"hola":1, "que":2, "tal":3, 1:1};
        const ob1 = {"hola":1, "que":2, "tal":3};
        expect(false).toEqual(deepEqual(ob1,ob2));
    });

    it('3 When ob1 and ob2 are different objects return false', function() {
        const ob2 = {"hola":1, "que":2, "tal":3, 1:1};
        const ob1 = {"hola":1, "que":2, "tal":3, 1:{1:1, 2:2}};
        expect(false).toEqual(deepEqual(ob1,ob2));
    });
});