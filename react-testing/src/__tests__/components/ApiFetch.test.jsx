import { render, screen, waitFor } from '@testing-library/react';
import ApiFetch from '../../components/ApiFetch';

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({ title: 'Test Post' }),
  })
);

test('fetches and displays data', async () => {
  render(<ApiFetch />);

  // Verify "Loading..." text appears initially
  const loadingElement = screen.getByText(/loading.../i);
  expect(loadingElement).toBeInTheDocument();

  // Wait for the fetched data to appear
  await waitFor(() => {
    const fetchedData = screen.getByText(/test post/i);
    expect(fetchedData).toBeInTheDocument();
  });

  // Ensure "Loading..." text is removed
  expect(screen.queryByText(/loading.../i)).not.toBeInTheDocument();
});
