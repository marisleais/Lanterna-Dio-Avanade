import React, {useState, useEffect} from 'react'

import {View,StyleSheet, Image, TouchableOpacity,} from 'react-native';

import Torch from 'react-native-torch';

import RNShake from 'react-native-shake';

const App = () => {
  const [toggle, setToggle] = useState(false);
  
  const handleChangeToggle = () => setToggle(oldToggle => ! oldToggle)

  useEffect(()=>{
    //liga flaSH do celular
    Torch.switchState(toggle);
  },[toggle]);

  useEffect(() => {
  const subscription = RNShake.addListener(() => {
    setToggle(oldToggle => ! oldToggle);
  
  });

  return() => subscription.remove();


  },[]);
  
  return(
    <View style={toggle ? style.ContainerBranco : style.Container}>

    <TouchableOpacity onPress ={handleChangeToggle}>

    

    

    <Image style={toggle ? style.TituloOn :style.TituloOff} source={
      toggle
      ? require('./assets/icons/tituloavanade.png')
      : require('./assets/icons/tituloavanadebranco.png')  } />

    

    <Image style={toggle ? style.LanternaOn : style.LanternaOff} source={
      toggle 
      ? require('./assets/icons/eco-light.png')
      :  require('./assets/icons/eco-lightwhite.png') } />

     

    <Image style={toggle ? style.LogoDioOn : style.LogoDioOff} source={
      toggle
      ? require('./assets/icons/logo-dio.png')
      : require('./assets/icons/logo-dio-white.png')} />

    </TouchableOpacity>
    </View>

    
  )


}


export default App;

const style = StyleSheet.create({

  Container:{

    flex: 1,
    backgroundColor: 'black',
    /*alignItems: 'center',
    justifyContent: 'center',*/
    
    },

  ContainerBranco:{

      flex: 1,
      backgroundColor: 'white',
      /*alignItems: 'center',
      justifyContent: 'center',*/
      
      },

/*text:{
fontFamily:'',
textAlign: 'center',
 fontSize: 40,
 padding: 0,
 fontWeight: 'bold',
 color: '#ffb300',

},*/

LanternaOn:{
  margin: 15,
  resizeMode:'contain',
  alignSelf:'center',
  width:250,
  height:250,
},

LanternaOff:{
  tintColor:'white',
  margin: 15,
  resizeMode:'contain',
  alignSelf:'center',
  width:250,
  height:250,
},

TituloOn:{
  marginTop: 20,
  resizeMode:'contain',
  alignSelf:'center',
  width:170,
  height:170,
},

TituloOff:{
  tintColor:'white',
  marginTop: 20,
  resizeMode:'contain',
  alignSelf:'center',
  width:170,
  height:170,
},

LogoDioOn:{
  marginLeft: 10,
  marginTop: 25,
  resizeMode:'contain',
  alignSelf:'center',
  width:130,
  height:130,
},

LogoDioOff:{
  tintColor:'white',
  marginLeft: 10,
  marginTop: 25,
  resizeMode:'contain',
  alignSelf:'center',
  width:130,
  height:130,
},



});