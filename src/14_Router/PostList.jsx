import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getPosts } from "../redux/slices/postSlice";
import { Link, useNavigate, useSearchParams } from "react-router-dom";

export default function PostList() {
  const dispatch = useDispatch();

  const { posts } = useSelector((state) => state.post);

  const navigate = useNavigate();

  const [searchParams, setSearchParams] = useSearchParams();

  //cộng thức tạo ra 1 mảng [1,2,3,...n]
  const totalPages = Math.ceil(100 / 10);

  const pages = Array.from({ length: totalPages }, (_, index) => index + 1);

  useEffect(() => {
    const page = searchParams.get("page");
    dispatch(getPosts({ page }));
  }, [searchParams]);

  const handleChangePage = (page) => {
    searchParams.set("page", page);
    setSearchParams(searchParams);
  };

  return (
    <div>
      <h1>PostList</h1>
      <ul>
        {posts.map((post) => {
          return (
            <li className="mb-2" key={post.id}>
              <span className="me-2">{post.title}</span>
              {/* không có dấu / sau to vì sẽ nối vào url để chuyển hướng đến trang con */}
              {/* <Link to={`${post.id}`}>Details</Link> */}

              <button
                onClick={() => navigate(`${post.id}`)}
                className="btn btn-success"
              >
                Detail
              </button>
            </li>
          );
        })}
      </ul>

      {/* 3 thông số khi làm phân trang:total,page,limit(số lượng phần tử mỗi page) */}
      <div className="d-flex justify-content-center">
        {pages.map((page) => {
          return (
            <button
              onClick={() => handleChangePage(page)}
              className="rounded me-1"
              key={page}
            >
              {page}
            </button>
          );
        })}
      </div>
    </div>
  );
}
