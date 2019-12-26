import React from 'react';
import { Text } from '@ui-kitten/components';

import { StyleSheet } from 'react-native';

export const TextField = () => (
  <Text style={styles.container}>Sample Text</Text>
);

const styles = StyleSheet.create({
    container: {
        flex: 4,
        justifyContent: 'center', 
        alignItems: 'center' 
    },
});