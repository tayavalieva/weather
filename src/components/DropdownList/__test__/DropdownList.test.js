import { render, screen } from "@testing-library/react";
import DropdownList from "../DropdownList";

const mockedOnSelect = jest.fn();
const mockedSuggestions = [
  { name: "London", country: "GB" },
  { name: "London", country: "CA" },
];
const mockErrorMessage = null;

describe("Dropdown list is rendered and renders multiple items", () => {
  it("is renders passed suggestions", () => {
    render(
      <DropdownList
        suggestions={mockedSuggestions}
        onSelectSuggestion={mockedOnSelect}
        errorMessage={mockErrorMessage}
      />
    );
    const dropdownListElements = screen.getAllByText(/london/i);
    expect(dropdownListElements.length).toBe(2);
  });
});
