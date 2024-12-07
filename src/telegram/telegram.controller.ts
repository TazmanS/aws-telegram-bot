import { Controller, Get, Post, Body } from '@nestjs/common';
import { TelegramService } from './telegram.service';

@Controller('bot')
export class TelegramController {
  constructor(private readonly telegramService: TelegramService) {}

  @Post('send-message')
  async sendMessage(@Body() body: { chatId: string; message: string }) {
    return this.telegramService.sendMessage(body.chatId, body.message);
  }

  @Get('info')
  async getBotInfo() {
    return this.telegramService.getBotInfo();
  }
}
