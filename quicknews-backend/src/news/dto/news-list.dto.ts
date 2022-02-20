import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";
import { VALIDATION_ERROR_CODES } from "src/common/status-codes";

export class NewsListDto {
  @ApiProperty()
  @IsNotEmpty({ message: `offset ${VALIDATION_ERROR_CODES.FIELD_IS_REQUIRED.REQUIRED}` })
  offset: number;

  @ApiProperty()
  @IsNotEmpty({ message: `limit ${VALIDATION_ERROR_CODES.FIELD_IS_REQUIRED.REQUIRED}` })
  limit: number;
}