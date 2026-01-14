import { IsDateString, IsString } from "class-validator";

export class CreateShiftsDto {
    @IsDateString()
    startTime: string;
    @IsDateString()
    endTime: string;
    @IsString()
    location: string;
}