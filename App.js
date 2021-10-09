import React, { Component } from 'react';
import { StyleSheet, View, ScrollView, SafeAreaView, StatusBar, Text } from 'react-native';

import LoadingService from './src/service/LoadingService';
import { getLatestCotizacion } from './src/api/dolarSi';
import { getTopHeadlinesApi } from './src/api/news';
import {map} from 'lodash';


import Header from './src/components/Header';
import CotizacionDolar from './src/components/CotizacionDolar';
import New from './src/components/New';
import Footer from './src/components/Footer';


import Splash from './src/screen/Splash';

export default class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      cotizacionMoneda: [],
      news: []
    };

    LoadingService.load( v => this.setState({loading: true}));

  }

  componentDidMount(){

    getLatestCotizacion()
    .then(cotizacionMoneda => {

      this.setState(() => ({ cotizacionMoneda: cotizacionMoneda }));
    });

    getTopHeadlinesApi()
    .then(news => {

      this.setState(() => ({ news: news.articles }));
    });


  }

  render(){
    const { loading, cotizacionMoneda, news } = this.state
    return (
      <>
       
         {
           !loading ?
           
            <Splash/>
            :
            cotizacionMoneda != '' ?
            <>
             <StatusBar backgroundColor="#6200ee" />
              <SafeAreaView >
                <Header />
                <CotizacionDolar 
                  cotizacionMoneda={cotizacionMoneda}
                />

                <ScrollView style={styles.scrollView}>

                {map(news,(data) => (
                  
                  <New key={data.id} data={data}/>

                ))}

                <Footer/>

                </ScrollView>
                
                
              </SafeAreaView>
            </>
            :
            null
         }
       </>   
       
     );
  }
 
}

const styles = StyleSheet.create({

  ScrollView: {
    height: '100%'
  }
});