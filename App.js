import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Alert } from "react-native";
import Weather from "./Weather";
import Loading from "./Loading";
import MyPosition from "./MyPosition";
import * as Location from "expo-location";
import axios from "axios";
import React from "react";

const WEATHER_API_KEY = "f1e2dfa1f5bf7bcfd90bf896affa89b1";
const WEATHER_API_KEY_2 = "f1e2dfa1f5bf7bcfd90bf896affa89b1";
//const WEATHER_API_KEY = "cf14e4f2fccc56cbf452c4f259ba2a90";
//

//const MAP_API_KEY = "";

export default class extends React.Component {
  state = {
    isLoading: true,
    latitude: null,
    longitude: null,
    day2_tmp: null,
    day2_weather: "Rain",
    day3_tmp: null,
    day3_weather: "Rain",
    day4_tmp: null,
    day4_weather: "Rain",
    day5_tmp: null,
    day5_weather: "Rain",
    day6_tmp: null,
    day6_weather: "Rain",
    day7_tmp: null,
    day7_weather: "Rain",
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
      // latitude: 35.2487,
      // longitude: 128.9024,
    });
  };
  getWeekly = async (latitude, longitude) => {
    const {
      data: { daily },
    } = await axios.get(
      `http://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&APPID=${WEATHER_API_KEY}`
    );

    this.setState({
      day2_tmp: daily[2].temp.day,
      day2_weather: daily[2].weather[0].main,

      day3_tmp: daily[3].temp.day,
      day3_weather: daily[3].weather[0].main,

      day4_tmp: daily[4].temp.day,
      day4_weather: daily[4].weather[0].main,

      day5_tmp: daily[5].temp.day,
      day5_weather: daily[5].weather[0].main,

      day6_tmp: daily[6].temp.day,
      day6_weather: daily[6].weather[0].main,

      day7_tmp: daily[7].temp.day,
      day7_weather: daily[7].weather[0].main,
    });
  };
  getLocation = async () => {
    try {
      await Location.requestForegroundPermissionsAsync();
      const {
        coords: { latitude, longitude },
      } = await Location.getCurrentPositionAsync();

      this.getWeather(latitude, longitude);
      this.getWeekly(latitude, longitude);
    } catch (error) {
      Alert.alert("Can't find you.", "So sad");
    }
  };
  componentDidMount() {
    this.getLocation();
  }
  render() {
    const {
      isLoading,
      temp,
      condition,
      latitude,
      longitude,
      day2_tmp,
      day2_weather,
      day3_tmp,
      day3_weather,
      day4_tmp,
      day4_weather,
      day5_tmp,
      day5_weather,
      day6_tmp,
      day6_weather,
      day7_tmp,
      day7_weather,
    } = this.state;
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
        day2_tmp={day2_tmp}
        day2_weather={day2_weather}
        day3_tmp={day3_tmp}
        day3_weather={day3_weather}
        day4_tmp={day4_tmp}
        day4_weather={day4_weather}
        day5_tmp={day5_tmp}
        day5_weather={day5_weather}
        day6_tmp={day6_tmp}
        day6_weather={day6_weather}
        day7_tmp={day7_tmp}
        day7_weather={day7_weather}
      />
    );
  }
}
