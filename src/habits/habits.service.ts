import { Injectable } from '@nestjs/common';

@Injectable()
export class HabitsService {
  findAll() {
    return [
      { id: 1, name: 'habit1' },
      { id: 2, name: 'habit2' },
    ];
  }
}
