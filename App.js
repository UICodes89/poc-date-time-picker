/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

 //https://github.com/wix/react-native-calendars

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import {LocaleConfig} from 'react-native-calendars';
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';

import TimePicker from 'react-native-simple-time-picker';
 
const Tpicker = () =>{
     
      return(
        <View style={styles.containerTime}>
          {/* <Text>{selectedHours}:{selectedMinutes}</Text> */}
          <TimePicker
            //selectedHours={this.props.selectedHours}
            //selectedMinutes={this.props.selectedMinutes}
           onChange={(hours, minutes) =>  console.log(hours, minutes)}
          />
        </View>
      );
}
const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {

  constructor(props){
    super(props);
    let future = new Date(),
        lastDate =  new Date(future.setDate(future.getDate() + 28)).toString(); 
    this.state = {
        currentDate:new Date(),
        lastDay:lastDate,
        selectedHours:0,
        selectedMinutes:0

    }
  }
  render(props) {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native!</Text>
        <Text style={styles.instructions}>To get started, edit App.js</Text>
        <Text style={styles.instructions}>{instructions}</Text>
        <Tpicker selectedHours={this.state.selectedHours} selectedMinutes={this.state.selectedMinutes}/>
        <Calendar
           minDate={this.state.currentDate}
           // Maximum date that can be selected, dates after maxDate will be grayed out. Default = undefined
          maxDate={this.state.lastDay}
           // Handler which gets executed on day press. Default = undefined
           onDayPress={(day) => {console.log('selected day', day)}}
          // Specify style for calendar container element. Default = {}
          style={{
            borderWidth: 1,
            borderColor: 'gray',
            height: 350
          }}
          // Specify theme properties to override specific styles for calendar parts. Default = {}
          theme={{
            backgroundColor: '#ffffff',
            calendarBackground: '#ffffff',
            textSectionTitleColor: '#b6c1cd',
            selectedDayBackgroundColor: '#00adf5',
            selectedDayTextColor: '#ffffff',
            todayTextColor: '#00adf5',
            dayTextColor: '#2d4150',
            textDisabledColor: '#d9e1e8',
            dotColor: '#00adf5',
            selectedDotColor: '#ffffff',
            arrowColor: 'orange',
            monthTextColor: 'blue',
            textMonthFontWeight: 'bold',
            textDayFontSize: 16,
            textMonthFontSize: 16,
            textDayHeaderFontSize: 16
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  containerTime: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
