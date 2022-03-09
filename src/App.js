import React, { useState } from "react";
import ImageGrid from "./comps/ImageGrid";
import Modal from "./comps/Modal";
import Title from "./comps/Title";
import UploadForm from "./comps/UploadForm";
import useKonamiCode from "./SecretCode/useKonamiCode";

function App() {
  const [selectedImg, setSelectedImg] = useState(null);
  const konami = useKonamiCode();
  return (
    <div className="App">
      <Title />
      <UploadForm />
      {konami ? (
        <h2 className="secret">
          Howdy! Looks like you were able to find the secret message of this
          website! Too bad its not that great of a message....
        </h2>
      ) : (
        ""
      )}
      <ImageGrid setSelectedImg={setSelectedImg} />
      {selectedImg && (
        <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
      )}
    </div>
  );
}

export default App;
