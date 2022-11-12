import React, { useEffect, useState } from "react";
import { View, Dimensions, StatusBar, FlatList } from "react-native";
import { RoadMap } from "../../../@types/models.interface";
import Card from "../../../components/Card";
import TextApp from "../../../components/Text";
import { getAllRoadmap } from "../../../services/api/app/roteiros";
import theme from "../../../utils/theme";
import { style } from "./styles";

export function Favorite() {
  const [roadmapList, setRoadmapList] = useState<RoadMap[]>([]);

  async function loadRoadmap() {
    const resp = await getAllRoadmap();
    setRoadmapList(resp?.data);
  }

  function renderVertical(item: RoadMap) {
    if (item.favorites) {
      return <Card item={item} />;
    }
  }

  useEffect(() => {
    loadRoadmap();
  }, []);

  return (
    <View style={style.container}>
      <StatusBar
        barStyle="light-content"
        backgroundColor={theme.colors.primary}
      />

      <View
        style={{ paddingHorizontal: 20, paddingTop: 30, paddingBottom: 14 }}
      >
        <TextApp
          size={theme.fonts.subTitle}
          text={"Meus favoritos"}
          isBold
          color={theme.colors.title}
        />
      </View>

      <View style={{ width: "100%" }}>
        {!!roadmapList ? (
          <FlatList
            snapToAlignment={"start"}
            scrollEventThrottle={16}
            decelerationRate={"fast"}
            showsVerticalScrollIndicator={false}
            keyExtractor={(item, i) => `${item}${i}`}
            data={roadmapList}
            renderItem={({ item }) => renderVertical(item)}
            style={{}}
            ListFooterComponent={<View style={{ height: 340 }} />}
          />
        ) : (
          <TextApp size={12} text="carregando lista de roteiros..." />
        )}
      </View>
    </View>
  );
}
