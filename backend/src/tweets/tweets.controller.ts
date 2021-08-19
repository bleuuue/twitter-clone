import { Body, Controller, Post, Req, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/guards/jwt.guard';
import { CreateTweetDto } from './dtos/createTweet.dto';
import { TweetsService } from './tweets.service';
import { Request } from 'express';

@Controller('tweets')
export class TweetsController {
  constructor(private readonly tweetsService: TweetsService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  async createTweet(
    @Req() req: Request,
    @Body() createTweetDto: CreateTweetDto,
  ) {
    return await this.tweetsService.createTweet(req, createTweetDto);
  }
}
