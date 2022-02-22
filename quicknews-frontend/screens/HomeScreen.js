import { SafeAreaView, Animated, PanResponder, ScrollView, View, Dimensions, FlatList } from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames';
import PageRenderer from '../components/PageRenderer';

const { width, height } = Dimensions.get("window");

const newsData = [
  {
    id: 1,
    gallery: [
      { type: 'image', url: 'https://avatars.githubusercontent.com/u/31663960?v=4' },
      { type: 'image', url: 'https://wallpaperaccess.com/full/1123635.jpg' },
      { type: 'video', url: 'https://wallpaperaccess.com/thumb/1107012.jpg' },
      { type: 'image', url: 'https://moneyinc.com/wp-content/uploads/2017/01/1200px-Mark_Zuckerberg_F8_2018_Keynote_41793468502.jpg' },
      { type: 'image', url: 'https://i.tribune.com.pk/media/images/846928-billgatesAFP-1425346144/846928-billgatesAFP-1425346144.jpg' },
    ],
    news: [
      {
        lang: 'en',
        title: 'This is a breaking news Title1',
        description: 'This is a breaking news Description, This is a breaking news Description, This is a breaking news Description, This is a breaking news Description. This is a breaking news Description.'
      },
      {
        lang: 'kn',
        title: 'ಇದು ಬ್ರೇಕಿಂಗ್ ನ್ಯೂಸ್ ಶೀರ್ಷಿಕೆ',
        description: 'ಇದು ಬ್ರೇಕಿಂಗ್ ನ್ಯೂಸ್ ವಿವರಣೆ, ಇದು ಬ್ರೇಕಿಂಗ್ ನ್ಯೂಸ್ ವಿವರಣೆ, ಇದು ಬ್ರೇಕಿಂಗ್ ನ್ಯೂಸ್ ವಿವರಣೆ, ಇದು ಬ್ರೇಕಿಂಗ್ ನ್ಯೂಸ್ ವಿವರಣೆ. ಇದು ಬ್ರೇಕಿಂಗ್ ನ್ಯೂಸ್ ವಿವರಣೆ.'
      }
    ],
    reference: {
      reference_url: 'https://www.google.com'
    }
  },
  {
    id: 2,
    gallery: [
      { type: 'image', url: 'https://avatars.githubusercontent.com/u/31663960?v=4' },
      { type: 'image', url: 'https://wallpaperaccess.com/full/1123635.jpg' },
      { type: 'video', url: 'https://wallpaperaccess.com/thumb/1107012.jpg' },
      { type: 'image', url: 'https://moneyinc.com/wp-content/uploads/2017/01/1200px-Mark_Zuckerberg_F8_2018_Keynote_41793468502.jpg' },
      { type: 'image', url: 'https://i.tribune.com.pk/media/images/846928-billgatesAFP-1425346144/846928-billgatesAFP-1425346144.jpg' },
    ],
    news: [
      {
        lang: 'en',
        title: 'This is a breaking news Title 2',
        description: 'This is a breaking news Description1, This is a breaking news Description, This is a breaking news Description, This is a breaking news Description. This is a breaking news Description.'
      },
      {
        lang: 'kn',
        title: 'ಇದು ಬ್ರೇಕಿಂಗ್ ನ್ಯೂಸ್ ಶೀರ್ಷಿಕೆ 1',
        description: 'ಇದು ಬ್ರೇಕಿಂಗ್ ನ್ಯೂಸ್ ವಿವರಣೆ, ಇದು ಬ್ರೇಕಿಂಗ್ ನ್ಯೂಸ್ ವಿವರಣೆ 1, ಇದು ಬ್ರೇಕಿಂಗ್ ನ್ಯೂಸ್ ವಿವರಣೆ, ಇದು ಬ್ರೇಕಿಂಗ್ ನ್ಯೂಸ್ ವಿವರಣೆ. ಇದು ಬ್ರೇಕಿಂಗ್ ನ್ಯೂಸ್ ವಿವರಣೆ.'
      }
    ],
    reference: {
      reference_url: 'https://www.duckduckgo.com'
    }
  },
  {
    id: 3,
    gallery: [
      { type: 'image', url: 'https://avatars.githubusercontent.com/u/31663960?v=4' },
      { type: 'image', url: 'https://wallpaperaccess.com/full/1123635.jpg' },
      { type: 'video', url: 'https://wallpaperaccess.com/thumb/1107012.jpg' },
      { type: 'image', url: 'https://moneyinc.com/wp-content/uploads/2017/01/1200px-Mark_Zuckerberg_F8_2018_Keynote_41793468502.jpg' },
      { type: 'image', url: 'https://i.tribune.com.pk/media/images/846928-billgatesAFP-1425346144/846928-billgatesAFP-1425346144.jpg' },
    ],
    news: [
      {
        lang: 'en',
        title: 'This is a breaking news Title 3',
        description: 'This is a breaking news Description1, This is a breaking news Description, This is a breaking news Description, This is a breaking news Description. This is a breaking news Description.'
      },
      {
        lang: 'kn',
        title: 'ಇದು ಬ್ರೇಕಿಂಗ್ ನ್ಯೂಸ್ ಶೀರ್ಷಿಕೆ 1',
        description: 'ಇದು ಬ್ರೇಕಿಂಗ್ ನ್ಯೂಸ್ ವಿವರಣೆ, ಇದು ಬ್ರೇಕಿಂಗ್ ನ್ಯೂಸ್ ವಿವರಣೆ 1, ಇದು ಬ್ರೇಕಿಂಗ್ ನ್ಯೂಸ್ ವಿವರಣೆ, ಇದು ಬ್ರೇಕಿಂಗ್ ನ್ಯೂಸ್ ವಿವರಣೆ. ಇದು ಬ್ರೇಕಿಂಗ್ ನ್ಯೂಸ್ ವಿವರಣೆ.'
      }
    ],
    reference: {
      reference_url: 'https://www.duckduckgo.com'
    }
  },
  {
    id: 4,
    gallery: [
      { type: 'image', url: 'https://avatars.githubusercontent.com/u/31663960?v=4' },
      { type: 'image', url: 'https://wallpaperaccess.com/full/1123635.jpg' },
      { type: 'video', url: 'https://wallpaperaccess.com/thumb/1107012.jpg' },
      { type: 'image', url: 'https://moneyinc.com/wp-content/uploads/2017/01/1200px-Mark_Zuckerberg_F8_2018_Keynote_41793468502.jpg' },
      { type: 'image', url: 'https://i.tribune.com.pk/media/images/846928-billgatesAFP-1425346144/846928-billgatesAFP-1425346144.jpg' },
    ],
    news: [
      {
        lang: 'en',
        title: 'This is a breaking news Title 4',
        description: 'This is a breaking news Description1, This is a breaking news Description, This is a breaking news Description, This is a breaking news Description. This is a breaking news Description.'
      },
      {
        lang: 'kn',
        title: 'ಇದು ಬ್ರೇಕಿಂಗ್ ನ್ಯೂಸ್ ಶೀರ್ಷಿಕೆ 1',
        description: 'ಇದು ಬ್ರೇಕಿಂಗ್ ನ್ಯೂಸ್ ವಿವರಣೆ, ಇದು ಬ್ರೇಕಿಂಗ್ ನ್ಯೂಸ್ ವಿವರಣೆ 1, ಇದು ಬ್ರೇಕಿಂಗ್ ನ್ಯೂಸ್ ವಿವರಣೆ, ಇದು ಬ್ರೇಕಿಂಗ್ ನ್ಯೂಸ್ ವಿವರಣೆ. ಇದು ಬ್ರೇಕಿಂಗ್ ನ್ಯೂಸ್ ವಿವರಣೆ.'
      }
    ],
    reference: {
      reference_url: 'https://www.duckduckgo.com'
    }
  }, {
    id: 5,
    gallery: [
      { type: 'image', url: 'https://avatars.githubusercontent.com/u/31663960?v=4' },
      { type: 'image', url: 'https://wallpaperaccess.com/full/1123635.jpg' },
      { type: 'video', url: 'https://wallpaperaccess.com/thumb/1107012.jpg' },
      { type: 'image', url: 'https://moneyinc.com/wp-content/uploads/2017/01/1200px-Mark_Zuckerberg_F8_2018_Keynote_41793468502.jpg' },
      { type: 'image', url: 'https://i.tribune.com.pk/media/images/846928-billgatesAFP-1425346144/846928-billgatesAFP-1425346144.jpg' },
    ],
    news: [
      {
        lang: 'en',
        title: 'This is a breaking news Title 5',
        description: 'This is a breaking news Description1, This is a breaking news Description, This is a breaking news Description, This is a breaking news Description. This is a breaking news Description.'
      },
      {
        lang: 'kn',
        title: 'ಇದು ಬ್ರೇಕಿಂಗ್ ನ್ಯೂಸ್ ಶೀರ್ಷಿಕೆ 1',
        description: 'ಇದು ಬ್ರೇಕಿಂಗ್ ನ್ಯೂಸ್ ವಿವರಣೆ, ಇದು ಬ್ರೇಕಿಂಗ್ ನ್ಯೂಸ್ ವಿವರಣೆ 1, ಇದು ಬ್ರೇಕಿಂಗ್ ನ್ಯೂಸ್ ವಿವರಣೆ, ಇದು ಬ್ರೇಕಿಂಗ್ ನ್ಯೂಸ್ ವಿವರಣೆ. ಇದು ಬ್ರೇಕಿಂಗ್ ನ್ಯೂಸ್ ವಿವರಣೆ.'
      }
    ],
    reference: {
      reference_url: 'https://www.duckduckgo.com'
    }
  }
]
const HomeScreen = () => {

  return (
    <SafeAreaView style={tw`bg-white h-full w-full`}>
      <ScrollView
        decelerationRate={'fast'}
        snapToAlignment={'start'}
        showsVerticalScrollIndicator={false}
        snapToInterval={height}
      >
        {newsData.map((news, i) => (
          <View key={i} style={{ flex: 1, width: width, height: height }}>
            <PageRenderer news={news.news[0]} gallery={news.gallery} reference={news.reference} id={news.id} />
          </View>
        ))}
      </ScrollView>
      {/* <FlatList
        data={newsData}
        renderItem={({ item }) => {
          return <PageRenderer news={item.news[0]} gallery={item.gallery} reference={item.reference} id={item.id} />
        }}
        keyExtractor={(item, index) => index.toString()}
        showsVerticalScrollIndicator={false}
        pagingEnabled
        scrollEnabled
        scrollEventThrottle={20}
        snapToInterval={height}
        snapToAlignment={'start'}
        decelerationRate={'fast'}
      /> */}

    </SafeAreaView>
  )
}

export default HomeScreen;