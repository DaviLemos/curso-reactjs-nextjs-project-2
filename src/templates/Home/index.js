import { useEffect, useState } from 'react';
import * as Styled from './styles';
import { useLocation } from 'react-router-dom';

import { mapData } from '../../api/map-data';
import dadosJson from '../../api/dados.json';

import { Heading } from '../../components/Heading';
import { GridTwoColumn } from '../../components/GridTwoColumn';
import { GridContent } from '../../components/GridContent';
import { GridText } from '../../components/GridText';
import { GridImage } from '../../components/GridImage';

import mockBase from '../Base/mock';
import { Base } from '../Base';
import { PageNotFound } from '../PageNotFound';
import { Loading } from '../Loading';

function Home() {
  const [data, setData] = useState([]);
  const useLocation = useLocation();

  useEffect(() => {
    const pathname = useLocation.pathname.replace(/[^a-z0-9-_]/gi, '');
    const slug = pathname ? pathname : 'lading-page';

    const load = () => {
      try {
        // const data = await fetch('http://localhost:3000/api/v1/home');
        // const json = await data.json();
        const pageData = mapData(dadosJson);

        // new Promise((r) => {
        //   return setTimeout(() => {
        //     console.log(pageData[0]);
        //     setData(pageData[0]);
        //     r();
        //   }, 100000);
        // });
        setData(pageData[0]);
      } catch (e) {
        setData(undefined);
      }
    };

    load();
  }, []);

  if (data === undefined) {
    return <PageNotFound />;
  }

  if (data && !data.slug) {
    return <Loading />;
  }

  const { menu, sections, footerHtml, slug } = data;
  const { links, text, link, srcImg } = menu;

  return (
    <Base
      links={links}
      footerHtml={footerHtml}
      logoData={{ text, link, srcImg }}
    >
      {sections.map((section, index) => {
        const { component } = section;
        const key = `${slug}-${index}`;

        if (component === 'section.section-two-columns') {
          return <GridTwoColumn key={key} {...section} />;
        }

        if (component === 'section.section-content') {
          return <GridContent key={key} {...section} />;
        }

        if (component === 'section.section-grid-text') {
          return <GridText key={key} {...section} />;
        }

        if (component === 'section.section-grid-image') {
          return <GridImage key={key} {...section} />;
        }
      })}
    </Base>
  );
}

export default Home;
