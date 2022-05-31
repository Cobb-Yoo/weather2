import MapView from "react-native-maps";
import { View, Text, StyleSheet, Dimensions } from "react-native";

export default function MyPosition({ latitude, longitude }) {
  return (
    <View>
      <MapView
        style={styles.mapStyle}
        initialRegion={{
          latitude: latitude,
          longitude: longitude,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
      >
        <MapView.Marker
          coordinate={{ latitude: latitude, longitude: longitude }}
        />
      </MapView>
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
    height: Dimensions.get("window").height / 3,
    justifyContent: "center",
  },
});
