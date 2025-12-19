import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import proj4 from 'proj4';

export default class AnnotationsAnnotationController extends Controller {
  @tracked geoPoints = this.convertLambertToWgs84();

  // TODO: this logic better fits in the Geometry model
  @action
  convertLambertToWgs84() {
    this.defineProj4();
    const wkt = this.model.hasBody.get('geometry').get('asWKT');

    const coordLambert = this.parseWkt(wkt);

    const coordWGS84 = coordLambert.map((pair) =>
      proj4('EPSG:31370', 'EPSG:4326', pair),
    );

    return coordWGS84;
  }

  parseWkt(wkt) {
    const match = wkt.match(/.*;(?<type>\w+)\s*\((?<coords>[^)]+)\)/);

    if (!['POINT', 'LINESTRING', 'POLYGON'].includes(match.groups.type)) {
      throw new Error(
        'Encountered and unsupported WKT geometry: ' + match.groups.type,
      );
    }

    return this.parseCoord(match.groups.coords);
  }

  parseCoord(coordinates) {
    // 'x1 y1[, x2 y2[, ...]]'
    // TODO: error when incorrect input coordinates format
    return coordinates.split(',').map((pair) => {
      const [x, y] = pair.trim().split(/\s+/);
      return { x: parseFloat(x), y: parseFloat(y) };
    });
  }

  defineProj4() {
    // Register EPSG:31370 (Belgian Lambert 72)
    // Source: <https://epsg.io/31370>
    proj4.defs(
      'EPSG:31370',
      '+proj=lcc +lat_0=90 +lon_0=4.36748666666667 +lat_1=51.1666672333333 +lat_2=49.8333339 +x_0=150000.013 +y_0=5400088.438 +ellps=intl +towgs84=-106.8686,52.2978,-103.7239,0.3366,-0.457,1.8422,-1.2747 +units=m +no_defs +type=crs',
    );
  }
}
