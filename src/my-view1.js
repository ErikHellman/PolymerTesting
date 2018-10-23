/**
 * @license
 * Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */

import { LitElement, html } from '@polymer/lit-element'

class MyView1 extends LitElement {

  render () {
    return html`<style>
  .card {
    margin: 24px;
    padding: 16px;
    color: #757575;
    border-radius: 5px;
    background-color: #fff;
    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -2px rgba(0, 0, 0, 0.2);
  }

  h1 {
    margin: 16px 0;
    color: #212121;
    font-size: 22px;
  }
</style>
<div class="card">
<h1>View 1</h1>
<p>A simple view with LitElement</p>
<paper-button raised class="pink">Sample button</paper-button>    
</div>`
  }
}

window.customElements.define('my-view1', MyView1)
