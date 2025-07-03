import React from "react";

const article = [
  {
    id: 1,
    image: "https://www.leheriya.com/cdn/shop/articles/exclusive-banarasi-unstitched-salwar-suit-3pc-with-dupatta-semi-katan-pushpa-silk-627480_1024x_b813b80c-a989-4f18-a46f-ce819a201ca0_600x.jpg?v=1740033349",
    title: "Holi Fashion Guide: Colorful Banarasi Suit Styling Tips You Need to Try",
    description: "Holi, the festival of colors, is a time full of fun, music and of course, fashion. While Holi is all about splashing colors, your outfit can still ...",
    link: "#",
  },
  {
    id: 2,
    image: "https://www.leheriya.com/cdn/shop/articles/top-ethnic-suit-trends-for-a-stylish-holi-celebration-294326_600x.jpg?v=1739998785",
    title: "Top Ethnic Suit Trends for a Stylish Holi Celebration",
    description: "Holi, the festival of colors, is not just about playing with colors; it's about celebrating traditions, joy and style. This year, why not elevate y...",
    link: "#",
  },
  {
    id: 3,
    image: "https://www.leheriya.com/cdn/shop/articles/sacred-style-best-womens-suits-to-wear-on-maha-shivaratri-463770_600x.jpg?v=1739645155",
    title: "Sacred Style: Best Women’s Suits to Wear on Maha Shivaratri",
    description: "Maha Shivratri or Grand Night of Lord Shiva is a night filled with spirituality where prayers are offered under the serenity of the moonlit sky.....",
    link: "#",
  },
  {
    id: 4,
    image: "https://www.leheriya.com/cdn/shop/articles/celebrate-love-in-style-stunning-womens-salwar-suits-for-valentines-day-668638_400x.png?v=1738894294",
    title: "Celebrate Love in Style: Stunning Women’s Salwar Suits for Valentine’s Day",
    description: "Valentine’s Day is not just a day; it’s an emotion, a mix of love, warmth, and cherished moments...",
    link: "#",
  },
  {
    id: 5,
    image: "https://www.leheriya.com/cdn/shop/articles/new-arrivals-in-womens-salwar-suits-elegant-designs-to-elevate-your-ethnic-wardrobe-328873_400x.jpg?v=1737641702",
    title: "New Arrivals in Women's Salwar Suits: Elegant Designs to Elevate Your Ethnic Wardrobe",
    description: "The rhythm of our clothing changes with the seasons. A new line of salwar suits has come...",
    link: "#",
  },
  {
    id: 6,
    image: "https://www.leheriya.com/cdn/shop/articles/dupattas-in-2025-trending-colors-fabrics-and-styles-women-need-to-know-featuring-leheriya-576261_400x.jpg?v=1737294781",
    title: "Dupattas in 2025: Trending Colors, Fabrics, and Styles Women Need to Know – Featuring Leheriya",
    description: "A Dupatta is a must for any occasion to enhance the complete attire and in 2025, they still hold a significant amount of fashion aura...",
    link: "#",
  },
];

const Blog = () => {
  return (
<div className="py-16 text-center bg-gray-50">

<h2 className="text-4xl font-normal mb-12 flex justify-center items-center">BLOG</h2>

      {/* Responsive Grid Layout */}
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto px-4">

        {article.map((article) => (
<div key={article.id} className="bg-white  hover:shadow-lg transition-shadow duration-300 overflow-hidden">

<img src={article.image} alt={article.title} className="w-full h-64 object-cover" />

            <div className="p-4">
<h3 className="text-xl font-semibold mb-3 px-4 pt-4">{article.title}</h3>

<p className="text-gray-600 mb-6 px-4 text-base leading-relaxed">{article.description}</p>

<a href={article.link} className=" px-2 py-4 bg text-black font-medium align-left rounded-full hover:bg-opacity-90 transition-colors duration-200 mb-2">

                Read more
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog