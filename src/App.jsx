import ThemedApp from './components/TemedApp';
import { LayoutProvider } from './context/LayoutContext';

function App() {
  return (
    <LayoutProvider>
      <ThemedApp />
    </LayoutProvider>
  );
};

export default App;
