import React from 'react';
import {View, Text, StyleSheet, Linking, Button} from 'react-native';

function Description({title, description, location, company, date, apply}) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.miniContainer}>
        <Text style={styles.miniHeading}>Description:</Text>
        <Text style={styles.text}>{description}</Text>
      </View>

      <View style={styles.miniContainer}>
        <Text style={styles.miniHeading}>Location:</Text>
        <Text style={styles.text}>{location}</Text>
      </View>

      <View style={styles.miniContainer}>
        <Text style={styles.miniHeading}>Company:</Text>
        <Text style={styles.text}>{company}</Text>
      </View>

      <View style={styles.miniContainer}>
        <Text style={styles.miniHeading}>Date:</Text>
        <Text style={styles.text}>{date}</Text>
      </View>

      <View style={styles.miniContainer}>
        <View style={styles.link}>
          {/* <Button title={"Apply Now"} /> */}
          <Text
            onPress={() => Linking.openURL(`${apply}`)}
            style={styles.linktext}>
            Apply Here
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#d8d8d8',
    height: 'auto',
  },
  title: {
    fontFamily: 'sans-serif',
    fontWeight: 'bold',
    paddingHorizontal: 15,
    color: 'black',
    marginVertical: 15,
    fontSize: 25,
  },
  miniContainer: {
    marginVertical: 15,
    paddingHorizontal: 15,
  },
  miniHeading: {
    fontFamily: 'sans-serif',
    fontWeight: 'bold',
    color: 'black',
    fontSize: 20,
  },
  text: {
    fontSize: 17,
  },
  link: {
    backgroundColor: '#009387',
    alignSelf: 'center',
    marginVertical: 20,
    alignContent: 'center',
    borderRadius: 15,
  },
  linktext: {
    color: 'white',
    paddingHorizontal: 20,
    paddingVertical: 15,
    fontSize: 18,
    fontWeight: 'bold',
  },
});
export default Description;
