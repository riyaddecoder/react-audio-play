import * as React from 'react';
import { render } from '@testing-library/react';

import 'jest-canvas-mock';

import { AudioPlayer } from 'react-audio-play';

describe('Common render', () => {
  it('renders without crashing', () => {
    render(<AudioPlayer src="" />);
  });
});
