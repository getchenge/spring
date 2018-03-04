import React, { Component } from 'react';
import { connect } from 'dva';
import styles from './IndexPageI.scss';
import MainLayout from '../components/MainLayoutI';
import Header from '../components/HeaderI';
import FooterI from '../components/FooterI';
import Banner from '../components/BannerI';
import News from '../components/contentI/News';
import Classify from '../components/contentI/Classify';
import Founder from '../components/contentI/Founder';
import Members from '../components/contentI/Members';
import Partner from '../components/contentI/Partner';
import Demo from '../components/contentI/Demo';
// import Footer from '../components/Footer';
// import Brief from '../components/Content/Brief.js';
// import Studio from '../components/Content/Studio.js';
// import News from '../components/News';
// import Partner from '../components/Partner';
// import Dubbers from '../components/Dubbers';

function findByName(name) {
  return (item) => {
    return item.name === name;
  }
}
function getProperty(obj, key) {
  if (!obj) return {};
  if (obj instanceof Array) {
    return obj.find(findByName(key)) || {};
  }
  return obj[key] || '';
}
class IndexPage extends Component {
  render() {
    const { location, list, loading } = this.props;
    console.info('IndexPageI__', list);
    const navs = getProperty(list, 'navigation').value;
    const pix = getProperty(list, 'slider').value;
    const header = <Header location={location} navs={navs} />;
    const sections = [header, (<Banner pix={pix} loading={loading} />), <News loading={loading} />, <Founder />, <Members />, <Demo />, <Partner />, <FooterI />];
    return (
      <MainLayout sections={sections}>
      </MainLayout>
    );
  }
}
function mapStateToProps(state) {
  const { list, total, page } = state.sections;
  return {
    loading: state.loading.models.sections,
    list,
    total,
    page,
  };
}
export default connect(mapStateToProps)(IndexPage);
