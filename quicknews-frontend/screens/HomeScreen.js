import { SafeAreaView, Animated, PanResponder, ScrollView, View, Dimensions, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
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
  },
  {
    id: 6,
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
        title: 'This is a breaking news Title 6',
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
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [pageCurrent, setPageCurrent] = useState(1);

  useEffect(() => {
    setIsLoading(true);
    getData()
    return () => {

    }
  }, [pageCurrent]);
  const getData = async () => {
    // const apiURL = 'https://jsonplaceholder.typicode.com/todos/' + pageCurrent;
    // fetch(apiURL).then((res) => res.json())
    // .then((resJson) => {
    // setData(resJson);
    setData(data.concat(newsData));
    setIsLoading(false);
    // });
  }

  const handleLoadMore = () => {
    console.log(pageCurrent)
    setPageCurrent(pageCurrent + 1);
    setIsLoading(true);
  }

  const renderItem = ({ item }) => (
    <PageRenderer news={item.news[0]} gallery={item.gallery} reference={item.reference} id={item.id} />
  )

  return (
    <SafeAreaView style={[tw`bg-white h-full w-full`]}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        showsVerticalScrollIndicator={false}
        pagingEnabled
        scrollEnabled
        scrollEventThrottle={20}
        snapToInterval={height}
        snapToAlignment={'start'}
        decelerationRate={'fast'}
        onEndReached={handleLoadMore}
        onEndReachedThreshold={0}
      />

    </SafeAreaView>
  )
}

export default HomeScreen;