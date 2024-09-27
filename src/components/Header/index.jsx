

import { LayoutContext } from '../../context/LayoutContext';
import { Container } from './styles';
import { useContext } from 'react';

export default function Header() {
  const { themeString, onToggleTheme } = useContext(LayoutContext);
  return (
    <Container>
      <h1>Blog do Evandro</h1>
      <button
        type="button"
        onClick={onToggleTheme}
      >
        {themeString === 'dark' ? '🌞' : '🌚'}
      </button>
    </Container>
  );
}