import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Input from './Input';

describe('Input Component', () => {
    const mockOnChange = jest.fn();
    const defaultProps = {
        label: 'Test Label',
        onChange: mockOnChange,
        value: '',
        type: 'text',
        id: 'test-id',
        placeholder: 'Test Placeholder',
        name: 'test-name',
    };

    it('renders with props', () => {
        const { getByLabelText } = render(<Input {...defaultProps} />);

        const inputElement = getByLabelText('Test Label');
        expect(inputElement).toBeInTheDocument();
        expect(inputElement).toHaveAttribute('id', 'test-id');
        expect(inputElement).toHaveAttribute('type', 'text');
        expect(inputElement).toHaveAttribute('name', 'test-name');
        expect(inputElement).toHaveAttribute('placeholder', 'Test Placeholder');
        expect(inputElement).toHaveValue('');
    });

    it('checks if we trigger event on change', () => {
        const { getByLabelText } = render(<Input {...defaultProps} />);

        const inputElement = getByLabelText('Test Label');
        fireEvent.change(inputElement, { target: { value: 'New Value' } });

        expect(mockOnChange).toHaveBeenCalledTimes(1);
        expect(mockOnChange).toHaveBeenCalledWith(expect.any(Object));
    });
});
