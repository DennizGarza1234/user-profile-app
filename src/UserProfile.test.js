import { render, screen } from "@testing-library/react";
import UserProfile from "./UserProfile";

describe("UserProfile Component Tests", () => {

  test("renders correct name", () => {
    render(
      <UserProfile
        name="Jane Doe"
        email="jane@example.com"
        photo="https://example.com/photo.jpg"
      />
    );
    expect(screen.getByText("Name: Jane Doe")).toBeInTheDocument();
  });

  test("renders correct email", () => {
    render(
      <UserProfile
        name="John Smith"
        email="john@example.com"
        photo="https://example.com/photo.jpg"
      />
    );
    expect(screen.getByText("Email: john@example.com")).toBeInTheDocument();
  });

  test("renders correct mailto link", () => {
    render(
      <UserProfile
        name="Alice"
        email="alice@example.com"
        photo="https://example.com/photo.jpg"
      />
    );
    const link = screen.getByText("Send Email");
    expect(link).toHaveAttribute("href", "mailto:alice@example.com");
  });

  test("handles missing name", () => {
    render(
      <UserProfile
        name=""
        email="test@example.com"
        photo="https://example.com/photo.jpg"
      />
    );
    expect(screen.getByText("Name: No Name Provided")).toBeInTheDocument();
  });

  test("handles missing email", () => {
    render(
      <UserProfile
        name="No Email User"
        email=""
        photo="https://example.com/photo.jpg"
      />
    );
    expect(screen.getByText("Email: No Email Provided")).toBeInTheDocument();
  });

  test("handles missing photo", () => {
    render(
      <UserProfile
        name="Photo Missing"
        email="photo@example.com"
        photo=""
      />
    );
    const image = screen.getByAltText("User Photo");
    expect(image).toHaveAttribute(
      "src",
      "https://via.placeholder.com/150"
    );
  });

});