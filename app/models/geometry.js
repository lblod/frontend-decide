import Model, { attr } from '@ember-data/model';
import proj4 from 'proj4';

export default class GeometryModel extends Model {
  @attr('string') asWKT;

  asWGS84() {
    const match = this.asWKT.match(/.*;(?<type>\w+)\s*\((?<coords>[^)]+)\)/);

    if (!['POINT', 'LINESTRING', 'POLYGON'].includes(match.groups.type)) {
      throw new Error(
        'Encountered and unsupported WKT geometry: ' + match.groups.type,
      );
    }

    const coords = this.transformCoord(match.groups.coords);
    const coordWGS84 = coords.map((pair) =>
      proj4('EPSG:31370', 'EPSG:4326', pair),
    );

    return this.serializeWkt('4326', match.groups.type, coordWGS84);
  }

  transformCoord(coordinates) {
    // 'x1 y1[, x2 y2[, ...]]'
    // TODO: error when incorrect input coordinates format
    return coordinates.split(',').map((pair) => {
      const [x, y] = pair.trim().split(/\s+/);
      return { x: parseFloat(x), y: parseFloat(y) };
    });
  }

  serializeWkt(crsid, type, coords) {
    const serializedCoords =
      coords.length > 1
        ? '(' + coords.map((coord) => `${coord.x} ${coord.y}`) + ')'
        : `${coords[0].x} ${coords[0].y}`;

    return `SRID:${crsid};${type}(${serializedCoords})`;
  }
}
