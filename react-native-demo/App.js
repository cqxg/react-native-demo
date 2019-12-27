import React from 'react';
import { ApplicationProvider, IconRegistry, Layout } from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { mapping, light as lightTheme } from '@eva-design/eva';

import { TextField } from './components/TextField/Text';
import { InputField } from './components/InputField/Input';
import { ButtonField } from './components/ButtonField/Button';
import { ModeField } from './components/ModeField/Mode';

const HomeScreen = () => (
    <Layout>
        <TextField />
        <InputField />
        <ButtonField />
        <ModeField />
    </Layout>
);

const App = () => (
    <React.Fragment>
        <IconRegistry icons={EvaIconsPack} />
        <ApplicationProvider mapping={mapping} theme={lightTheme}>
            <HomeScreen />
        </ApplicationProvider>
    </React.Fragment>
);

export default App;