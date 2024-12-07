import { Module } from '@nestjs/common';
import { TelegramService } from './telegram.service';
import { TelegramController } from './telegram.controller';
import { BotService } from './bot.service';

@Module({
  imports: [],
  providers: [TelegramService, BotService],
  controllers: [TelegramController],
})
export class TelegramModule {}
