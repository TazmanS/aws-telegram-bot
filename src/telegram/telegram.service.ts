import { Injectable } from '@nestjs/common';
import { Telegraf } from 'telegraf';

@Injectable()
export class TelegramService {
  private readonly bot: Telegraf;

  constructor() {
    this.bot = new Telegraf(process.env.TELEGRAM_BOT_TOKEN);
  }

  async sendMessage(chatId: string, message: string) {
    try {
      await this.bot.telegram.sendMessage(chatId, message);
      return { success: true, chatId, message };
    } catch (error) {
      return { success: false, error: error.message };
    }
  }

  async getBotInfo() {
    try {
      const botInfo = await this.bot.telegram.getMe();
      return { success: true, botInfo };
    } catch (error) {
      return { success: false, error: error.message };
    }
  }
}
