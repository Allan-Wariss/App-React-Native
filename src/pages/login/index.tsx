import React, { useState } from "react";
import {Text, View, Image, TextInput, Touchable, TouchableOpacity, Alert, ActivityIndicatorBase, ActivityIndicator} from "react-native";
import {style} from "./styles";
import logo from "../../assets/logo.png";
import {MaterialIcons} from "@expo/vector-icons";
import { themas } from "../../global/themes";

export default function Login (){

    const [isPasswordSecure, setPasswordSecure] = useState(true);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false)

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
                <Text style={style.inputLabel}>ENDEREÇO DE E-MAIL</Text>

                <View style={style.boxInput}>
                    <TextInput
                        value={email}
                        onChangeText={setEmail}
                        style={style.Input}
                        placeholder="User@mail.com"
                    />
                    <MaterialIcons name="email" size={20} color={themas.colors.gray}/>
                </View>
                
                <Text style={style.inputLabel}>SENHA</Text>
                <View style={style.boxInput}>
                    <TextInput
                        value={password}
                        onChangeText={setPassword}
                        style={style.Input} 
                        textContentType="password" 
                        placeholder="********" 
                        secureTextEntry={isPasswordSecure} />
                    <TouchableOpacity onPress={() => setPasswordSecure(!isPasswordSecure)}>
                        <MaterialIcons name="remove-red-eye" size={20} color={themas.colors.gray}/>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={style.boxBottom}>
                <TouchableOpacity style={style.button} onPress={() => getLogin()}>
                    {
                        loading?
                            <ActivityIndicator color={'#ffff'} size={'small'}/>
                        :
                            <Text style={style.textButton}>Entrar</Text>
                    }
                    
                </TouchableOpacity>
            </View>
            <Text style={style.textBottom}>Não tem conta? <Text style={style.textBottomCreate}> Crie agora!</Text></Text>
        </View>
        
    )
}