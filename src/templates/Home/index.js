import { useEffect, useState } from 'react';
// import { useLocation } from 'react-router-dom';

import { mapData } from '../../api/map-data';
import dadosJson from '../../api/dados.json';
import config from '../../config';

import { GridTwoColumn } from '../../components/GridTwoColumn';
import { GridContent } from '../../components/GridContent';
import { GridText } from '../../components/GridText';
import { GridImage } from '../../components/GridImage';

import { Base } from '../Base';
import { PageNotFound } from '../PageNotFound';
import { Loading } from '../Loading';

function Home() {
  const [data, setData] = useState([]);
  // const location = useLocation();

  useEffect(() => {
    // const pathname = location.pathname.replace(/[^a-z0-9-_]/gi, '');
    // const slug = pathname ? pathname : config.defaultSlug;

    const load = () => {
      try {
        // const data = await fetch(config.url + slug);
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
        console.log(e);
        setData(undefined);
      }
    };

    load();
  }, []);

  useEffect(() => {
    if (data === undefined) {
      document.title = `Página não encontrada | ${config.siteName}`;
    }
    if (data && !data.slug) {
      document.title = `Carregando... | ${config.siteName}`;
    }
    if (data && data.title) {
      document.title = `${data.title} | ${config.siteName}`;
    }
  }, [data]);

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
        return <h1>ola</h1>;
      })}
    </Base>
  );
}

export default Home;
