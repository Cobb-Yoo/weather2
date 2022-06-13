import React from "react";
import MapView from "react-native-maps";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
} from "react-native";
import { convenience, cafe } from "./location";
import { useState } from "react";

export default function MyPosition({ latitude, longitude }) {
  const [showConvenience, setShowConvenience] = useState(false);
  const [showCafe, setShowCafe] = useState(false);

  function changConvenienceState() {
    setShowConvenience(!showConvenience);
  }

  function changCafeState() {
    setShowCafe(!showCafe);
  }

  return (
    <View>
      <MapView
        style={styles.mapStyle}
        initialRegion={{
          latitude: latitude,
          longitude: longitude,
          latitudeDelta: 0.004,
          longitudeDelta: 0.004,
        }}
      >
        <MapView.Marker
          coordinate={{ latitude: latitude, longitude: longitude }}
          title="this is a marker"
          description="this is a marker example"
        />

        {convenience.map(
          (marker) =>
            showConvenience && (
              <MapView.Marker
                key={marker.key}
                coordinate={{
                  latitude: marker.latitude,
                  longitude: marker.longitude,
                }}
                title="this is a convenience"
              >
                <Image
                  style={styles.icons}
                  source={require("./assets/icon-point-convenience.png")}
                />
              </MapView.Marker>
            )
        )}

        {cafe.map(
          (marker) =>
            showCafe && (
              <MapView.Marker
                key={marker.key}
                coordinate={{
                  latitude: marker.latitude,
                  longitude: marker.longitude,
                }}
                title="this is a cafe"
              >
                <Image
                  style={styles.icons}
                  source={require("./assets/location.png")}
                />
              </MapView.Marker>
            )
        )}
      </MapView>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={changConvenienceState}
          style={styles.touchableOpacityContainer}
        >
          <Image
            style={styles.image}
            source={require("./assets/icon-shop.png")}
          ></Image>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={changCafeState}
          style={styles.touchableOpacityContainer}
        >
          <Image
            style={styles.image}
            source={require("./assets/icon-coffee.png")}
          ></Image>
        </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
  },
  mapStyle: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height / 2,
    justifyContent: "center",
  },

  button: {
    fontSize: 25,
    fontWeight: "800",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "white",
  },
  touchableOpacityContainer: {
    width: 160,
    height: 50,
    //backgroundColor: "gray",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    padding: 0,
    margin: 10,
  },
  image: {
    alignItems: "center",
    padding: 0,
    width: 40,
    height: 40,
  },
  icons: {
    width: 60,
    height: 60,
  },
});
