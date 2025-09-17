import React from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

export default function Index() {
  const [userWeight, setUserWeight] = React.useState('');
  const [userHeight, setUserHeight] = React.useState('');
  const [imc, setImc] = React.useState('');
  const [messageImc, setMessageImc] = React.useState("Preencha o peso e a altura");

  function resetApp() {
    setUserHeight('')
    setMessageImc('Preencha o peso e a altura com . separando as casas decimais')
    setImc('')
    setUserWeight('')
  }

  const calcularImc = () => {
    if (!userWeight || !userHeight) {
      setMessageImc("Preencha o peso e a altura com . separando as casas decimais");
      console.log('Campos não preenchidos');
      return;
    }

    // Cálculo do IMC
    const p = parseFloat(userWeight);
    const a = parseFloat(userHeight);
    const imcCalculado = p / (a * a);
    setImc(imcCalculado.toFixed(2));  // Atualizando o estado do IMC

    // Classificação do IMC
    if (imcCalculado < 18.6) {
      setMessageImc("Você está abaixo do peso! Seu IMC é: " + imcCalculado.toFixed(2));
    } else if (imcCalculado >= 18.6 && imcCalculado < 24.9) {
      setMessageImc("Peso ideal! Seu IMC é: " + imcCalculado.toFixed(2));
    } else if (imcCalculado >= 24.9 && imcCalculado < 34.9) {
      setMessageImc("Levemente acima do peso! Seu IMC é: " + imcCalculado.toFixed(2));
    } else {
      setMessageImc("Acima do peso! Seu IMC é: " + imcCalculado.toFixed(2));
    }
    console.log(`Mensagem IMC: ${messageImc}`);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={resetApp} style={styles.resetbutton}>
        <Text style={styles.resetText}>
          Resetar
        </Text>
      </TouchableOpacity>

      <View style={styles.inputBox}>
        <Text style={styles.title}>Calculadora IMC</Text>
        
        <TextInput
          style={styles.input}
          placeholderTextColor="#FFFFFFd5"
          placeholder="Peso (kg)"
          keyboardType="numeric"
          value={userWeight}
          onChangeText={setUserWeight}
        />

        <TextInput
          style={styles.input}
          placeholderTextColor="#ffffffd5"
          placeholder="Altura (cm)"
          keyboardType="numeric"
          value={userHeight}
          onChangeText={setUserHeight}
        />

        <TouchableOpacity 
          onPress={calcularImc}
          style={styles.calcularBtn}>
          <Text>Calcular</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.imcText}>{messageImc}</Text>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#353535',
  },
  resetbutton: {
     backgroundColor: '#9EEFC3',
      width: 80,
     height: 40,
     borderRadius: 30,
     position: 'absolute',
     justifyContent: 'center',
     alignItems: 'center',
     top: 50,
     right: 10,
  },
  resetText: {
    fontWeight: 700,
    color: '#000000',
    fontSize: 14,
  },

  inputBox: {
    width: '90%',
    gap: 30,
  },

input:{
color: '#FFFFFF',
fontSize: 18,
padding: 10,
borderBottomWidth: 1,
borderBottomColor: '#9EEFC3',
marginBottom: 10,
  
},

  title:{
    fontSize: 26,
    fontWeight: 700,
    color: '#FFFFFF',
    marginBottom: 10,
    width:  350,
    textAlign: 'left',
  },

  calcularBtn:{
    backgroundColor: '#9EEFC3',
    width: '100%',
    height: 50,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },

  imcText:{
    fontSize: 16,
    color: '#fff',
    marginTop: 30,
    width: 300,
    textAlign: 'center'
  }
})