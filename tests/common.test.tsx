import * as React from 'react';
import { render } from '@testing-library/react';

import 'jest-canvas-mock';

import { AudioPlayer } from '../src';

beforeAll(() => {
  Object.defineProperty(HTMLMediaElement.prototype, 'load', {
    configurable: true,
    value: jest.fn() // Mock implementation of the load method
  });
});

describe('Common render', () => {
  it('renders without crashing', () => {
    render(<AudioPlayer src="" />);
  });
});
