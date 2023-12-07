import { render, fireEvent, waitFor } from "@testing-library/react";
import NewsPreview from "./NewsPreview";

const mockNews = {
  id: 1,
  title: "Test News",
  url: "https://example.com",
  urlToImage: "https://example.com/image.jpg",
  publishedAt: "2023-01-01",
};

describe("NewsPreview Component", () => {
  it("renders without crashing", () => {
    render(<NewsPreview {...mockNews} />);
    
  });



  it("opens and closes the modal on click", async () => {
    const { getByText, queryByText } = render(<NewsPreview {...mockNews} />);

    expect(queryByText("Хотите перейти по ссылке?")).not.toBeInTheDocument();

    fireEvent.click(getByText("Test News"));

    expect(getByText("Хотите перейти по ссылке?")).toBeInTheDocument();

    fireEvent.click(getByText("Отмена"));

    await waitFor(() => {
      expect(queryByText("Хотите перейти по ссылке?")).not.toBeInTheDocument();
    });
  });
});
