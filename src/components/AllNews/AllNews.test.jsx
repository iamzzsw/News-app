import { render, waitFor } from "@testing-library/react";
import AllNews from "./AllNews";

jest.mock("node-fetch", () => require("fetch-mock-jest").sandbox());

describe("AllNews", () => {
  it("renders without crashing", () => {
    render(<AllNews sortValue={null} searchValue="" />);
  });

  it("fetches articles and renders NewsPreviewList", async () => {
    const mockArticles = [
      { title: "News 1", urlToImage: "image1.jpg", publishedAt: "2023-01-01", url: "/news1" },
      { title: "News 2", urlToImage: "image2.jpg", publishedAt: "2023-01-02", url: "/news2" },
    ];

    global.fetch.mockResponseOnce(JSON.stringify({ status: "ok", articles: mockArticles }));

    const { getByText, queryByText } = render(<AllNews sortValue={null} searchValue="" />);

    await waitFor(() => {
      expect(queryByText("Loading...")).toBeNull();
      mockArticles.forEach((article) => {
        expect(getByText(article.title)).toBeInTheDocument();
        expect(getByText(article.publishedAt)).toBeInTheDocument();
      });
    });
  });

  it("renders LoadMoreButton if there are more articles", async () => {
    const mockArticles = Array.from({ length: 15 }, (_, index) => ({
      title: `News ${index + 1}`,
      urlToImage: `image${index + 1}.jpg`,
      publishedAt: "2023-01-01",
      url: `/news${index + 1}`,
    }));

    global.fetch.mockResponseOnce(JSON.stringify({ status: "ok", articles: mockArticles }));

    const { getByText } = render(<AllNews sortValue={null} searchValue="" />);

    await waitFor(() => {
      expect(getByText("Load More")).toBeInTheDocument();
    });
  });

  it("does not render LoadMoreButton if there are no more articles", async () => {
    const mockArticles = [
      { title: "News 1", urlToImage: "image1.jpg", publishedAt: "2023-01-01", url: "/news1" },
      { title: "News 2", urlToImage: "image2.jpg", publishedAt: "2023-01-02", url: "/news2" },
    ];

    global.fetch.mockResponseOnce(JSON.stringify({ status: "ok", articles: mockArticles }));

    const { queryByText } = render(<AllNews sortValue={null} searchValue="" />);

    await waitFor(() => {
      expect(queryByText("Load More")).toBeNull();
    });
  });

  
});
