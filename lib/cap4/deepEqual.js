module.exports = () => {
    "use strict";

    let areObjectType = (ob1, ob2) => {
        return (typeof ob1 === 'object' && ob1 !== null) && (typeof ob2 === 'object' && ob2 !== null);
    };

    function sameType(ob1, ob2) {
        return typeof ob1 === typeof ob2;
    }

    let deepEqual = (ob1, ob2) => {
        if(!areObjectType(ob1,ob2)){ return ob1 === ob2; }
        if(!sameType(ob1, ob2)){ return false; }

        for(let index = 0 ; index < Object.keys(ob1).length ; index++){
            const propertieOb1 = Object.keys(ob1)[index];
            console.log(ob1[propertieOb1]);
            const propertieOb2 = Object.keys(ob2)[index];
            console.log(ob2[propertieOb2]);
            if(!deepEqual(ob1[propertieOb1], ob2[propertieOb2])){ return false; }
        }

        return true;
    };

    return {
        deepEqual:deepEqual,
        areObjectType: areObjectType
    };
};