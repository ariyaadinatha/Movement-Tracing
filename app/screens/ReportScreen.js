import React, { Component } from 'react'
import { View, TextInput, StyleSheet, Platform, Text, Image, TouchableOpacityComponent, TouchableOpacity, Button } from 'react-native'
import { Feather } from '@expo/vector-icons'; 
import { FontAwesome5 } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';



export default class App extends Component {



  render() {

    return (
        <View style={styles.container}>
            <View
                    style={{
                        borderBottomColor: "#003366",
                        borderBottomWidth: 10,
                        marginHorizontal :'3%',borderadius:4
                    }}
                    />
            <View
                    style={{
                        borderBottomColor: "#3EC6FF",
                        borderBottomWidth: 3,
                        marginHorizontal :'3%',borderRadius:4
                    }}
                    />
            <View style={styles.atas}>
                <Text style={{fontSize:24,color:"#003366",fontWeight:'bold',marginBottom:'10%'}}>HALAMAN LAPORAN</Text>
                <MaterialCommunityIcons name="file-document-box-multiple" size={100} color="black" />
                <Text style={styles.login}>- Terakhir Diperbaharui : -</Text>
                <Text style={styles.title}>- Tanggal -</Text>
            </View>
            <View style={styles.portofolio}>
                <Text>Laporan Kesehatan</Text>
                <View
                    style={{
                        borderBottomColor: 'black',
                        borderBottomWidth: 1,
                        marginVertical:'2%'
                    }}
                />
                <View style={styles.port}>
                    <View style={styles.unit}>
                        <Text style={{fontStyle:'italic'}}>Temperatur Tubuh (Avg)</Text>
                        <Text style={{fontStyle:'italic'}}>Gejala</Text>
                        <Text style={{fontStyle:'italic'}}>Usia</Text>
                        <Text style={{fontStyle:'italic'}}>Alamat Rumah</Text>
                        <Text style={{fontStyle:'italic'}}>Pelapor</Text>
                    </View>
                    <View style={styles.unit}>
                        <Text>:</Text>
                        <Text>:</Text>
                        <Text>:</Text>
                        <Text>:</Text>
                        <Text>:</Text>
                    </View>
                    <View style={styles.unit}>
                        <Text>- Nama Pengguna -</Text>
                        <Text>- Jenis Kelamin -</Text>
                        <Text>- Usia Pengguna -</Text>
                        <Text>- Alamat Pengguna -</Text>
                        <Text>- Nama Pelapor -</Text>
                    </View>
                </View>
            </View>
            <View style={styles.hubungi}>
                <View style={{alignItems:'center'}}>
                <Text style={{fontWeight:'bold',fontSize:13,fontStyle:'italic'}}>Hubungi Kami</Text>
                </View>
                <View
                    style={{
                        borderBottomColor: 'black',
                        borderBottomWidth: 0.5,
                        marginVertical:'1%'
                    }}
                />
                <View style={styles.hub2}>
                    <View style={styles.hub}>
                        <AntDesign name="facebook-square" size={16} color='#003366' />
                        <AntDesign name="instagram" size={16} color='#003366' />
                        <AntDesign name="twitter" size={16} color='#003366' />
                    </View>
                    <View style={styles.hub}>
                        <Text style={{color:'#003366',alignItems: 'flex-start',marginLeft:'4%',fontStyle:'italic'}}>Movement Tracing App</Text>
                        <Text style={{color:'#003366',justifyContent: 'center',marginLeft:'4%',fontStyle:'italic'}}>Movement_Tracing_App</Text>
                        <Text style={{color:'#003366',justifyContent: 'center',marginLeft:'4%',fontStyle:'italic'}}>Movement Tracing App</Text>
                    </View>
                        
                </View>
                
            </View>

        </View>

    )
  }
}

const styles = StyleSheet.create({
  logo: {
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: '4%',
    resizeMode: 'contain'

  },
  container: {
    justifyContent: 'space-around',
    
    flex: 1,
    paddingBottom: '5%',
    marginTop: '14%',
    marginHorizontal: '2%'
  },
  box: {
    padding: 25,
    backgroundColor: 'steelblue',
    margin: 5,
  },
  nama: {
      justifyContent: 'space-around',
      fontSize: 18,
      color: '#003366',

  },
  title: {
    color:'#3EC6FF',
    fontSize: 14
  },
  input: {
    
    height: '15%', 
    borderColor: 'gray', 
    borderWidth: 1, 
    justifyContent: 'space-between',
    alignItems: 'stretch',
    marginBottom: '4%'
    
  },
  set_input: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'stretch',
    width: '60%',
    marginBottom : '10%'
    
  },
  portofolio: {
      backgroundColor: '#EFEFEF',
      alignItems: 'stretch',
      marginHorizontal: '3%',
      borderRadius: 5 ,
      padding:'1%'    
  },
  atas: {
      alignItems: 'center',
  },
  port: {
      flexDirection: 'row',
      justifyContent: 'space-around'
  },
  hub:{
    justifyContent: 'space-around',
    alignItems: 'flex-start'
  },
  hub2 :{
    flexDirection: 'row',
    marginHorizontal: '22%',
    justifyContent: 'space-around'
  },
  hubungi: {
    backgroundColor: "#b2ffff",
 
    marginHorizontal: '3%',
    borderRadius: 5 ,
    padding:'1%'    
},
})