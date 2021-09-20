import Component from '../base/Component';
import css_app from '../../stylesheets/app.scss';
import css_init from '../../stylesheets/initialize.scss';
import logo_img from '../../images/webpack-logo.png';
const template = require('../../templates/index.hbs');
const Template = template();

class ExampleDiv extends Component {
  constructor(...args) {
    super(...args);
  }
  template() {
    return Template;
  }
  setStyle() {
    this.setImage();
    return css_app + css_init;
  }
  setImage() {
    this.shadowRoot.querySelector('img').src = logo_img;
  }
}

customElements.define('example-div', ExampleDiv);

export default ExampleDiv;
