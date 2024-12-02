import { Canvas, extend } from "@react-three/fiber";
import { useGLTF, useTexture } from "@react-three/drei";
import { MeshLineGeometry, MeshLineMaterial } from "meshline";
import { useControls } from "leva";
import "./App.css";
import { Scene } from "./components/organisms/Scene/Scene";

extend({ MeshLineGeometry, MeshLineMaterial });
useGLTF.preload(
  "https://assets.vercel.com/image/upload/contentful/image/e5382hct74si/5huRVDzcoDwnbgrKUo1Lzs/53b6dd7d6b4ffcdbd338fa60265949e1/tag.glb"
);
useTexture.preload(
  "https://assets.vercel.com/image/upload/contentful/image/e5382hct74si/SOT1hmCesOHxEYxL7vkoZ/c57b29c85912047c414311723320c16b/band.jpg"
);

function App() {
  const { debug } = useControls({ debug: false });
  return (
    <Canvas camera={{ position: [0, 0, 13], fov: 25 }}>
      <Scene debug={debug} />
    </Canvas>
  );
}

export default App;
