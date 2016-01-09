'use strict';
import {expect} from 'chai';
import THREE from 'three';
import OBJMTLLoader from '../source/';

describe('OBJMTLLoader Wrapper', ()=>{
  it('THREE does not contain OBJMTLLoader by default', ()=>{
    expect(THREE.OBJMTLLoader).to.be.a('undefined');
  });

  it('Assigns THREE.OBJMTLLoader as a function once called', ()=>{
    OBJMTLLoader(THREE);
    expect(THREE.OBJMTLLoader).to.be.a('function');
  });

  it('Is an instance of ObjectLoader', ()=>{
    const loader = new THREE.OBJMTLLoader();
    expect(loader).to.be.an.instanceof(THREE.OBJMTLLoader);
  });

});
