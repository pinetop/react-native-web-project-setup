import React, { Component } from 'react';
import { Text, View, Image, StyleSheet, Button, Dimensions } from 'react-native';

import logo from './logo.svg';
import './App.css';




var FAKE_BOOK_DATA = [
    {volumeInfo: {title: 'The Catcher in the Rye', authors: "J. D. Salinger", imageLinks: {thumbnail: 'http://books.google.com/books/content?id=PCDengEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api'}}}
];

class App extends Component {


  render() {
    var book = FAKE_BOOK_DATA[0];

    return (

      <View style={styles.container}>
                     <Image source={{uri: book.volumeInfo.imageLinks.thumbnail}}
                                 style={styles.thumbnail} />
                     <View style={styles.rightContainer}>
                         <Text style={styles.title}>{book.volumeInfo.title}</Text>
                         <Text style={styles.author}>{book.volumeInfo.authors}</Text>
                     </View>
                     <Button
                      onPress={()=> {alert('Hello World')}}
                      title="Learn More"
                      color="#841584"
                      accessibilityLabel="Learn more about this purple button"
                    />
       </View>

    );
  }
}

// Styles
const styles = StyleSheet.create({
  card: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'grey'
  },
  image: {
    height: 40,
    marginVertical: 10,
    width: 40
  },
  description: {
      fontSize: 20,
      backgroundColor: 'white'
  },
  container: {
      flex: 1,
      height: Dimensions.get("window").height,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
      padding: 10
  },
  thumbnail: {
      width: 53,
      height: 81,
      marginRight: 10
  },
  rightContainer: {
      flex: 1
  },
  title: {
      fontSize: 20,
      marginBottom: 8
  },
  author: {
      color: '#656565'
  }

})

export default App;
