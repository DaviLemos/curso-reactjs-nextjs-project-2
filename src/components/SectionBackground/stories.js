import { SectionBackground } from '.';

export default {
  title: 'SectionBackground',
  component: SectionBackground,
  args: {
    children: (
      <div>
        <h1>SectionContainer</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
          corporis voluptatem neque, magnam unde veritatis sit vel incidunt est?
          Nesciunt id natus nam voluptatum quisquam tenetur illum hic corrupti
          eveniet.
        </p>
      </div>
    ),
  },
  argTypes: {},
};

export const Template = (args) => {
  return (
    <div>
      <SectionBackground {...args} />
    </div>
  );
};
