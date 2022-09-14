import React from 'react';
import { View , Text, Image, TouchableOpacity} from 'react-native';
import theme from '../../../utils/theme'
import { style } from './styles';

export function Initial(){
    return(
        <View style={style.container}>
            <View style={style.logo}>
                <Image               
                source={require('../../../assets/banner.png')}
                />
                <Text style={[style.title, {color: theme.colors.title, fontWeight: '600'}]}>Welcome</Text>
                <Text style={[style.text, {color: theme.colors.text}]}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</Text>
                
            </View>
            <View style={style.content}>
                <Text style={style.title}>Welcome</Text>
                <Text style={style.text}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</Text>
                <TouchableOpacity 
                style={style.button}
                >
                    <Text style={style.buttonTitle}>Acessar</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}