import React, { forwardRef, LegacyRef } from "react";
import{ View,Text, TextInput, TextInputProps, Touchable, TouchableOpacity } from "react-native";
import {style} from "./styles";
import { themas } from "../../global/themes";
import {FontAwesome, MaterialIcons, Octicons} from "@expo/vector-icons";
import { text } from "stream/consumers";

type IconComponent = React.ComponentType<React.ComponentProps<typeof MaterialIcons>> | 
                     React.ComponentType<React.ComponentProps<typeof FontAwesome>> | 
                     React.ComponentType<React.ComponentProps<typeof Octicons>>;

type Props = TextInputProps & {
    IconLeft?: IconComponent,
    IconRight?: IconComponent,
    IconLeftName?: string,
    IconRightName?: string,
    title?: string,
    onIconLeftPress?: () => void,
    onIconRightPress?: () => void
}

export const Input = forwardRef((props:Props,ref: LegacyRef<TextInput> | null) => {

    const {IconLeft, IconRight, IconLeftName, IconRightName, title, onIconLeftPress, onIconRightPress, ...rest} = props

    const calculateSizeWidth = () =>{
        if(IconLeft && IconRight){
            return '80%'
        }else if(IconLeft || IconRight){
            return '90%'
        }else{
            return '100%'
        }
    }


    return(
        <>
            {title && (<Text style={style.inputLabel}>{title}</Text>)}
            <View style={style.boxInput}>
                {IconLeft && IconLeftName && (
                    <TouchableOpacity onPress={onIconLeftPress} style={style.button}>
                        <IconLeft name={IconLeftName as any} size={20} color={themas.colors.gray} style={style.Icon} />
                    </TouchableOpacity>
                )}
                
                <TextInput
                    style={[
                        style.Input,{width:calculateSizeWidth()}
                    ]}
                    {...rest}
                />
                {IconRight && IconRightName && (
                    <TouchableOpacity  onPress={onIconRightPress} style={style.button}>
                        <IconRight name={IconRightName as any} size={20} color={themas.colors.gray} style={style.Icon} />
                    </TouchableOpacity>
                )}
            </View>
        </>
    )
})