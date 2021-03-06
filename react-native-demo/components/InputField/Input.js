import React from 'react';
import { Input } from '@ui-kitten/components';

import { StyleSheet } from 'react-native';

export const InputField = () => {

    const [value, setValue] = React.useState('');

    return (
        <Input style={styles.input}
            size='large'
            placeholder='Enter Text'
            value={value}
            onChangeText={setValue}
        />
    );
};

const styles = StyleSheet.create({
    input: {
    },
});