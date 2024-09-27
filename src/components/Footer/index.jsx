
/* eslint-disable react/no-unescaped-entities */
import { useContext } from 'react';
import { Container } from './styles';
import { LayoutContext } from '../../context/LayoutContext';

export default function Footer() {
  const { themeString, onToggleTheme } = useContext(LayoutContext);
  return (
    <Container>
      <span>JStack's Blog. Todos os direitos reservados.</span>
      <button
        type="button"
        onClick={onToggleTheme}
      >
        {themeString === 'dark' ? '🌞' : '🌚'}
      </button>
    </Container>
  );
}