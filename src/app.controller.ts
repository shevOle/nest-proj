import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
    @Get('/')
    rootHandler() {
        return 'initialization complete!'
    }
}