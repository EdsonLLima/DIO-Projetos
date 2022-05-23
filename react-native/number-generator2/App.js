import React, {useState} from "react";
import { 
        Text,
        SafeAreaView,
        TouchableOpacity,
        StyleSheet 
      } from "react-native";

const App = () => {

  const [number, setNumber] = useState(0)

  function handleNumber(){

    const new_number = Math.floor(Math.random() * 10)
    
    setNumber(number + new_number)    
  }

  function handleNumberClear(number){
    const number_reset = 0

    setNumber(number_reset)

  }

  return (
    <SafeAreaView style={style.container}>
      <Text style={style.number}>{number}</Text>
      <TouchableOpacity onPress={handleNumber} style={style.button}>
        <Text>Gerar Número</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleNumberClear} style={style.button}>
        <Text>Limpar</Text>
      </TouchableOpacity>

      <Text style={style.by}>
      Developed by - Edson Lima
      </Text>
    </SafeAreaView>
  )
}

const style = StyleSheet.create({
  container:{
    backgroundColor: '#4B0082',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  number: {
    fontSize: 38,
    color: '#ffffff',
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: '#ffffff',
    width: '80%',
    paddingHorizontal: 5,
    paddingVertical: 10,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },

  by:{
    color: '#ffffff',
    alignItems: 'center',
    paddingVertical: 15,
  }
})

export default App