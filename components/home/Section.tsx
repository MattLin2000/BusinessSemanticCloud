import React from 'react';

type BlogPost = {
  id: number;
  author: string;
  title: string;
  content: string;
  image: string;
  views: number;
  likes: number;
};

const Section = () => {
  // 部落格文章資料
  const blogPosts: BlogPost[] = [
    {
      id: 1,
      author: 'Catherine',
      title: '在現在起，部落格管理更輕鬆',
      content:
        '部落格功能已現變得更快更便捷，您可隨時輕鬆管理。管理介面與部落格無縫接軌，管理介面可為您提供管理部落格所需的各種功能，包括文章建立、類別指派、SEO 調整等。請即按一下按鈕建立新文章、新增圖片和為文章加上格式。以行動應用程式管理部落格... Catherine Teng',
      image: 'images/section-1.png',
      views: 3,
      likes: 5,
    },
    {
      id: 2,
      author: 'Catherine',
      title: '發展部落格社群',
      content:
        '有了 Wix 部落格功能，您不單可向世界發表想法，更可發展有活力的線上社群。如要讓讀者登記並成為網站會員，請即透過編輯器側邊欄的「新增應用程式」新增會員專區功能。 會員可以做什麼？ 會員可互相追蹤，也可留言、回覆留言和獲取通... Catherine Teng',
      image: 'images/section-2.png',
      views: 8,
      likes: 12,
    },
    {
      id: 3,
      author: 'Catherine',
      title: '設計美觀部落格',
      content:
        '在設計方面，Wix 部落格功能必能回應您的一切需求，要建立美觀而吸引的文章也就更輕易。請來體驗我們提供的設計功能。 多種美觀版面配置任君選擇 部落格摘要附帶多款回應式版面配置，讓您隨心挑選。您可透過編輯器前往部落格摘要設... Catherine Teng',
      image: 'images/section-3.png',
      views: 15,
      likes: 23,
    },
  ];

  // 部落格卡片組件
  const BlogCard = ({ post }: { post: BlogPost }) => (
    <div className="text-white w-full md:w-1/2 lg:w-1/3 flex flex-col">
      {/* 圖片區域 */}
      <div className="relative overflow-hidden rounded-lg mb-4 aspect-video">
        <img
          src={post.image}
          alt={`${post.title} - ${post.author}`}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>

      {/* 內容區域 */}
      <div className="flex-1 flex flex-col">
        {/* 作者資訊 */}
        <div className="text-sm md:text-base lg:text-lg mb-2 text-gray-300">{post.author}</div>

        {/* 文章標題 */}
        <h3 className="text-lg md:text-xl lg:text-[30px] font-bold mb-3 leading-tight hover:text-[#00D8EA] transition-colors duration-300 cursor-pointer">
          {post.title}
        </h3>

        {/* 文章內容 */}
        <p className="text-sm md:text-base text-gray-300 border-b border-gray-500 pb-4 mb-4 flex-1 leading-relaxed line-clamp-4">
          {post.content}
        </p>

        {/* 統計資訊 */}
        <div className="flex justify-between items-center">
          {/* 觀看次數 */}
          <div className="flex items-center">
            <img className="w-4 h-4 md:w-5 md:h-5 mr-2" src="svg/eye-solid.svg" alt="觀看次數" />
            <span className="text-white text-sm md:text-base">{post.views}</span>
          </div>

          {/* 喜歡按鈕 */}
          <button className="flex items-center hover:text-red-400 transition-colors duration-300 cursor-pointer group">
            <img
              className="w-4 h-4 md:w-5 md:h-5 mr-1 group-hover:filter group-hover:brightness-0 group-hover:saturate-100 group-hover:invert-[48%] group-hover:sepia-[79%] group-hover:saturate-[2476%] group-hover:hue-rotate-[336deg] group-hover:brightness-[100%] group-hover:contrast-[97%] transition-all duration-300"
              src="svg/heart-regular.svg"
              alt="喜歡"
            />
            <span className="text-xs md:text-sm text-gray-400 group-hover:text-red-400">
              {post.likes}
            </span>
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="bg-black min-h-screen py-8 md:py-12">
      {/* 主容器 */}
      <div className="px-4 md:px-6 lg:px-10 ">
        {/* 標題區域 */}
        <div className="mb-8 md:mb-12">
          <h1 className="animate-slide-up text-[40px] sm:text-[56px] md:text-[72px] lg:text-[96px] text-white font-bold leading-tight">
            CFlux +
          </h1>
        </div>

        {/* 分隔線 */}
        <div className="animate-show-toRight py-6 md:py-8 lg:py-[40px]">
          <div className="bg-white h-[1px] w-full"></div>
        </div>

        {/* 部落格文章網格 */}
        <div className="flex flex-col md:flex-row md:flex-wrap lg:flex-nowrap gap-6 md:gap-8">
          {blogPosts.map(post => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Section;
