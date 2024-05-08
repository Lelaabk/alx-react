import React from 'react';
import { shallow } from 'enzyme';
import App from './App.js';

describe('App Component Tests', () => {
    it('Renders without crashing', () => {
        const wrapper = shallow(<App />);
        expect(wrapper).toBeDefined();
    });

    it('renders a div with the class App-header', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.find('.App-header')).toBeDefined();
    });

    it('renders a div with the class App-body', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.find('.App-body')).toBeDefined();
    });

    it('renders a div with the class App-footer', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.find('.App-footer')).toBeDefined();
    });
});
