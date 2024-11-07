import { Dimensions, StyleSheet } from "react-native";
import { themas } from "../../global/themes";


export const style = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },
    boxTop:{
        width: "100%",
        height: Dimensions.get("window").height/3,
        alignItems:"center",
        justifyContent:"center"
    },
    boxMid:{
        width: "100%",
        height: Dimensions.get("window").height/4,
        paddingHorizontal:37
    },
    boxBottom:{
        width: "100%",
        height: Dimensions.get("window").height/3,
        alignItems:'center',
    },
    logo:{
        width:80,
        height:80,
    },
    title:{
        fontSize:18,
        fontWeight: "bold",
        marginTop:40,
    },
    textBottom:{
        fontSize:16,
        color: themas.colors.gray,
    },
    textBottomCreate:{
        color: themas.colors.primary,
    }
})