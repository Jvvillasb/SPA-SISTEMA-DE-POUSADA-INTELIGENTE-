import { fireEvent, render, screen } from "@testing-library/react";
import TemplateCardMenu from "./TemplateCardMenu";

describe("TemplateCardMenu", () => {
  const mockOnClick = jest.fn();
  const mockActions = [{ label: "Action 1", onClick: mockOnClick }];

  it("should render component", () => {
    render(<TemplateCardMenu actions={mockActions} />);

    expect(screen.getByText(/action 1/i)).toBeInTheDocument();
  });

  it("should call onClick method when click action", async () => {
    render(<TemplateCardMenu actions={mockActions} />);

    const action = screen.getByText(/action 1/i)

    fireEvent.click(action)

    expect(mockOnClick).toBeCalled()
  })
});
