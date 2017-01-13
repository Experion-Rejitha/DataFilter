import { Component, OnInit } from '@angular/core';
import {DataFilterService} from './data-filter.service';
import {NgForm} from '@angular/forms';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'data-filter',
  templateUrl: './data-filter.component.html',
  styleUrls: ['./data-filter.component.css']
})
export class DataFilterComponent implements OnInit {

// variables for storing id of each SelectedValue
 SelectedValue: string = null;
 SelectedValueno: string = null;
 SelectedValuename: string = null;
 SelectedValuedoj: string = null;

 value2;
 value;
 fieldValue;
 operatorValue;
 inputValue;
 inputValue2;

 empDetails;
 sampleArray1:any=[];
 sampleArray2:any=[];
 resultArray;

 showdefaultValue:boolean;
 showfilterValue:boolean;
 
  constructor(private filterService:DataFilterService) {}

  filterField1 ={"details":[
                             { 
                               "id": "1" ,
                               "name": "--Select--"
                             },
                             { 
                               "id": "2" ,
                               "name": "Employee Number"
                             },
                              { 
                               "id": "3" ,
                               "name": "Employee Name"
                             },
                              { 
                               "id": "4" ,
                               "name": "Date of Joining"
                             },
                              { 
                               "id": "5" ,
                               "name": "Designation"
                             },
                              { 
                               "id": "6" ,
                               "name": "Band"
                             }
                             ]} ;

 filterEmpNo={"operators":[
                             { 
                               "id": "1" ,
                               "name": "--Select--"
                             },
                             { 
                               "id": "2" ,
                               "name": "<"
                             },
                              { 
                               "id": "3" ,
                               "name": ">"
                             },
                              { 
                               "id": "4" ,
                               "name": "<="
                             },
                              { 
                               "id": "5" ,
                               "name": ">="
                             },
                              { 
                               "id": "6" ,
                               "name": "<>"
                             }
                             ]} ;
 filterEmpName={"operators":[
                             { 
                               "id": "1" ,
                               "name": "--Select--"
                             },
                             { 
                               "id": "2" ,
                               "name": "="
                             },
                              { 
                               "id": "3" ,
                               "name": "<>"
                             },
                              { 
                               "id": "4" ,
                               "name": "LIKE"
                             }
                             ]} ;
 filterDOJ={"operators":[
                             { 
                               "id": "1" ,
                               "name": "--Select--"
                             },
                             { 
                               "id": "2" ,
                               "name": "="
                             },
                              { 
                               "id": "3" ,
                               "name": ">="
                             },
                              { 
                               "id": "4" ,
                               "name": "<="
                             },
                              { 
                               "id": "5" ,
                               "name": ">"
                             },
                              { 
                               "id": "6" ,
                               "name": "<"
                             },
                              {                          
                               "id": "7" ,
                               "name": "BETWEEN"
                             }
                             ]} ;
  
  ngOnInit() {

          //parse the stringified JSON array 
          this.empDetails =JSON.parse(this. filterService. getData()); 
           this.showdefaultValue=false;
           this.showfilterValue=false;
  }
 
dataFilter(){

      this.fieldValue=this.SelectedValue;  // fetch id of selected field from filterField1
      this.operatorValue=this.SelectedValueno;  // fetch id of selected field from filterField2
      this.inputValue=this.value;  // fetch the value from input field value1
      this.inputValue2=this.value2;  //  fetch the value from input field value2

      this.showdefaultValue=false;  // To hide dummy data
      this.showfilterValue=true;  //To show filtered data

       this.empDetails.emp.forEach(element => {
                     
                       // If operator is '<'
                        if(this.operatorValue==2)
                         {
                           if((element.empNo==this.inputValue)||(element.empNo>this.inputValue)){}
                           else{
                              this.sampleArray1.push(element);
                              this.sampleArray2 = JSON.stringify(this.sampleArray1);
                              this.resultArray = JSON.parse(this.sampleArray2);
                               
                              }
                          
                         }

                          // If operator is '>'
                        if(this.operatorValue==3)
                         {
                           if((element.empNo==this.inputValue)||(element.empNo<this.inputValue)){}
                           else{
                              this.sampleArray1.push(element);
                              this.sampleArray2 = JSON.stringify(this.sampleArray1);
                              this.resultArray = JSON.parse(this.sampleArray2);
                              
                              }
                          
                         }

                         // If operator is '<='
                        if(this.operatorValue==4)
                         {
                           if(element.empNo>this.inputValue){}
                           else{
                              this.sampleArray1.push(element);
                              this.sampleArray2 = JSON.stringify(this.sampleArray1);
                              this.resultArray = JSON.parse(this.sampleArray2);
                               
                              }
                          
                         }

                         // If operator is '>='
                        if(this.operatorValue==5)
                         {
                           if(element.empNo<this.inputValue){}
                           else{
                              this.sampleArray1.push(element);
                              this.sampleArray2 = JSON.stringify(this.sampleArray1);
                              this.resultArray = JSON.parse(this.sampleArray2);
                              
                              }
                          
                         }

                         // If operator is '<>'
                        if(this.operatorValue==6)
                         {
                           if((element.empNo==this.inputValue)||(element.empNo<this.inputValue)||(element.empNo==this.inputValue2)||(element.empNo>this.inputValue2)){}
                           else{
                              this.sampleArray1.push(element);
                              this.sampleArray2 = JSON.stringify(this.sampleArray1);
                              this.resultArray = JSON.parse(this.sampleArray2);
                               
                              }
                          
                         }
                      
                   });
       }

       //Method for reset button 
       resetData(){
         this.showfilterValue=false; //Hide filtered data
         this.showdefaultValue=true; // To show dummy data
       }
}