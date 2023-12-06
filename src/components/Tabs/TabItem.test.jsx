import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import TabItem from './TabItem';

const mockTab = {
  id: 1,
  label: 'Test Tab',
};

const mockOnTabClick = jest.fn();

describe('TabItem component', () => {

  it('calls onTabClick when the button is clicked', () => {
    render(<TabItem tab={mockTab} onTabClick={mockOnTabClick} />);

    fireEvent.click(screen.getByText('Test Tab'));

    expect(mockOnTabClick).toHaveBeenCalledWith(mockTab);
  });

  it('calls onTabClick when the button is clicked (alternative using userEvent)', () => {
    render(<TabItem tab={mockTab} onTabClick={mockOnTabClick} />);

    userEvent.click(screen.getByText('Test Tab'));

    expect(mockOnTabClick).toHaveBeenCalledWith(mockTab);
  });


});
