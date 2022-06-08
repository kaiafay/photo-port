import React from "react";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import About from "..";

// ensures no leftover memory data that could give false results
afterEach(cleanup);

describe('About component', () => {
    // verifies that component renders
    it('renders', () => {
        render(<About />);
    });

    // compare snapshot versions of the DOM node structure
    it('matches snapshot DOM node structure', () => {
        const { asFragment } = render(<About />);
        expect(asFragment()).toMatchSnapshot();
    });
});