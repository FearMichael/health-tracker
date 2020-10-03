import { Controller, Get } from '@nestjs/common';
import { ApiBasicAuth, ApiOperation, ApiProperty, ApiTags } from '@nestjs/swagger';

@ApiTags("Auth")
@ApiBasicAuth("auth")
@Controller('auth')
export class AuthController {

    @ApiProperty()
    @Get("/")
    getAuth() {

    }

}
