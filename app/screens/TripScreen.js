import React from 'react';
import {FlatList} from 'react-native';

const trip = [{
    id:1,
    timeIn: '13.00',
    timeOut: '13.45',
    location: 'Dubai',
    description : 'kontak dengan mba indomar',
    date : 'Sabtu, 18 Januari 2020',
},
    {
    id:2,
    timeIn: '14.00',
    timeOut: '15.25',
    location: 'Dumay',
    description : 'kontak dengan mba alfamar',
    date : 'Sabtu, 18 Januari 2020',
    },
]

function TripScreen(props){
    return(
        <FlatList data={trip}
        keyExtractor={trip => trip.id.toString()
        renderItem={({ item }) =>  <ListItem title={item.location} subTitle={item.description} time={timeIn} />} />
    );
}

export default TripScreen;