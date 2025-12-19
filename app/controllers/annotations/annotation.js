import Controller from '@ember/controller';
import proj4 from 'proj4';

export default class AnnotationsAnnotationController extends Controller {
  get convertLambertToWgs84() {
    this.defineProj4();
    const location = this.model.belongsTo('hasBody').value();
    const geometry = location?.belongsTo('geometry').value();

    return geometry?.asWGS84();
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
