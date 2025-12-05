import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { WinstonModule } from 'nest-winston';
import * as winston from 'winston';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    WinstonModule.forRoot({
          transports: [
            new winston.transports.Console({
              format: winston.format.combine(
                winston.format.timestamp(),
                winston.format.ms(),
                winston.format.colorize(),
                winston.format.printf(({ context, level, message, timestamp, ms }) => {
                  return `[Winston] ${timestamp}  [${context}] ${level}: ${message} ${ms}`;
                }),
              ),
            }),
            // Add other transports like File or DailyRotateFile here
          ],
        }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
