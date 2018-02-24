import React from 'react';
import { connect } from 'dva';
import styles from './IndexPage.scss';
import MainLayout from '../components/MainLayout/MainLayout';
import Banner from '../components/Banner';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Brief from '../components/Content/Brief.js';
import Studio from '../components/Content/Studio.js';
import News from '../components/News';
import Partner from '../components/Partner';
import Dubbers from '../components/Dubbers';

function findByName(name) {
  return (item) => {
    return item.name === name;
  }
}
function getProperty(obj, key) {
  if (!obj) return;
  if (obj instanceof Array) {
    return obj.find(findByName(key)) || {};
  }
  return obj[key] || '';
}
function IndexPage({ location, list, loading }) {
  let isBuilding = true;
  if (location.search && location.search.indexOf('preview=1') !== -1) {
    isBuilding = false;
  }
  console.info('location.search', location.search, ' isBuilding', isBuilding);
  const navs = getProperty(list, 'navigation').value;
  const pix = getProperty(list, 'slider').value;
  const news = getProperty(list, 'news').value;
  const dubbers = getProperty(list, 'dubbers').value;
  const header = <Header location={location} navs={navs}></Header>;
  const footer = <Footer />;

  return (
    <MainLayout header={header} footer={footer} isBuilding={isBuilding}>
      <Banner pix={pix} loading={loading} />
      <News list={news} />
      <Dubbers list={dubbers} />
      <div className={styles.wraper}>
        <Brief />
        <Studio />
      </div>
      <Partner />
    </MainLayout>
  );
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
