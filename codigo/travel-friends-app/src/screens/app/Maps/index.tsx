import React, { useState } from "react";
import { View } from "react-native";
import MapView, { Marker } from "react-native-maps";

import { style } from "./styles";

export function Maps() {
  const [region, setRegion] = useState(null);

  const latitude = -19.9337364;
  const longitude = -43.9362059;

  return (
    <View style={style.container}>
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
    </View>
  );
}
//TODO: colocar os pins do mapas dos roteiros
