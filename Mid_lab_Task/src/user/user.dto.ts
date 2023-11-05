import { IsString, IsPhoneNumber, IsNotEmpty } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  readonly employeeName: string;

  @IsPhoneNumber('BD') // Change 'BD' to your desired country code
  @IsNotEmpty()
  readonly contactNo: string;

  @IsString()
  @IsNotEmpty()
  readonly username: string;

  @IsString()
  @IsNotEmpty()
  readonly password: string;
}
