import { render, screen } from "@testing-library/react";
import NewsPreviewList from "./NewsPreviewList";
import { News } from "../../api/types";


const mockNews1 = [
    {
      title: "Test News 1",
      url: "https://example.com/news1",
      urlToImage: "https://example.com/image1.jpg",
      publishedAt: "2023-01-01",
    },
    {
      title: "Test News 1",
      url: "https://example.com/news2",
      urlToImage: "https://example.com/image2.jpg",
      publishedAt: "2023-01-02",
    },
  ];

const mockNews = [
  {
    title: "Test News 1",
    url: "https://example.com/news1",
    urlToImage: "https://example.com/image1.jpg",
    publishedAt: "2023-01-01",
  },
  {
    title: "Test News 2",
    url: "https://example.com/news2",
    urlToImage: "https://example.com/image2.jpg",
    publishedAt: "2023-01-02",
  },
];

describe("NewsPreviewList Component", () => {
  it("renders news list correctly", () => {
    render(<NewsPreviewList news={mockNews} />);

    const listItems = screen.getAllByRole("listitem");
    expect(listItems.length).toBe(2); // Assuming there are two news items in the mock data

    mockNews.forEach((news, index) => {
      expect(screen.getByText(news.title)).toBeInTheDocument();
      expect(screen.getByText(news.publishedAt)).toBeInTheDocument();
      expect(screen.getByAltText(news.title)).toHaveAttribute("src", news.urlToImage);
    });
  });

  it("passes correct props to NewsPreview component", () => {
    render(<NewsPreviewList news={mockNews} />);

    mockNews.forEach((news, index) => {
      const newsPreviewProps = {
        url: news.url,
        urlToImage: news.urlToImage,
        id: news.title,
        title: news.title,
        publishedAt: news.publishedAt,
      };

      expect(screen.getByTestId(`news-preview-${index}`)).toHaveProperty("props", newsPreviewProps);
    });
  });

  it("renders news list correctly", () => {
    render(<NewsPreviewList news={mockNews} />);

    const listItems = screen.getAllByRole("listitem");

    expect(listItems.length).toBe(2);

    mockNews.forEach((news) => {
      // Потенциальный баг: Не учитываем асинхронную загрузку изображений, можем получить false-positive.
      expect(screen.getByText(news.title)).toBeInTheDocument();
      expect(screen.getByText(news.publishedAt)).toBeInTheDocument();
      expect(screen.getByAltText(news.title)).toHaveAttribute("src", news.urlToImage);
    });
  });

  it("renders news list correctly", () => {
    render(<NewsPreviewList news={mockNews1} />);

  });
});
