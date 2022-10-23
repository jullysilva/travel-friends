import { FontAwesome } from "@expo/vector-icons";
import React from "react";
import { View, TouchableOpacity, StatusBar } from "react-native";
import TextApp from "../../../components/Text";
import { formatNickName } from "../../../utils/formatNickName";
import theme from "../../../utils/theme";
import { styles } from "./styles";

export function Profile() {
  return (
    <View style={styles.container}>
      <View style={styles.headerProfile}>
        <View style={styles.nickName}>
          <TextApp
            text={formatNickName("Leo Anjos")}
            size={24}
            color={theme.colors.shape}
          />
        </View>
        <View style={styles.underlineProfile}>
          <TextApp text="Leo Anjos" size={24} />
        </View>
      </View>
      <View style={styles.bodyProfile}>
        <View style={styles.menuProfile}>
          <TouchableOpacity>
            <View style={styles.underlineButton}>
              <FontAwesome
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                //@ts-ignore
                name={"heart"}
                size={24}
                color={theme.colors.title}
                style={{ marginRight: 20 }}
              />
              <TextApp text="Favoritos" size={theme.fonts.text} />
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View style={styles.underlineButton}>
              <FontAwesome
                name={"user"}
                size={24}
                color={theme.colors.title}
                style={{ marginRight: 20 }}
              />
              <TextApp text="Editar conta" size={theme.fonts.text} />
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View style={styles.underlineButton}>
              <FontAwesome
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                //@ts-ignore
                name={"arrow-circle-o-right"}
                size={24}
                color={theme.colors.title}
                style={{ marginRight: 20 }}
              />
              <TextApp
                text="sair"
                size={theme.fonts.text}
                color={theme.colors.title}
              />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
