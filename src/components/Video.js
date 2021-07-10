import React, { useState } from 'react';

import Card from '@material-ui/core/Card';

export default function Video({ stream }) {
  const [videoRef] = useState(React.createRef());
  if (stream) {
    videoRef.current.srcObject = stream;
  }

  return (
    <Card style={{ marginBottom: 20 }} variant="outlined" raised={true}>
      <video width="75%" height="70%" align="right" ref={videoRef} autoPlay></video>
    </Card>
  );
}
