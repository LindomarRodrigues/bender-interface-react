import 'react-native-gesture-handler';
import React from 'react';

import { createDrawerNavigator } from '@react-navigation/drawer';

import CustomDrawer from '../../../components/CustomDrawer';
import Perfil from '../Perfil';
import Referencia from './DrawerScreens/Referencia';
import Desenvolvedores from './DrawerScreens/Desenvolvedores';

const Drawer = createDrawerNavigator();

const DrawerNav=()=> {
  return (
      <Drawer.Navigator drawerContent={props => <CustomDrawer {...props}/>}>
        <Drawer.Screen name="Perfil" component={Perfil} />
        <Drawer.Screen name="Referência" component={Referencia} />
        <Drawer.Screen name="Desenvolvedores" component={Desenvolvedores} />
      </Drawer.Navigator>
  );
}

export default DrawerNav;