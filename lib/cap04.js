module.exports = () => {
    "use strict";

    const areObjectType = (ob1, ob2) => {
        return (typeof ob1 === 'object' && ob1 !== null) && (typeof ob2 === 'object' && ob2 !== null);
    };

    function sameType(ob1, ob2) {
        return typeof ob1 === typeof ob2;
    }

    function sameNumberOfProperties(ob1, ob2) {
        return Object.keys(ob1).length === Object.keys(ob2).length;
    }

    const deepEqual = (ob1, ob2) => {
        if(!areObjectType(ob1,ob2)){ return ob1 === ob2; }
        if(!sameType(ob1, ob2)){ return false; }
        if(!sameNumberOfProperties(ob1, ob2)){ return false; }

        for(let prop in ob1){
            if(ob1.hasOwnProperty(prop)){
                const propertyOb1 = ob1[prop];
                if(!ob2.hasOwnProperty(prop)){ return false; }
                const propertyOb2 = ob2[prop];
                if(!deepEqual(propertyOb1, propertyOb2)){ return false; }
            }
        }

        return true;
    };

    return {
        deepEqual:deepEqual,
        areObjectType: areObjectType
    };
};