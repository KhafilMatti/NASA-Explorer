import { render, screen } from '@testing-library/react';
import NeoWsViewer from './NeoWsViewer';

test('render main heading' , () => {
    render (<NeoWsViewer />);
    const headingElement = screen.getByText(/Near Earth Objects Visualization/i);
    expect (headingElement).toBeInTheDocument();
});
