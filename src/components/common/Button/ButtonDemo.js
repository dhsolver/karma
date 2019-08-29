import React from 'react';
import { Button } from '@components/common/Button';
const ButtonDemo = () => {
  return (
    <div>
      <h1>Button Component Demo</h1>
      <h3>Default button</h3>
      <Button>Default</Button>
      <h3>Different sizes</h3>
      <Button size="very-large">Very large</Button>
      <Button size="large">Large</Button>
      <Button>Normal</Button>
      <Button size="small">Small</Button>
      <Button size="very-small">Very-Small</Button>
      <h3>Button with icons</h3>
      <Button icon="link">Parlay Calculator</Button>
      <Button icon="ticket" type="secondary">
        3 Active Bets
      </Button>
      <Button icon="ticket" type="secondary" outline>
        3 Active Bets
      </Button>
      <Button icon="injury">Injury</Button>
      <Button icon="nav-arrow-left">Injury</Button>
      <h3>Different types</h3>
      <Button type="primary">Primary</Button>
      <Button type="secondary">Secondary</Button>
      <h3>Outline buttons</h3>
      <Button type="primary" outline>
        Outline Primary
      </Button>
      <Button type="secondary" outline>
        Outline Secondary
      </Button>
      <h3>Different variants</h3>
      <Button variant="cta">Cta button</Button>
      <Button variant="karma-pick">Karma Pick</Button>
      <h3>Disabled Button</h3>
      <Button disabled>Disabled</Button>
    </div>
  );
};

export default ButtonDemo;
