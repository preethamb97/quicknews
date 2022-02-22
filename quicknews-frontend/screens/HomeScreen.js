import { SafeAreaView, Animated, PanResponder, ScrollView, View, Dimensions, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import tw from 'tailwind-react-native-classnames';
import PageRenderer from '../components/PageRenderer';
import { NEWS_API_ENDPOINT, ROUTE_NEWS_GETLIST } from '../const';

const { width, height } = Dimensions.get("window");

const urlBuilder = (offset, limit) => {
  return `${NEWS_API_ENDPOINT}${ROUTE_NEWS_GETLIST}?offset=${offset}&limit=${limit}`;
}

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
    const apiURL = urlBuilder(pageCurrent, 5);
    console.log(apiURL)
    fetch(apiURL).then((res) => res.json())
      .then((resJson) => {
        setData(data.concat(resJson.news_list));
        setIsLoading(false);
      });
  }

  const handleLoadMore = () => {
    console.log(pageCurrent)
    setPageCurrent(pageCurrent + 1);
    setIsLoading(true);
  }

  const renderItem = ({ item }) => (
    <PageRenderer news={item.news[0]} gallery={item.gallery} reference_url={item.reference_url} id={item.id} />
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