import { TextComponent } from '.';

export default {
  title: 'TextComponent',
  component: TextComponent,
  args: {
    children: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
    Accusantium id dolores voluptates laboriosam deserunt minima ipsa 
    culpa et repellendus earum, quisquam modi, quis numquam dicta quidem quos, 
    consectetur veritatis cum!`,
  },
  argTypes: { children: { type: 'string' } },
};

export const Template = (args) => {
  return (
    <div>
      {' '}
      <TextComponent {...args} />{' '}
    </div>
  );
};
