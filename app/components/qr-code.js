import Component from '@glimmer/component';
import QRCode from 'qrcode';

export default class QrCode extends Component {
  constructor() {
    super(...arguments);
    setTimeout(() => {
      const canvas = document.getElementById('canvas');

      QRCode.toCanvas(canvas, this.args.link, function (error) {
        if (error) console.error(error);
      });
    }, 500);
  }
}
