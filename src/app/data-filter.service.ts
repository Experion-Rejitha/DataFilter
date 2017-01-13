import { Injectable } from '@angular/core';

@Injectable()
export class DataFilterService {

  constructor() { }

    // Method that return stringified JSON array
    getData(): string {

      //Dummy JSON array contain employee details
      var empDetails={
              "emp":[
                       {
                         "empNo":"500",
                         "empName":"Arun",
                         "dateofJoin":"20/10/2015",
                         "designation":"Engineer",
                         "band":"A3"
                       },
                       {
                         "empNo":"501",
                         "empName":"Anna",
                         "dateofJoin":"10/12/2015",
                         "designation":"BA",
                         "band":"A2"
                       },
                       {
                         "empNo":"502",
                         "empName":"Sara",
                         "dateofJoin":"8/5/2016",
                         "designation":"Engineer",
                         "band":"A3"
                       },
                       {
                         "empNo":"503",
                         "empName":"Krishna",
                         "dateofJoin":"15/8/2016",
                         "designation":"BA",
                         "band":"A2"
                       }
                 ]
      };

    // stringify JSON array and return it
     var empDetailsjson = JSON.stringify(empDetails);
     return empDetailsjson;
    }

}
