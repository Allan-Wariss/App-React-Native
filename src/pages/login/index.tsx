import React, { useState } from "react";
import {Text, View, Image, TextInput, TouchableOpacity, Alert, ActivityIndicator} from "react-native";
import {style} from "./styles";
import logo from "../../assets/logo.png";
import {MaterialIcons, Octicons} from "@expo/vector-icons";
import { themas } from "../../global/themes";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

export default function Login (){

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(true);

    async function getLogin(){ //Como é um projeto sem backend, simula uma requisição real
        try{
            setLoading(true)
            if(!email || !password){ 
                setLoading(false) 
                return Alert.alert("Atenção","Informe os campos obrigatórios!")
            }
            setTimeout(()=>{
                if(email == "allan@wariss.com.br" && password == "123"){
                    setLoading(false)
                    return Alert.alert("LOGADO COM SUCESSO!")
                }
                Alert.alert("Credênciais ERRADAS")
                setLoading(false)
            },3000)
            
        }
        catch (error){
            Alert.alert("ERROR!")
        }
    }


    return(
        <View style={style.container}>
            <View style={style.boxTop}>
                <Image 
                    source={logo}
                    style={style.logo}
                    resizeMode="contain"
                    />
                <Text style={style.title}>Bem-Vindo de volta!</Text>
            </View>
            <View style={style.boxMid}>
                <Input
                    value={email}
                    onChangeText={setEmail}
                    title="ENDEREÇO DE E-MAIL"
                    IconRight={MaterialIcons}
                    IconRightName="email"
                />
                <Input
                    value={password}
                    onChangeText={setPassword}
                    title="SENHA"
                    IconRight={Octicons}
                    IconRightName={showPassword ? "eye-closed": "eye"}
                    secureTextEntry={showPassword}
                    onIconRightPress={() => setShowPassword(!showPassword)}
                />
            </View>
            <Button text="Entrar" loading={loading} onPress={getLogin}></Button>
            <Text style={style.textBottom}>Não tem conta? <Text style={style.textBottomCreate}> Crie agora!</Text></Text>
        </View>
        
    )
}