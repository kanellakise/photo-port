import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ContactForm from '..';

describe('Contact form component', () => {
  // baseline test
  it('renders', () => {
    render(<ContactForm/>);
  });

  it('matches snapshot', () => {
    const { asFragment } = render(<ContactForm/>);

    // assert value comparison
    expect(asFragment()).toMatchSnapshot();
  });

})

afterEach(cleanup);