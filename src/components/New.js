import React from 'react';
import { TouchableOpacity, StyleSheet, Text, View, Image, Linking, Alert  } from 'react-native';
import { Card, Title, Paragraph } from 'react-native-paper';
import moment from 'moment';
import es from 'moment/locale/es';
import { InAppBrowser } from 'react-native-inappbrowser-reborn';

export default function New(props) {

    const { data: { title, publishedAt, url, urlToImage } } = props

    const openUrl = async () => {
        
        try {
          
          if (await InAppBrowser.isAvailable()) {
            const result = await InAppBrowser.open(url, {
              // iOS Properties
              dismissButtonStyle: 'cancel',
              preferredBarTintColor: '#453AA4',
              preferredControlTintColor: 'white',
              readerMode: false,
              animated: true,
              modalPresentationStyle: 'fullScreen',
              modalTransitionStyle: 'coverVertical',
              modalEnabled: true,
              enableBarCollapsing: false,
              // Android Properties
              showTitle: true,
              toolbarColor: '#6200EE',
              secondaryToolbarColor: 'black',
              navigationBarColor: 'black',
              navigationBarDividerColor: 'white',
              enableUrlBarHiding: true,
              enableDefaultShare: true,
              forceCloseOnRedirection: false,
              // Specify full animation resource identifier(package:anim/name)
              // or only resource name(in case of animation bundled with app).
              animations: {
                startEnter: 'slide_in_right',
                startExit: 'slide_out_left',
                endEnter: 'slide_in_left',
                endExit: 'slide_out_right'
              },
              headers: {
                'my-custom-header': 'my custom header value'
              }
            })
          }
          else Linking.openURL(url)
        } catch (error) {
          Alert.alert(error.message)
        }
        
        
    }

    return (
        <>
                    
          <TouchableOpacity onPress={openUrl}>
          <Card >
              <Card.Content>
                  <Title style={styles.title} >{title}</Title>
              </Card.Content>
              <View style={styles.cover}>                   
                    <Text style={styles.publishedAt}>{moment(publishedAt).local(es).startOf().fromNow()}</Text>
                    <Card.Cover style={styles.urlImage} source={{ uri: `${urlToImage}` }} />
              </View>
          </Card>
          </TouchableOpacity>

        </>
    )
}

const styles = StyleSheet.create({

    title: {
        fontSize: 16,
        marginBottom:15,
        lineHeight: 17,
        color: '#000000',
    },
    publishedAt: {
        color: '#ffffff',
        zIndex: 2,
        position: 'absolute',
        backgroundColor: '#6200ee',
        marginTop: 150,
        width: '28%',
        padding: 5,
    },
    cover: {
        paddingBottom: 20,
        borderBottomColor: '#eeeeee',
        borderBottomWidth: 1,
        marginHorizontal: 15,
    },
    urlImage:{
      borderRadius: 10,
    }
 
});