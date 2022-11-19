import React, { useState } from "react";
import { RouteProp, useRoute } from "@react-navigation/native";
import { View } from "react-native";
import MapView, { Marker } from "react-native-maps";
import Button from "../../../components/Button";
import TextApp from "../../../components/Text";
import theme from "../../../utils/theme";

import { style } from "./styles";
import { HomeRoutesParams } from "../../../routes/routes";
import HeaderGoback from "../../../components/HeaderGoback";

type RoadmapScreenProps = RouteProp<HomeRoutesParams, "Roadmap">;

export default function Roadmap() {
  const { params } = useRoute<RoadmapScreenProps>();
  const latitude = -19.9337364;
  const longitude = -43.9362059;

  return (
    <View style={style.container}>
      <HeaderGoback color={theme.colors.text} title={params.title} />
      <MapView
        initialRegion={{
          latitude: latitude,
          longitude: longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        style={style.map}
        loadingEnabled
        showsUserLocation
      >
        <Marker coordinate={{ latitude: latitude, longitude: longitude }} />
      </MapView>
      <View style={style.content}>
        <View style={style.header}>
          <View>
            <TextApp
              size={theme.fonts.title}
              text={params?.title}
              isBold
              fontWeight="700"
              color={theme.colors.title}
            />
            <TextApp
              size={theme.fonts.subText}
              text={` ${params.start} - ${params.end}`}
              color={theme.colors.title}
              fontWeight="400"
            />
          </View>
          <View style={style.headerPrice}>
            <TextApp
              size={theme.fonts.subTitle}
              text={params.isFree ? "Gratuito" : ` R$ ${params.price}`}
              color={theme.colors.primary_30}
              fontWeight="400"
              isBold
            />
          </View>
        </View>
        <View style={style.body}>
          <TextApp
            size={theme.fonts.subTitle}
            text={"Descrição"}
            color={theme.colors.title}
            isBold
          />
          <TextApp
            size={theme.fonts.subText}
            text={`${params?.description}`}
            color={theme.colors.text}
          />
          <View style={{ paddingTop: 16 }}>
            <TextApp
              size={theme.fonts.subTitle}
              text={"Participantes"}
              color={theme.colors.title}
              isBold
            />
            <TextApp
              size={theme.fonts.subText}
              text={` ${params.participants.length} de ${params.person} `}
              color={theme.colors.text}
            />
          </View>
        </View>
        <View style={style.footer}>
          <Button
            onPress={() => {
              console.log(params);
            }}
            title="Inscreva-se"
          />
        </View>
      </View>
    </View>
  );
}
