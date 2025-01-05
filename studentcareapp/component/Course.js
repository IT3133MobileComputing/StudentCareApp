import { PaperProvider, Text } from 'react-native-paper';
import { StyleSheet, View, ScrollView } from 'react-native';
import { useState } from 'react';
import Header from './Header'
import Footer from './Footer'

export default function Course() {
  return (
    <PaperProvider>
            <Header />
                    <ScrollView>          
                    </ScrollView>
            <Footer />
        </PaperProvider>
    )
}