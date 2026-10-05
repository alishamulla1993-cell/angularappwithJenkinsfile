import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";
@Component({
    selector:"app-root",
   templateUrl:"First.html",
   imports:[FormsModule]
})

export class FirstClass
{
   rno:any=10;
   name:any="alisha";
   marks:any="90";

   data=[10,20,30,40,50];
   products=[
    
{"ProductId":1,"ProductName":"Pen"},
{"ProductId":2,"ProductName":"paper"},
{"ProductId":3,"ProductName":"ink"},
{"ProductId":4,"ProductName":"eraser"},

   
]
}