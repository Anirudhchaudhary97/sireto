import Counter from "../../Counter";

import userEvent from '@testing-library/user-event'
import {render, screen} from '@testing-library/react'



test('Counter increments and resets count', async () => {
    // Render the Counter component
    render(<Counter />);
    
    // Find the element displaying the count, which initially shows "0"
    const count = screen.getByText('0');
    
    // Find the "Click me" button by its text (case-insensitive regex match)
    const clickMeButton = screen.getByText(/click me/i);
    
    // Find the "Reset" button by its text (case-insensitive regex match)
    const resetButton = screen.getByText(/reset/i);
    
    // Simulate a click on the "Click me" button to increment the count
    userEvent.click(clickMeButton);
    
    // Assert that the count element now has the text content "1"
    expect(count).toHaveTextContent('1');
    
    // Simulate a click on the "Reset" button to reset the count to 0
    userEvent.click(resetButton);
    
    // Assert that the count element now has the text content "0"
    expect(count).toHaveTextContent('0');
  });
  