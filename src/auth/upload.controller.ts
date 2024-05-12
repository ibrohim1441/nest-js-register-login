// import { Controller, Get, Post, Req, Res, UploadedFile, UseGuards, UseInterceptors } from "@nestjs/common";
// import { FileInterceptor } from "@nestjs/platform-express";
// import { AuthGuard } from '@nestjs/passport';


// @Controller('upload')
// export class UploadController {
//   constructor(private readonly uploadService: UploadService) {}

//   @Post('/add')
//   @UseGuards(AuthGuard('jwt'))
//   @UseInterceptors(FileInterceptor('file'))
//   addFile(@UploadedFile() file, @Req() req: Request, @Res() res: Response) {
//     return this.uploadService.addFile(file, req, res);
//   }

//   @Get('/list')
//   @UseGuards(AuthGuard('jwt'))
//   getAllFiles(@Req() req: Request, @Res() res: Response) {
//     return this.uploadService.getAllFiles(req, res);
//   }

//   @Delete('/delete/:id')
//   @UseGuards(AuthGuard('jwt'))
//   deleteFile(@Param('id') id: string, @Res() res: Response) {
//     return this.uploadService.deleteFile(id, res);
//   }

//   // Add other file-related endpoints here
// }