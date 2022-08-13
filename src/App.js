import {View, Text, Button, StyleSheet} from 'react-native';
import React, {useState, useEffect} from 'react';
import axios from 'axios';

const App = () =>{
  const [arr, setArr] = useState(1);
  const [api, setApi] = useState([]);

  useEffect(()=>{
    axios.get("https://jsonplaceholder.typicode.com/users").
    then((res)=>{
      setApi(res.data);
    }).catch((err)=>{
      alert(err);
    })
  })

  return(
    <View style={styles.container}>
      {
        api.map((res)=>{
          return(
            <View>
              <Text>{res.name}</Text>
              <Text>{res.user}</Text>
            </View>
          )
        })
      }
      <Text>{arr}</Text>
      <Button 
      style={styles.btn}
      title="+"
      onPress = {()=>{
        setArr(arr+1)
      }} />
      <Button 
      style={{color:'yellow'}}
      title="-"
      onPress = {()=>{
        setArr(arr-1)
      }} />
    </View>
  )
}

const styles = StyleSheet.create({
  container:{backgroundColor:'green'},
  btn:{backgroundColor:'yellow'}
})
export default App;