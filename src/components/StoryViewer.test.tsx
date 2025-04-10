import { render, screen, fireEvent } from '@testing-library/react';
import StoryViewer from './StoryViewer';
import stories from '../../data/stories.json';
import { describe, expect, it, vi } from 'vitest';

describe('StoryViewer', () => {
  const mockSetUserId = vi.fn();

  it('renders first slide correctly', () => {
    render(<StoryViewer userId={1} setUserId={mockSetUserId} />);
    const firstStory = stories.find((story) => story.userId === 1)?.data?.[0];
    expect(screen.getByRole('img')).toHaveAttribute('src', firstStory);
  });


  it('clicking on rightZone moves to next slide', () => {
    const mockSetUserId = vi.fn();
  
    const { container } = render(
      <StoryViewer userId={1} setUserId={mockSetUserId} />
    );
  
    const rightZone = container.querySelector('.rightZone');
    const leftZone = container.querySelector('.leftZone');
    
    expect(rightZone).toBeTruthy();
    expect(leftZone).toBeTruthy(); 
    fireEvent.click(rightZone as HTMLElement);
    fireEvent.click(leftZone as HTMLElement);
  });

  it('closes when clicking close button', () => {
    render(<StoryViewer userId={1} setUserId={mockSetUserId} />);
    fireEvent.click(screen.getByText('X'));
    expect(mockSetUserId).toHaveBeenCalledWith(null);
  });
});
