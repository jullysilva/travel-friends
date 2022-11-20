import React, { useEffect, useState } from "react";
import {
  View,
  FlatList,
  Dimensions,
  StatusBar,
  ActivityIndicator,
} from "react-native";
import { userHook } from "../../../contexts/userData";
import { useNotification } from "../../../contexts/useNotification";

import { RoadMap } from "../../../@types/models.interface";
import { getAllRoadmap } from "../../../services/api/app/roteiros";

import Header from "../../../components/Header";
import CardInfo from "../../../components/CardInfo";

import TextApp from "../../../components/Text";

import { style } from "./styles";
import theme from "../../../utils/theme";
import Card from "../../../components/Card";
import { useHomeNavigation } from "../../../hooks/navigation";
import { useFocusEffect } from "@react-navigation/native";

export default function Home() {
  const navigation = useHomeNavigation();
  const { getRoadmapFavorite } = userHook();
  const { startGeneration, notificatioList } = useNotification();
  const { height, width } = Dimensions.get("window");

  const [roadmapList, setRoadmapList] = useState<RoadMap[]>([]);
  const [roadmapFavorite, setRoadmapFavorite] = useState<RoadMap[]>([]);

  async function loadRoadmapVertical() {
    const resp = getRoadmapFavorite();
    setRoadmapFavorite(resp);
  }

  async function loadRoadmap() {
    const resp = await getAllRoadmap();
    setRoadmapList(resp?.data);
  }

  function renderItem(item: RoadMap) {
    return <CardInfo item={item} />;
  }

  function renderVertical(item: RoadMap) {
    if (item) {
      return <Card item={item} key={item._id} />;
    }
  }

  useEffect(() => {
    navigation.addListener("focus", () => loadRoadmapVertical());
  }, [roadmapFavorite.length]);

  useEffect(() => {
    loadRoadmap();
    loadRoadmapVertical();
    startGeneration();
  }, [notificatioList.length]);

  useFocusEffect(() => {
    loadRoadmapVertical();
    console.log("bbbbb");
  });

  return (
    <View style={style.container}>
      <StatusBar
        barStyle="light-content"
        backgroundColor={theme.colors.primary}
      />
      <Header />

      <View style={{}}>
        {roadmapList.length == 0 ? <ActivityIndicator /> : null}
        {!!roadmapList ? (
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
        ) : null}
      </View>

      <View
        style={{ paddingHorizontal: 20, paddingTop: 30, paddingBottom: 14 }}
      >
        <TextApp
          size={theme.fonts.subTitle}
          text={"Em alta"}
          isBold
          color={theme.colors.title}
        />
      </View>

      <View style={{}}>
        {roadmapFavorite.length == 0 ? <ActivityIndicator /> : null}
        {!!roadmapFavorite ? (
          <FlatList
            snapToAlignment={"start"}
            scrollEventThrottle={16}
            decelerationRate={"fast"}
            showsVerticalScrollIndicator={false}
            keyExtractor={(item, i) => `${item}${i}`}
            data={roadmapFavorite}
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
