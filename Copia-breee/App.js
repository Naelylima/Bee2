import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {app} from  './pages/firebaseConfig'

import Routers from './routers';
import Carrinho from './pages/carrinho';

export default function App() {
  return (
    // <Routers/>
    <Carrinho/>
  )
}

