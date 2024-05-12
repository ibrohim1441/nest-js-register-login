import { Body, Controller, Get, Post, Req, Res, UploadedFile, UseInterceptors } from '@nestjs/common';
import { Request, Response } from 'express';
import { User } from '../user.entity';
import { AuthService } from './auth.service';
import { FileInterceptor } from '@nestjs/platform-express';

// @Controller('auth')
// export class AuthController {
//   constructor(private readonly authService: AuthService) {}

//   @Post('/register')
//   registerUser(@Body() user: User, @Res() resp: Response) {
//     return this.authService.registerUser(user, resp);
//   }

//   @Post('/login')
//   loginUser(@Body() user: User, @Res() res: Response) {
//     return this.authService.loginUser(user, res);
//   }

//   @Get('/user')
//   authUser(@Req() req: Request, @Res() resp: Response) {
//     return this.authService.authUser(req, resp);
//   }

//   @Post('/refresh')
//   refreshUser(@Req() req: Request, @Res() resp: Response) {
//     return this.authService.refreshUser(req, resp);
//   }

//   @Get('/logout')
//   logoutUser(@Res() resp: Response) {
//     return this.authService.logoutUser(resp);
//   }

//   @Post('/upload')
//   @UseInterceptors(FileInterceptor('file'))
//   uploadFile(@UploadedFile() file, @Req() req: Request, @Res() res: Response) {
//     console.log(file); 
//     return res.send('Fayl muvaffaqiyatli yuklandi');
//   }
// }


@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('/register')
  registerUser(@Body() user: User, @Res() resp: Response) {
    return this.authService.registerUser(user, resp);
  }

  @Post('/login')
  loginUser(@Body() user: User, @Res() res: Response) {
    return this.authService.loginUser(user, res);
  }

  @Get('/user')
  authUser(@Req() req: Request, @Res() resp: Response) {
    return this.authService.authUser(req, resp);
  }

  @Post('/refresh')
  refreshUser(@Req() req: Request, @Res() resp: Response) {
    return this.authService.refreshUser(req, resp);
  }

  @Get('/logout')
  logoutUser(@Res() resp: Response) {
    return this.authService.logoutUser(resp);
  }
}