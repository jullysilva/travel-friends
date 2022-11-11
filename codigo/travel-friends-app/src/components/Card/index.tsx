import React, { useState } from "react";
import { TouchableOpacity, View } from "react-native";

import { FontAwesome } from "@expo/vector-icons";

import { RoadMap } from "../../@types/models.interface";
import theme from "../../utils/theme";
import TextApp from "../Text";
import { styles } from "./styles";
type CardProps = {
  item: RoadMap;
};

export default function Card({ item }: CardProps) {
  const [isFavorite, setIsFavorite] = useState<boolean>(item.favorites);

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => {}}
      key={item._id}
    >
      <View style={styles.header}>
        <View style={styles.img}></View>
        <View style={styles.textBox}>
          <TextApp
            size={theme.fonts.subText}
            text={item.title}
            isBold
            fontWeight="700"
            color={theme.colors.title}
          />
          <TextApp
            size={theme.fonts.subText}
            text={` ${item.start} - ${item.end}`}
            color={theme.colors.title}
            fontWeight="400"
          />
          <TextApp
            size={theme.fonts.subText}
            text={`Valor: R$ ${item.price}`}
            color={theme.colors.text}
            fontWeight="400"
          />
        </View>
        <View
          style={{
            alignSelf: "flex-end",

            alignItems: "flex-end",

            flex: 1,
          }}
        >
          <TouchableOpacity onPress={() => setIsFavorite(!isFavorite)}>
            {isFavorite ? (
              <FontAwesome name={"heart"} size={28} color={"red"} />
            ) : (
              <FontAwesome name={"heart-o"} size={28} color={"gray"} />
            )}
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
}
