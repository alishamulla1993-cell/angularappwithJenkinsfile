import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';
//import { FirstClass } from './First/First.component';
//import { first } from 'rxjs';
import { ArithmeticClass } from './Binding/Arithmetic.component';

bootstrapApplication(ArithmeticClass)
  .catch((err) => console.error(err));
