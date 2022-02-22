import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";
import { VALIDATION_ERROR_CODES } from "src/common/status-codes";

export class AddNewsDto {
  @ApiProperty()
  @IsNotEmpty({ message: `nt_en ${VALIDATION_ERROR_CODES.FIELD_IS_REQUIRED.REQUIRED}` })
  nt_en: string;

  @ApiProperty()
  @IsNotEmpty({ message: `nd_en ${VALIDATION_ERROR_CODES.FIELD_IS_REQUIRED.REQUIRED}` })
  nd_en: string;

  @ApiProperty()
  @IsNotEmpty({ message: `gallery ${VALIDATION_ERROR_CODES.FIELD_IS_REQUIRED.REQUIRED}` })
  gallery: any;

  @ApiProperty()
  @IsNotEmpty({ message: `reference_url ${VALIDATION_ERROR_CODES.FIELD_IS_REQUIRED.REQUIRED}` })
  reference_url: string;
}