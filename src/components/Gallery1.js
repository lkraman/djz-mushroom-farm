import React, { useState } from 'react';
import FsLightbox from 'fslightbox-react';

function Gallery1() {
  // if toggler is updated when lightbox is closed it will open it
  // if toggler is updated when lightbox is opened it will close it
  const [toggler, setToggler] = useState(false);

  return (
    <>
      <button onClick={() => setToggler(!toggler)}>Toggle Lightbox</button>
      <FsLightbox
        toggler={toggler}
        sources={[
          'https://i.imgur.com/fsyrScY.jpg',
          'https://www.youtube.com/watch?v=xshEZzpS4CQ',
          'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
        ]}
      />
    </>
  );
}

export default Gallery1;
