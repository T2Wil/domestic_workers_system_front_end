import React from 'react';
import ReactDom from 'react-dom';
import { act } from 'react-dom/test-utils';
import { expect } from 'chai';
import Home from '../components/Home';

const jsdom = require('jsdom');

const { JSDOM } = jsdom;
const { document } = (new JSDOM('<!doctype html><html><body></body></html>')).window;
global.document = document;

global.document({
  url: 'http://localhost:8080',
});

let rootContainer;

beforeEach(() => {
  rootContainer = document.createElement('div');
  document.body.appendChild(rootContainer);
});

afterEach(() => {
  document.body.removeChild(rootContainer);
  rootContainer = null;
});

describe("App Component Testing", () => {
    
  it('Renders Hello World Title', (done) => {
      act(() => {
      ReactDom.render(<Home />, rootContainer);
      });
    const h3 = rootContainer.querySelector('h3');
    expect(h3.textContent).to.equal('Sign Up');
    done();
  });
});
