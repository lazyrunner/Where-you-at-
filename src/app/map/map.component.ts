import { Component, OnInit, Input } from '@angular/core';
import Map from 'ol/Map';
import View from 'ol/View';
import VectorLayer from 'ol/layer/Vector';
import {Fill, Stroke, Circle, Style} from 'ol/style';
import Icon from 'ol/style/Icon';
import {OSM, Vector as VectorSource} from 'ol/source';
import * as olProj from 'ol/proj';
import TileLayer from 'ol/layer/Tile';
import Draw from 'ol/interaction/Draw';
import Feature from 'ol/Feature';
import Point from 'ol/geom/Point';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  @Input() location;
  map: any;
  view;
  source;
  vectorLayer;

  constructor() { }

  ngOnInit(): void {
    this.source = new VectorSource({
      features: [],
    });
    
    this.vectorLayer = new VectorLayer({
      source: this.source,
    });
    this.view = new View({
      center: olProj.fromLonLat([7.0785, 51.4614]),
      zoom: 15
    });
    console.log('I got this -', location);
    this.map = new Map({
      target: 'drawmap',
      layers: [
        new TileLayer({
          source: new OSM()
        }),
        this.vectorLayer
      ],
      view: this.view
    });
  }

  flyTo(location, done) {
    var duration = 2000;
    var zoom = this.view.getZoom();
    var parts = 2;
    var called = false;
    function callback(complete) {
      --parts;
      if (called) {
        return;
      }
      if (parts === 0 || !complete) {
        called = true;
        done(complete);
      }
    }
    this.view.animate(
      {
        center: location,
        duration: duration,
      },
      callback
    );
    this.view.animate(
      {
        zoom: zoom - 1,
        duration: duration / 2,
      },
      {
        zoom: zoom,
        duration: duration / 2,
      },
      callback
    );
  }

  test (){
    this.flyTo(olProj.fromLonLat(this.location), function () {});
    console.log('I have these again ',this.location);
  }

  addPoint(){
    var iconFeature = new Feature({
      geometry: new Point(olProj.fromLonLat(this.location)),
      name: 'Null Island',
      population: 4000,
      rainfall: 500,
    });
    
    var fill = new Fill({
      color: 'rgba(255,255,255,0.4)'
    });
    var stroke = new Stroke({
      color: '#3399CC',
      width: 1.25
    });

    var iconStyle = new Style({
      image: new Circle({
        fill: fill,
        stroke: stroke,
        radius: 20
      }),
      fill: fill,
      stroke: stroke
    })

    iconFeature.setStyle(iconStyle);
    this.source.addFeatures([iconFeature]);
    

  }

}
