import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, Text } from 'react-native-paper';

const MenuSinglePlayer = ({ navigation }) => {
  return (
    <View style={styles.menuSinglePlayerContainer}>
      <Text>Select Difficulty</Text>
      <View style={styles.buttonsContainer}>
        <View style={styles.button}>
          <Button
            mode="contained"
            color="blue"
            onPress={() =>
              navigation.navigate('Shapes', {
                difficulty: 'easy',
                betweenTime: 250,
                flashTime: 800
              })
            }
          >
            Easy
          </Button>
        </View>
        <View style={styles.button}>
          <Button
            mode="contained"
            color="blue"
            onPress={() =>
              navigation.navigate('Shapes', {
                difficulty: 'normal',
                betweenTime: 250,
                flashTime: 300
              })
            }
          >
            Normal
          </Button>
        </View>
        <View style={styles.button}>
          <Button
            mode="contained"
            color="blue"
            onPress={() =>
              navigation.navigate('Shapes', {
                difficulty: 'hard',
                betweenTime: 250,
                flashTime: 100
              })
            }
          >
            Hard
          </Button>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  menuSinglePlayerContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonsContainer: {
    width: '50%'
  },
  button: {
    margin: 5
  }
});

export default MenuSinglePlayer;
