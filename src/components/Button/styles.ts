import { StyleSheet } from "react-native";
import { themas } from "../../global/themes";

export const style = StyleSheet.create({
    button:{
        marginBottom:20,
        width:250,
        height:50,
        borderRadius:40,
        backgroundColor: themas.colors.primary,
        alignItems: 'center',
        justifyContent:'center',
        shadowColor: "#000",
        shadowOffset:{
            width:0,
            height:3,
        },
        shadowOpacity:0.29,
        shadowRadius:4.65,
        elevation:7,
    },
    textButton:{
        fontSize:16,
        fontWeight:"bold",
        color: themas.colors.bgScreen
    },
})