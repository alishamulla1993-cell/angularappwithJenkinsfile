import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";
@Component({
    selector:"app-root",
    templateUrl:"Arithmetic.html",
    imports:[FormsModule]
})
export class ArithmeticClass
{
    num1:any;
    num2:any;
result:any;
    Addition(n1:any,n2:any)
    {
     this.result =Number(n1)+Number(n2);
     
    }
}