import { FontAwesome } from "@expo/vector-icons";
import React, { useEffect } from "react";
import { View, TouchableOpacity, StatusBar } from "react-native";
import TextApp from "../../../components/Text";
import { formatNickName } from "../../../utils/formatNickName";
import theme from "../../../utils/theme";
import { useAuth } from "../../../contexts/useAuth";
import { userHook } from "../../../contexts/userData";

import { styles } from "./styles";
import { useTabAPPNavigation } from "../../../hooks/navigation";
import { useNotification } from "../../../contexts/useNotification";
import { useFocusEffect } from "@react-navigation/native";

export function Profile() {
  const { logout } = useAuth();
  const { userData } = userHook();
  const { notificatioList } = useNotification();
  const navigation = useTabAPPNavigation();

  const not = notificatioList.length;

  useFocusEffect(() => {
    console.log("aaa");
  });

  return (
    <View style={styles.container}>
      <View style={styles.headerProfile}>
        <View style={styles.nickName}>
          <TextApp
            text={formatNickName(userData.name)}
            size={24}
            color={theme.colors.shape}
          />
        </View>
        <View style={styles.underlineProfile}>
          <TextApp text={userData.name} size={24} />
        </View>
      </View>
      <View style={styles.bodyProfile}>
        <View style={styles.menuProfile}>
          <TouchableOpacity
            onPress={() => navigation.navigate("FavoriteScreens")}
          >
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
                name={"bell"}
                size={24}
                color={theme.colors.title}
                style={{ marginRight: 20 }}
              />
              <TextApp text={`Notificação - ${not}`} size={theme.fonts.text} />
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

          <TouchableOpacity onPress={() => logout()}>
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
