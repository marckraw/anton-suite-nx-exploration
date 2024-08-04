import { IsOptional, IsString } from 'class-validator';
import { AntonAPIModels } from '@anton-suite/api-interface';

export class CreateCompletionDto {
  @IsOptional()
  @IsString()
  model: AntonAPIModels;

  @IsString()
  content: string;
}
