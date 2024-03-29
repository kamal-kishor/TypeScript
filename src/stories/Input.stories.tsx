import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Input } from '../components/Input/Input';

export default {
    title: 'ReactComponentLibrary/Input',
    component: Input
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    onChange: function (e: any): void {
        console.log('onChange', e.target.value);
    },
    placeholder: 'I am a placeholder',
    // defaultValue: 'Hello, world'
    // name: 'kamal'
    className: 'abc',
    type: 'password'
};

export const TextField = Template.bind({});
TextField.args = {
    onChange: function (e: any): void {
        console.log('onChange', e.target.value);
    },
    placeholder: 'I am a placeholder',
    // defaultValue: 'Hello, world',
    className: 'abc',
    type: 'text'
};

export const Adornment = Template.bind({});
Adornment.args = {
    onChange: function (e: any): void {
        console.log('onChange', e.target.value);
    },
    placeholder: 'I am a placeholder',
    adornment: '₹',
    type: 'email'
};

export const ornament = Template.bind({});
ornament.args = {
    onChange: function (e: any): void {
        console.log('onChange', e.target.value);
    },
    placeholder: 'I am a placeholder',
    ornament: '@',
    type: 'text'
};
