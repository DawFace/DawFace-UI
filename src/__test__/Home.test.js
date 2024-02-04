import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import UploadForm from '../components/UploadForm'; // Adjust the path if needed

describe('UploadForm', () => {
  it('renders the form and image preview correctly', () => {
    render(<UploadForm />);

    // Check for form elements
    const input = screen.getByLabelText('Upload a picture for the search');
    const button = screen.getByRole('button', { name: /Search/i });
    expect(input).toBeInTheDocument();
    expect(button).toBeInTheDocument();

    // Check for initial image state
    const image = screen.queryByAltText('Uploaded image');
    expect(image).not.toBeInTheDocument();
  });

  it('displays the uploaded image', async () => {
    render(<UploadForm />);

    const file = new File(['test'], 'test.jpg', { type: 'image/jpeg' });
    const input = screen.getByLabelText('Upload a picture for the search');
    await userEvent.upload(input, file);

    const image = screen.getByAltText('Uploaded image');
    expect(image).toBeInTheDocument();
    expect(image.src).toContain('blob:'); // Check for blob URL
  });

  // Consider additional tests for accessibility, error handling, and edge cases
});
