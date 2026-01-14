import { IsEmail, IsIn, IsString } from 'class-validator';

// @IsString()
// @IsEmail()
// @IsNotEmpty()
// @IsOptional()
// @MinLength()
// @IsEnum()
// @IsBoolean()
// @IsArray()
// @IsDateString()
// @Matches()

// @IsString()
// @IsNumber()
// @IsBoolean()
// @IsArray()
// @IsObject()

export class CreateUserDto {
  @IsString()
  name: string;

  @IsEmail()
  email: string;

  @IsString()
  password: string;

//   @IsIn(['SOLDIER', 'COMMANDER'])
  role: string;
}


