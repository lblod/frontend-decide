import Modifier from 'ember-modifier';
import L from 'leaflet';

class LeafletModifier extends Modifier {
  root = null;

  modify(element, positional, { component, props }) {
    // TODO all of the following should be driven by the props coming in. This is just the basic example from leafletjs.com
    // TODO not sure how this will react when props change, you may need to remove the map and re-add it?
    const map = L.map(element).setView([51.505, -0.09], 13);
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution:
        '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    }).addTo(map);
    var marker = L.marker([51.5, -0.09]).addTo(map);
    var circle = L.circle([51.508, -0.11], {
      color: 'red',
      fillColor: '#f03',
      fillOpacity: 0.5,
      radius: 500,
    }).addTo(map);
    var polygon = L.polygon([
      [51.509, -0.08],
      [51.503, -0.06],
      [51.51, -0.047],
    ]).addTo(map);
    marker.bindPopup('<b>Hello world!</b><br>I am a popup.').openPopup();
    circle.bindPopup('I am a circle.');
    polygon.bindPopup('I am a polygon.');
  }
}

<template>
  <div
    {{LeafletModifier props=@props}}
    {{! TODO should add proper styling }}
    style="width: 300px; height: 200px; overflow: hidden;"
  ></div>
</template>
