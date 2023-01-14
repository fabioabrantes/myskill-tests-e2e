import React from 'react';
import {Text, TouchableOpacity, TouchableOpacityProps} from 'react-native';

import {styles} from './styles';

type IButtonProps = TouchableOpacityProps & {
  title: string;
}; // pega todos as propriedades desse componente

export function Button({title, ...rest}: IButtonProps) {
  return (
    <TouchableOpacity style={styles.button} activeOpacity={0.7} {...rest}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
}
