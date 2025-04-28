import { Controller, Get, Query, Req, Res, Headers } from '@nestjs/common';
import { AppService } from './app.service';
import { Request, Response } from 'express';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  @Get('/request')
  getConfig(@Req() request: Request, @Query() query, @Res() res: Response) {
    try {
      console.log('完整 Request 对象:', request);
      // res.json(request.headers);

      // 提取关键信息
      const clientInfo = {
        ip: request.ip, // 客户端 IP（需代理信任配置）
        headers: request.headers, // 所有请求头
        referer: request.headers['referer'], // 来源页
        userAgent: request.headers['user-agent'], // 浏览器 UA
        method: request.method, // HTTP 方法（GET/POST等）
        url: request.url, // 请求路径
        query: request.query, // 查询参数
        body: request.body, // 请求体（POST/PUT）
      };
      console.log('客户端信息:', clientInfo);
      res.json(clientInfo);
    } catch (error) {
      debugger
    }
  }
}
