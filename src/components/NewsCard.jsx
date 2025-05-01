import {
  FaEye,
  FaStar,
  FaShareAlt,
  FaBookmark,
  FaRegBookmark,
} from "react-icons/fa";
import { Link } from "react-router";

const NewsCard = ({ news }) => {
  const { title, author, thumbnail_url, details, total_view, rating, id } =
    news;

  return (
    <div className="card bg-base-100 shadow-lg mb-6">
      {/* Author & Share */}
      <div className="flex items-center justify-between p-4 bg-base-200 rounded-tr-selector rounded-tl-selector">
        <div className="flex items-center gap-3">
          <img
            src={author.img}
            alt={author.name}
            className="w-10 h-10 rounded-full"
          />
          <div>
            <h2 className="font-semibold text-primary">{author.name}</h2>
            <p className="text-sm text-gray-500">
              {new Date(author.published_date).toLocaleDateString()}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-3 text-gray-500 text-lg">
          <FaRegBookmark className="cursor-pointer" />
          <FaShareAlt className="cursor-pointer" />
        </div>
      </div>

      {/* Title & Image */}
      <div className="px-4 py-3">
        <h2 className="card-title text-primary text-lg mb-2">{title}</h2>
        <figure>
          <img
            src={thumbnail_url}
            alt="news"
            className="w-full h-56 object-cover rounded"
          />
        </figure>

        {/* Details with "Read More" */}
        <p className="text-gray-700 mt-3">
          {details.length > 250 ? `${details.slice(0, 250)}... ` : details}
          {details.length > 250 && (
            <Link
              to={`/news-details/${id}`}
              className="text-blue-500 font-medium hover:underline"
            >
              Read More
            </Link>
          )}
        </p>
      </div>

      {/* Footer: Rating & Views */}
      <div className="flex justify-between items-center px-4 py-5 border-t border-t-base-300 text-sm text-gray-600">
        <div className="flex items-center gap-1 text-orange-500 font-semibold">
          {Array.from({ length: Math.round(rating.number) }).map((_, i) => (
            <FaStar key={i} />
          ))}
          <span>{rating.number}</span>
        </div>
        <div className="flex items-center gap-2">
          <FaEye />
          <span>{total_view}</span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
