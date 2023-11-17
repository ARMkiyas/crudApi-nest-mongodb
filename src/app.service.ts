import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'WellCome to crudApi-nest-mongodb by A.R.M.Kiyas';
  }
}
