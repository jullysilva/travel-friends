import React from "react";
import { TouchableOpacity, View } from "react-native";

import { RoadMap } from "../../@types/models.interface";
import theme from "../../utils/theme";
import TextApp from "../Text";
import { styles } from "./styles";
type CardInfoProps = {
  item: RoadMap;
};

export default function CardInfo({ item }: CardInfoProps) {
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
            text={`valor: R$ ${item.price}`}
            color={theme.colors.text}
            fontWeight="400"
          />
        </View>
      </View>
      <View style={styles.footer}>
        <TextApp
          size={theme.fonts.subText}
          text={`${item.description}`}
          color={theme.colors.text}
        />
      </View>
    </TouchableOpacity>
  );
}
