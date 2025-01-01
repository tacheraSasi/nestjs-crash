import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  
  sendHello(): boolean { 
    const mailer = new EkiliRelay()
    
    return false
  }
}
