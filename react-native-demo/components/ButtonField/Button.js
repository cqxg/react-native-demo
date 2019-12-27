import React from 'react';
import {
    Layout,
    Select,
} from '@ui-kitten/components';

import { StyleSheet } from 'react-native';

const data = [
    { text: 'English' },
    { text: 'Russian' },
];

export const ButtonField = () => {

    const [selectedOption, setSelectedOption] = React.useState(null);

    return (
        <Layout style={styles.container}>
            <Select
                data={data}
                selectedOption={selectedOption}
                onSelect={setSelectedOption}
            />
            <Select
                data={data}
                selectedOption={selectedOption}
                onSelect={setSelectedOption}
            />
        </Layout>
    );
};

const styles = StyleSheet.create({
    container: {
    },
    select: {
    }
});