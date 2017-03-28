import React from 'react';
import ReactDOM from 'react-dom';
import {Gmaps, Marker, InfoWindow, Circle} from 'react-gmaps';

export default class GoogleMap extends React.Component{
  constructor(){
    super();
  }

  initMap() {
    var point = {lat: this.props.lat, lng: this.props.lng};
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 12,
      center: point
    });
    var marker = new google.maps.Marker({
      position: point,
      map: map
    });
  }

  onMapCreated(map) {
    map.setOptions({
      disableDefaultUI: false
    });
  }

  onDragEnd(e) {
    console.log('onDragEnd', e);
  }

  onCloseClick() {
    console.log('onCloseClick');
  }

  onClick(e) {
    console.log('onClick', e);
  }

  //      <InfoWindow
  //        lat={this.props.lat}
  //        lng={this.props.lng}
  //       content={'Hello, React :)'}
  //        onCloseClick={this.onCloseClick.bind(this)} />
  //      <Circle
  //        lat={this.props.lat}
  //        lng={this.props.lng}
  //        radius={500}
  //        onClick={this.onClick.bind(this)} />

  render() {
    let apiKey = 'AIzaSyApBQR02RGAGuArZLQvcawvcEkXjyS4Fz8';
    return (
      <Gmaps
        width={'100%'}
        height={'394px'}
        lat={this.props.lat}
        lng={this.props.lng}
        zoom={16}
        loadingMessage={this.props.title}
        params={{v: '3.exp', key: apiKey}}
        onMapCreated={this.onMapCreated.bind(this)}>
        <Marker
          lat={this.props.lat}
          lng={this.props.lng}
          draggable={true}
          onDragEnd={this.onDragEnd.bind(this)} />
      </Gmaps>
    );
  }


}