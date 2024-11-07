import { StyleSheet } from "react-native";
import { themas } from "../../global/themes";

export const style = StyleSheet.create({
    inputLabel:{
        marginLeft:5,
        color: themas.colors.gray,
        marginTop:20,
    },
    boxInput:{
        width:"100%",
        height: 40,
        borderWidth:1,
        borderRadius:40,
        marginTop:10,
        flexDirection:"row",
        alignItems:"center",
        paddingHorizontal:10,
        backgroundColor: themas.colors.lightGray,
        borderColor: themas.colors.lightGray,
    },
    Input:{
        height:"100%",
        width:"90%",
        borderRadius:40,

    },
    Icon:{
        width:"100%",
    },
    button:{
        width:"10%",
    },
})