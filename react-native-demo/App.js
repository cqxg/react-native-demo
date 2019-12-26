import React from 'react';
import { ApplicationProvider, IconRegistry, Layout } from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { mapping, light as lightTheme } from '@eva-design/eva';

import { TextSimpleUsageShowcase } from './components/TextField/Text';
import { InputSimpleUsageShowcase } from './components/InputField/Input';
import { SelectSimpleUsageShowcase } from './components/ButtonField/Button';
import { TabBarWithIconShowcase } from './components/ModeField/Mode';

const HomeScreen = () => (
    <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <TextSimpleUsageShowcase />
        <InputSimpleUsageShowcase />
        <SelectSimpleUsageShowcase />
        <TabBarWithIconShowcase />
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