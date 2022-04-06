import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';

/**
 * `llorca-social-icons`
 * Web component to display icons from the main social networks and communities, based on LitElement.
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
class LlorcaSocialIcons extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          display: block;
        }
      </style>
      <h2>Hello [[prop1]]!</h2>
    `;
  }
  static get properties() {
    return {
      prop1: {
        type: String,
        value: 'llorca-social-icons',
      },
    };
  }
}

window.customElements.define('llorca-social-icons', LlorcaSocialIcons);
