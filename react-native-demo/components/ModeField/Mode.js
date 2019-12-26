import React from 'react';
import {
  Icon,
  Layout,
  Tab,
  TabBar,
} from '@ui-kitten/components';

import { StyleSheet } from 'react-native';

const PersonIcon = (style) => (
  <Icon {...style} name='person-outline' />
);

const BellIcon = (style) => (
  <Icon {...style} name='bell-outline' />
);

export const ModeField = () => {

  const [topTabsIndex, setTopTabsIndex] = React.useState(0);

  return (
    <Layout style={styles.container}>

      <TabBar
        selectedIndex={topTabsIndex}
        onSelect={setTopTabsIndex}>
        <Tab icon={PersonIcon}/>
        <Tab icon={BellIcon}/>
      </TabBar>

    </Layout>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 0.2,
        flexDirection: 'row',
        alignItems: 'center' 
    },
});
