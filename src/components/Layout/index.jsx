
import Header from '../Header';
import PostsList from '../PostList/index';
import Footer from '../Footer';
import { useTheme } from 'styled-components';
import { useEffect, useRef } from 'react';


export default function Layout() {
  const theme = useTheme();

  // Para o useEffect não rodar no primeiro render
  const fistRender = useRef(true);
  useEffect(() => {
    if (fistRender.current) {
      fistRender.current = false;
      return;
    }
    console.debug("Evandro")
  }, [theme]);

  useEffect(() => {
    function hendleScroll() {
      console.debug('scrollou!');
    }

    document.addEventListener('scroll', hendleScroll);
    // Removendo Evento para economizar recurso
    return () => document.removeEventListener('scroll', hendleScroll);
  }, []);

  return (
    <>
      <Header />
      <PostsList />
      <Footer />
      <div
        style={{
          marginTop: 24,
          backgroundColor: theme.footerBackgroundColor,
          padding: 24,
          borderRadius: 10,
        }}
      >
        Oi tudo bem com você?
      </div>
    </>
  );
}
