import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Alert } from "react-native";
import Weather from "./Weather";
import Loading from "./Loading";
import MyPosition from "./MyPosition";
import * as Location from "expo-location";
import axios from "axios";
import React from "react";

const WEATHER_API_KEY = "f1e2dfa1f5bf7bcfd90bf896affa89b1";
//const WEATHER_API_KEY = "cf14e4f2fccc56cbf452c4f259ba2a90";
//

//const MAP_API_KEY = "";

export default class extends React.Component {
  state = {
    isLoading: true,
    latitude: null,
    longitude: null,
  };
  getWeather = async (latitude, longitude) => {
    const {
      data: {
        main: { temp },
        weather,
      },
    } = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&APPID=${WEATHER_API_KEY}`
    );
    this.setState({
      isLoading: false,
      condition: weather[0].main,
      temp,
      latitude: latitude,
      longitude: longitude,
    });
  };
  getLocation = async () => {
    try {
      await Location.requestForegroundPermissionsAsync();
      const {
        coords: { latitude, longitude },
      } = await Location.getCurrentPositionAsync();

      this.getWeather(latitude, longitude);
    } catch (error) {
      Alert.alert("Can't find you.", "So sad");
    }
  };
  componentDidMount() {
    this.getLocation();
  }
  render() {
    const { isLoading, temp, condition, latitude, longitude } = this.state;
    //const { isLoading, latitude, longitude } = this.state;
    return isLoading ? (
      <Loading />
    ) : (
      // <MyPosition latitude={latitude} longitude={longitude} />

      <Weather
        temp={Math.round(temp)}
        condition={condition}
        latitude={latitude}
        longitude={longitude}
      />
    );
  }
}
