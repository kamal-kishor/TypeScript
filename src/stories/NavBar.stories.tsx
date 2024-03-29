import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { NavBar } from '../components/NavBar/NavBar';

export default {
    title: "ReactComponen's/NavBar",
    component: NavBar
} as ComponentMeta<typeof NavBar>;

const Template: ComponentStory<typeof NavBar> = (args) => <NavBar {...args} />;

export const Primary = Template.bind({});

Primary.args = {
    navbarData: [
        {
            id: 0,
            name: 'Title',
            link: '/',
            items: [],
            image: 'https://img.freepik.com/free-vector/meta-icon-soci…ber-2021-bangkok-thailand_53876-157871.jpg?w=2000'
        },
        { id: 1, title: 'Home', link: '/', items: [] },
        {
            id: 2,
            title: 'About',
            link: '/about',
            items: [
                { id: 4, title: 'Our Story', link: '/about/story' },
                { id: 5, title: 'Our Team', link: '/about/team' }
            ]
        },
        {
            id: 3,
            title: 'Contact',
            link: '/contact',
            items: [
                { id: 6, title: 'CTO', link: '/contact/cto' },
                { id: 7, title: 'Manager', link: '/contact/manager' }
            ]
        },
        {
            // id: 13,
            // title: "",
            // link: "",
            // items: [],
            button: [
                { id: 11, title: 'Login', link: '/login' },
                { id: 12, title: 'SignUp', link: '/signup' }
            ]
        }
    ]
};
