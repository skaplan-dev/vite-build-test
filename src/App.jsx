import React, { useState } from 'react';
import { createRemoteReactComponent } from '@remote-ui/react';
import { createRoot } from '@remote-ui/react';

 const Card = createRemoteReactComponent('Card');

 const Button = createRemoteReactComponent(
  'Button'
);

(self).onRender(root => {
  createRoot(root).render(<Worker />);
  root.mount();
});

export default function Worker() {
  const [cardContent, setCardContent] = useState('Card content');

  return (
    <Card>
      {cardContent}
      <Button
        onPress={() => {
          setCardContent('You’ve clicked!');
        }}
      >
        Click me!
      </Button>
    </Card>
  );
}
