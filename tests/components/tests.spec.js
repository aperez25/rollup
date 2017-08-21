import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import Main from '../../client/components/Main.jsx'
import Header from '../../client/components/Header.jsx';
import Footer from '../../client/components/Footer.jsx';
import Sidebar from '../../client/components/SideBar.jsx';
import Setup from '../../client/components/SetupPage.jsx';
import Emails from '../../client/components/EmailsView.jsx';

let wrapper;

describe('React components', () => {

  describe('Main Component', () => {
    wrapper = shallow(<Main />);
    it('renders without crashing', () => {
      expect(wrapper).to.have.length(1);
    })
  })

  describe('Header Component', () => {
    it('renders without crashing', () => {
      wrapper = shallow(<Header />);
      expect(wrapper).to.have.length(1);
    })
  })

  describe('Footer Component', () => {
    wrapper = shallow(<Footer />);
    it('renders without crashing', () => {
      expect(wrapper).to.have.length(1);
    })
  })

  describe('Sidebar Component', () => {
    wrapper = shallow(<Sidebar />);
    it('renders without crashing', () => {
      expect(wrapper).to.have.length(1);
    })
  })

  describe('Setup Component', () => {
    wrapper = shallow(<Setup />);
    it('renders without crashing', () => {
      expect(wrapper).to.have.length(1);
    })
  })

  describe('Emails Component', () => {
    wrapper = shallow(<Emails />);
    it('renders without crashing', () => {
      expect(wrapper).to.have.length(1);
    })
  })
})

describe('Reducers', () => {})

describe('Action Creators', () => {})

describe('Thunks', () => {})
