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

function findByName(name) {
  return (item) => {
    return item.name === name;
  }
}
function IndexPage({ location, list, loading }) {
  const navs = list && list.length > 0 && list.find(findByName('navigation')).value;
  const pix = list && list.length > 0 && list.find(findByName('slider')).value;
  const news = list && list.length > 0 && list.find(findByName('news')).value;
  const header = <Header location={location} navs={navs}></Header>;
  const footer = <Footer />;

  return (
    <MainLayout header={header} footer={footer}>
      <Banner pix={pix} loading={loading} />
      <News list={news} />
      <div className={styles.wraper}>
        <Brief />
        <Studio />
      </div>
      <Partner></Partner>
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
