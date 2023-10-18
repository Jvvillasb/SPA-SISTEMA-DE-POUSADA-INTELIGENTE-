import Loader from "./Loader.component";

import { render, screen } from "@testing-library/react";

jest.mock("@chakra-ui/react", () => ({
  ...jest.requireActual("@chakra-ui/react"),
  Spinner: () => <div data-testid="chakra-spinner"></div>,
}));

const makeSUT = (message?: string) => {
  render(<Loader message={message} />);
};

describe("Loader", () => {
  it("should render component with default props", () => {
    makeSUT();

    expect(screen.getByTestId("chakra-spinner")).toBeInTheDocument();
    expect(screen.getByText(/carregando\.\.\./i)).toBeInTheDocument();
  });

  it("should render component with custom message", () => {
    makeSUT("Custom message");

    expect(screen.getByTestId("chakra-spinner")).toBeInTheDocument();
    expect(screen.getByText(/custom message/i)).toBeInTheDocument();
  });
});
