import { SafeAreaView } from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames';
import PageRenderer from '../components/PageRenderer';

const newsData = [{
  id: 1,
  gallery: [
    { type: 'image', url: 'https://avatars.githubusercontent.com/u/31663960?v=4' },
    { type: 'image', url: 'https://wallpaperaccess.com/full/1123635.jpg' },
    { type: 'video', url: 'https://wallpaperaccess.com/thumb/1107012.jpg' },
    { type: 'image', url: 'https://moneyinc.com/wp-content/uploads/2017/01/1200px-Mark_Zuckerberg_F8_2018_Keynote_41793468502.jpg' },
    { type: 'image', url: 'https://i.tribune.com.pk/media/images/846928-billgatesAFP-1425346144/846928-billgatesAFP-1425346144.jpg' },
  ],
  news: [{ lang: 'en', title: 'This is a breaking news Title', description: 'This is a breaking news Description' }],
  reference: {
    reference_url: 'https://www.google.com'
  }
}]
const HomeScreen = () => {
  const news = newsData[0];
  return (
    <SafeAreaView style={tw`bg-white h-full w-full`}>
      <PageRenderer news={news.news[0]} gallery={news.gallery} reference={news.reference} />
    </SafeAreaView>
  )
}

export default HomeScreen;