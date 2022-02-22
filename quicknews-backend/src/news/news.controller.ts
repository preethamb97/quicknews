import { Body, Controller, Get, HttpStatus, Post, Query, Res } from '@nestjs/common';
import { ApiOperation } from '@nestjs/swagger';
import { Response } from 'express';
import { ENDPOINT_ROUTES } from 'src/routes';
import { AddNewsDto } from './dto/add-news.dto';
import { NewsListDto } from './dto/news-list.dto';
import { NewsService } from './news.service';

@Controller('news')
export class NewsController {
  constructor(
    private readonly newsService: NewsService
  ) { }

  @ApiOperation({
    summary: "News List"
  })
  @Get(ENDPOINT_ROUTES.NEWS.ROUTES.GET_LIST)
  async getNewsListController(
    @Query() newsListDto: NewsListDto,
    @Res() response: Response
  ) {
    try {
      let resp = await this.newsService.getNewsListService(newsListDto);
      return response.status(HttpStatus.OK).send(resp);
    } catch (error) {
      console.log(error);
      response.status(error.status).send(error.response || error.message);
    }
  }

  @ApiOperation({
    summary: "Add News"
  })
  @Post(ENDPOINT_ROUTES.NEWS.ROUTES.ADD_NEWS)
  async addNewsController(
    @Body() addNewsDto: AddNewsDto,
    @Res() response: Response
  ) {
    try {
      let resp = await this.newsService.createNewsService(addNewsDto);
      return response.status(HttpStatus.OK).send(resp);
    } catch (error) {
      console.log(error);
      response.status(error.status).send(error.response || error.message);
    }
  }
}
