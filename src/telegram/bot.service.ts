import { Injectable } from '@nestjs/common';
import { Ctx, Start, Update, On, Command } from 'nestjs-telegraf';
import { Context } from 'telegraf';

@Update()
@Injectable()
export class BotService {
  @Start()
  async onStart(@Ctx() ctx: Context) {
    // save to DB chat_id(user_id)
    await ctx.reply(
      'Добро пожаловать! Используйте /help, чтобы узнать, что я могу.',
    );
  }

  @Command('help')
  async onHelp(@Ctx() ctx: Context) {
    await ctx.reply(
      'Я могу выполнять следующие команды:\n/start - начать работу\n/help - помощь',
    );
  }

  @On('text')
  async onMessage(@Ctx() ctx: Context) {
    const message = ctx.message as { text: string };
    await ctx.reply(`Вы написали@@@: ${message.text}`);
  }
}
