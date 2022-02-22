import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ERROR_CODES } from 'src/common/status-codes';
import { News } from 'src/entity/news.entity';
import { LessThan, Repository } from 'typeorm';
import { AddNewsDto } from './dto/add-news.dto';
import { NewsListDto } from './dto/news-list.dto';
import { NewsTranslationResponseDto } from './dto/newsTranslationResponse.dto';

@Injectable()
export class NewsService {
  constructor(
    @InjectRepository(News) private newsRepository: Repository<News>,
  ) { }

  async findAllNews(filterBy: any): Promise<News[]> {
    try {
      return await this.newsRepository.find(filterBy);
    } catch (error) {
      console.log(error);
      return;
    }
  }

  async findOneNews(filterBy: any): Promise<News> {
    try {
      return await this.newsRepository.findOne(filterBy);
    } catch (error) {
      console.log(error);
      return;
    }
  }

  async updateOneNews(filterBy: any, updateData: any) {
    try {
      return await this.newsRepository.update(filterBy, updateData);
    } catch (error) {
      console.log(error);
      return;
    }
  }

  async removeNews(filterBy: any) {
    try {
      await this.newsRepository.delete(filterBy);
      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
  }

  async createNewNews(data: any): Promise<News> {
    try {
      return await this.newsRepository.save(data);
    } catch (error) {
      console.log(error);
      return;
    }
  }

  async getNewsListService(newsListDto: NewsListDto) {
    try {
      let searchFilter = {
        order: { news_id: "DESC" },
        take: newsListDto.limit,
      };
      if (newsListDto.offset > 0) {
        searchFilter['where'] = { news_id: LessThan(newsListDto.offset) };
      }

      const newsList = await this.findAllNews(searchFilter);
      return {
        news_list: newsList.map(news => {
          return new NewsTranslationResponseDto(news);
        })
      };
    } catch (error) {
      console.log(error);
      throw new HttpException(
        error.response ||
        { errCode: ERROR_CODES.STANDARD.INTERNAL_SERVER_ERROR.CODE, description: ERROR_CODES.STANDARD.INTERNAL_SERVER_ERROR.DESCRIPTION },
        error.status || HttpStatus.INTERNAL_SERVER_ERROR
      )
    }
  }

  async createNewsService(data: AddNewsDto) {
    try {
      const newNews = await this.createNewNews({
        nt_en: data.nt_en,
        nd_en: data.nd_en,
        gallery: data.gallery ? JSON.stringify(data.gallery) : [],
        reference_url: data.reference_url
      });
      return {
        news: { ...newNews }
      };
    } catch (error) {
      console.log(error);
      throw new HttpException(
        error.response ||
        { errCode: ERROR_CODES.STANDARD.INTERNAL_SERVER_ERROR.CODE, description: ERROR_CODES.STANDARD.INTERNAL_SERVER_ERROR.DESCRIPTION },
        error.status || HttpStatus.INTERNAL_SERVER_ERROR
      )
    }
  }

}
