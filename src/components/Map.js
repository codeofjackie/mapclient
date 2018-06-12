import React, { Component } from 'react';
import mapboxgl from 'mapbox-gl/dist/mapbox-gl';
import MapboxDirections from '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions';
import 'mapbox-gl/dist/mapbox-gl.css'
import '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions.css'
import bike from './earthquakes.geojson'


const mapstyle = {
  border:0,
  width :"100%",
  height:"100%"  
}

export default class Map extends Component {  

    constructor(props, context) {
        super(props, context);
        this.printmap = this.printmap.bind(this);
        this.state = {
            location:[]
        };
    }

    componentDidMount() {
        //this.getLocation();
        this.printmap({coords:{longitude:120.5,latitude:40.5}});
    }

    printmap(position){
        mapboxgl.accessToken = 'pk.eyJ1IjoiY29kZW9mamFja2llIiwiYSI6ImNqaDc2dXE5OTA0OWEycXMwNHkxbzRhbjUifQ.dJofzeR0LJuNLOAEA_28Dw';
                
        var map = new mapboxgl.Map({
            container: this.props.id,
            style: 'mapbox://styles/mapbox/streets-v9',
            center:[-120, 50],
            zoom: 2
        });

        // 添加缩放控制器件
        map.addControl(new mapboxgl.NavigationControl());
        
        // 为地图添加地理定位控件
        map.addControl(new mapboxgl.GeolocateControl({
            positionOptions: {
                enableHighAccuracy: true
            },
            trackUserLocation: true
        }));

        // map.addControl(new MapboxDirections({
        //     accessToken: mapboxgl.accessToken
        // }), 'top-left');
        
        map.on('load', function () {
            map.addSource("bike-park", {
                "type": "geojson",
                "data": bike
            });
            
            //停车区
            map.addLayer({
                "id": "park-boundary",
                "type": "fill",
                "source": "bike-park",
                "minzoom": 8,
                "paint": {
                    "fill-color": "#888888",
                    "fill-opacity": 0.4
                },
                "filter": ["==", "$type", "Polygon"]
            });
            
            //热力图点
            map.addLayer({
                "id": "earthquakes-heat",
                "type": "heatmap",
                "source": "bike-park",
                "maxzoom": 9,
                "paint": {
                    // Increase the heatmap weight based on frequency and property magnitude
                    "heatmap-weight": [
                        "interpolate",
                        ["linear"],
                        ["get", "mag"],
                        0, 0,
                        6, 1
                    ],
                    // Increase the heatmap color weight weight by zoom level
                    // heatmap-intensity is a multiplier on top of heatmap-weight
                    "heatmap-intensity": [
                        "interpolate",
                        ["linear"],
                        ["zoom"],
                        0, 1,
                        9, 3
                    ],
                    // 热力图的颜色域，定义域为 (low) to 1 (high).
                    // Begin color ramp at 0-stop with a 0-transparancy color
                    // 产生模糊特效
                    "heatmap-color": [
                        "interpolate",
                        ["linear"],
                        ["heatmap-density"],
                        0, "rgba(33,102,172,0)",
                        0.2, "rgb(103,169,207)",
                        0.4, "rgb(209,229,240)",
                        0.6, "rgb(253,219,199)",
                        0.8, "rgb(239,138,98)",
                        1, "rgb(1,123,12)"
                    ],
                    // Adjust the heatmap radius by zoom level
                    "heatmap-radius": [
                        "interpolate",
                        ["linear"],
                        ["zoom"],
                        0, 2,
                        9, 20
                    ],
                    // 热力图变换为点层时的缩放级别
                    "heatmap-opacity": [
                        "interpolate",
                        ["linear"],
                        ["zoom"],
                        7, 1,
                        8, 0
                    ],
                },
                "filter": ["==", "$type", "Point"]
            }, 'waterway-label');
        });
    }

    render() {
      return <div id={this.props.id} ref={this.props.id} style={mapstyle}></div>;
    }
}