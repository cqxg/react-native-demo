import React from 'react';
import { Input } from '@ui-kitten/components';
import { StyleSheet } from 'react-native';

export const InputSimpleUsageShowcase = () => {

  const [value, setValue] = React.useState('');

  return (
    <Input
      placeholder='Enter Text'
      value={value}
      onChangeText={setValue}
    />
  );
};

const styles = StyleSheet.create({
    input: {
      margin: 8,
    },
  });