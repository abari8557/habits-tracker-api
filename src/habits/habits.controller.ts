import { Controller, Get } from '@nestjs/common';
import { find } from 'rxjs';

@Controller('habits')
export class HabitsController {
@Get()  
find() {
  return[{id:1, name:'habit1'},{id:2, name:'habit2'}]; 
}
}  
