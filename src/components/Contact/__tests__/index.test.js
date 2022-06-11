import React from 'react'
import { render, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Contact from '..'

afterEach(cleanup);

describe('Contact component', () => {
    it('renders', () => {
        render(<Contact />);
    });

    it('matches snapshot', () => {
        const { asFragment } = render(<Contact />);
        expect(asFragment()).toMatchSnapshot();
    });
});

it('matches h1', () => {
    const { getByTestId } = render(<Contact />);
    expect(getByTestId('h1tag')).toHaveTextContent('Contact Me');
});

it('matches button', () => {
    const { getByTestId } = render(<Contact />);
    expect(getByTestId('button')).toHaveTextContent('Submit');
});