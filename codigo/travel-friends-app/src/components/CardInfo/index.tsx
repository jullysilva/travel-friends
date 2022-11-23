import { FontAwesome } from "@expo/vector-icons";
import React from "react";
import { TouchableOpacity, View } from "react-native";

import { RoadMap } from "../../@types/models.interface";
import { useHomeNavigation } from "../../hooks/navigation";
import theme from "../../utils/theme";
import TextApp from "../Text";
import { styles } from "./styles";
type CardInfoProps = {
  item: RoadMap;
};

export default function CardInfo({ item }: CardInfoProps) {
  const navigation = useHomeNavigation();

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigation.navigate("Roadmap", item)}
      key={item._id}
    >
      <View style={styles.header}>
        <View style={styles.img}>
          <FontAwesome name={"coffee"} size={28} color={"white"} />
        </View>
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
            text={item.isFree ? "Gratuito" : `Valor: R$ ${item.price}`}
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
