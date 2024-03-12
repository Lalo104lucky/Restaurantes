import { Button, Icon, Input, Image } from "@rneui/base";
import React, { useState } from "react";
import { View, StyleSheet} from "react-native";
import Logo from '../../../../../assets/logo.png';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

export default function Create(){ 
    const [showPassword, setShowPassword] = useState(true);
    const [showMessage, setShowMessage] = useState('');
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [visible, setVisible] = useState(false);
    const auth = getAuth();

    const register = async () => {
        if (email.trim() !== '' && password.trim() !== '') {
          setVisible(true);
          try {
            const response = await createUserWithEmailAndPassword(
              auth,
              email,
              password
            );
    
          } catch (error) {
            console.log('error', error);
          } finally {
            setVisible(false);
          }
        } else {
          setShowMessage("Campos Obligatorios");
        }
      };

      const confirmarPass = () => {
        if (!isEmpty(password)){
          setShowMessage("Password incorrecto");
        }
      };

    return (
        <View style={styles.container}>
            <Image
                source={Logo}
                style={styles.logo}
                resizeMethod="auto"
            />
            <Input
                placeholder="Correo Electronico"
                label= "Correo electronico: "
                keyboardType="email-address"
                onChange={({nativeEvent: {text}}) => setEmail(text)}
                labelStyle={styles.label}
                containerStyle={styles.input}
                rightIcon = {
                    <Icon
                        type="material-community"
                        name="email-outline"
                        color='tomato'   
                    />
                }
                errorMessage={showMessage}
            />
            <Input
                placeholder="************"
                label="Contraseña: "
                onChange={({nativeEvent: {text}}) => setPassword(text)}
                labelStyle={styles.label}
                containerStyle={styles.input}
                secureTextEntry={showPassword}
                rightIcon={
                    <Icon
                        type="material-community"
                        name={showPassword ? 'eye-outline' : 'eye-off-outline'}
                        color='tomato'
                        onPress={() => setShowPassword(!showPassword)}
                    />
                }
                errorMessage={showMessage}
            />

            <Input
                placeholder="************"
                label="Confirmar Contraseña: "
                onChange={({nativeEvent: {text}}) => setPassword(text)}
                labelStyle={styles.label}
                containerStyle={styles.input}
                secureTextEntry={showPassword}
                rightIcon={
                    <Icon
                        type="material-community"
                        name={showPassword ? 'eye-outline' : 'eye-off-outline'}
                        color='tomato'
                        onPress={() => setShowPassword(!showPassword)}
                    />
                }
                errorMessage={showMessage}
            />

            <Button 
                title='Crear Cuenta'
                onPress={register}
                containerStyle={styles.btnContainer}
                buttonStyle={styles.btnStyle}
                titleStyle={{color: "black"}}
                errorMessage={showMessage}
                
            />
        </View>
                
    )
}

const styles = StyleSheet.create({
    container: {
            flex: 1,
            backgroundColor: 'white',
            justifyContent: 'center',
            alignItems: "center",
            padding: 16
    },
    label: {
        color: 'tomato',
    },
    input: {
        paddingHorizontal: 16,
        marginVertical: 8,
    },
    btnContainer: {
        width: '80%',
    },
    btnStyle: {
        backgroundColor: '#fcd562',
        color: '#000',
        borderRadius: 20,
    },
    logo: {
        width: 120,
        height: 120,
        marginBottom: 8
    }

})