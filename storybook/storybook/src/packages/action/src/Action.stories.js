import React from 'react';
import Action from '@axa-fr/react-toolkit-action';
import Readme from '@axa-fr/react-toolkit-action/README.md';

export default {
  title: 'Action/Action',
  component: Action,
  parameters: {
    readme: {
      sidebar: Readme,
    },
    options: {},
  },
  argTypes: {
    onClick: { action: 'clicked' },
  },
};

const Template = args => <Action {...args} />;

export const Link = Template.bind({});
Link.args = {
  href: 'http://www.axa.fr',
  icon: 'link',
  title: 'Lien de test',
  target: '_blank',
  id: 'id',
  classModifier: 'hello',
};

export const Button = Template.bind({});
Button.args = {
  id: 'id',
  icon: 'floppy-disk',
  title: 'Enregistrer',
};
