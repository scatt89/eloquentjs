beforeEach(() => {
    "use strict";
   jasmine.addMatchers({
       toHistoricalLifeExpectancyEqual: () => {
           return{
                compare: (actual, expected) =>{

                    let result = {};
                    result.pass = true;
                    result.message = 'historicalLifeExpectancy it\'s ok';

                    let i = 0;
                    do{
                        const actualEntry = actual[i];
                        const expectedEntry = expected[i];
                        i++;

                        result.pass = actualEntry && expectedEntry &&
                            actualEntry.century === expectedEntry.century &&
                            actualEntry.average === expectedEntry.average;

                        if(!result.pass){
                            result.message = 'historicalLifeExpectancy fails because entry ' + JSON.stringify(actualEntry) + ' is not equal ' + JSON.stringify(expectedEntry);
                        }
                    }while(result.pass && i < actual.length);

                    return result;
                }
           };
       }
   });
});