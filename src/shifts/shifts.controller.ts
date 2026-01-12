import { Controller, Get } from '@nestjs/common';

@Controller('shifts')
export class ShiftsController {
    @Get('/')
    test() {
        return 'Shifts !';
    }
}
    