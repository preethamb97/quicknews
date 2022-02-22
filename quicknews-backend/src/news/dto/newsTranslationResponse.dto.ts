export interface INewsTranslationResponse {
  news_id: number;
  nt_en: string;
  nd_en: string;
  nt_kn: string;
  nd_kn: string;
  nt_hi: string;
  nd_hi: string;
  gallery: any;
  reference_url: string;
}

export class NewsTranslationResponseDto implements INewsTranslationResponse {
  constructor(newsTranslationResponse: INewsTranslationResponse) {
    this.id = newsTranslationResponse.news_id;
    const news = [];
    const gallery = [];
    news.push({ lang: 'en', title: newsTranslationResponse.nt_en, description: newsTranslationResponse.nd_en });
    news.push({ lang: 'en', title: newsTranslationResponse.nt_hi, description: newsTranslationResponse.nd_hi });
    news.push({ lang: 'en', title: newsTranslationResponse.nt_kn, description: newsTranslationResponse.nd_kn });
    this.news = news;

    const galleryData = typeof newsTranslationResponse.gallery === 'string' ? JSON.parse(newsTranslationResponse.gallery) : [];
    galleryData.forEach(gal => {
      gallery.push(gal);
    });

    this.gallery = gallery;
    this.reference_url = newsTranslationResponse.reference_url;
  }
  news_id: number;
  nt_en: string;
  nd_en: string;
  nt_kn: string;
  nd_kn: string;
  nt_hi: string;
  nd_hi: string;

  id: number;
  gallery: any;
  news: any;
  reference_url: string;
}
