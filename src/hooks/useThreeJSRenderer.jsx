import { useEffect } from 'react';

import ThreeJSManager from '../components/ThreeJSManager';

export default function useThreeJSRenderer(initialState = {
  spacing: 0.3,
  cubeSize: 1
}) {
  const updateCube = () => {
    // Acceder al objeto ThreeJSManager y ejecutar la función updateSpacing(5)
    if (three && three.updateSpacing) {
      three.updateSpacing(0.5);
    }
  }

  let three = null;

  // Configuración de la escena, cámara y renderizador
  useEffect(() => {
    three = new ThreeJSManager();
  }, []);

  return { updateCube };
}
