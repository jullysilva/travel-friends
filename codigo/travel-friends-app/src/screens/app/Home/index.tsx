import React, { useEffect, useState } from "react";
import { View, FlatList, Dimensions, StatusBar } from "react-native";
import { userHook } from "../../../contexts/userData";
import { RoadMap } from "../../../@types/models.interface";
import { getAllRoadmap } from "../../../services/api/app/roteiros";

import Header from "../../../components/Header";
import CardInfo from "../../../components/CardInfo";

import { style } from "./styles";
import theme from "../../../utils/theme";
import TextApp from "../../../components/Text";

export default function Home() {
  const user = userHook();
  const { height, width } = Dimensions.get("window");

  const [roadmapList, setRoadmapList] = useState<RoadMap[]>([]);

  async function loadRoadmap() {
    const resp = await getAllRoadmap();
    setRoadmapList(resp?.data);
  }

  function renderItem(item: RoadMap) {
    return <CardInfo item={item} />;
  }

  useEffect(() => {
    loadRoadmap();
  }, []);
  console.log(roadmapList);
  const { userData } = user;
  return (
    <View style={style.container}>
      <StatusBar
        barStyle="light-content"
        backgroundColor={theme.colors.primary}
      />
      <Header />

      <View style={{}}>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          snapToAlignment={"start"}
          scrollEventThrottle={16}
          decelerationRate={"fast"}
          keyExtractor={(item, i) => `${item}${i}`}
          snapToOffsets={[...Array(roadmapList.length)].map(
            (item, index) => index * (width * 0.8 - 40) + (index - 1) * 40
          )}
          data={roadmapList}
          renderItem={({ item }) => renderItem(item)}
          style={{ marginTop: -40 }}
        />
      </View>

      <View style={{ paddingHorizontal: 20 }}>
        <TextApp
          size={theme.fonts.subTitle}
          text={"Em alta"}
          isBold
          color={theme.colors.title}
        />
      </View>
    </View>
  );
}
