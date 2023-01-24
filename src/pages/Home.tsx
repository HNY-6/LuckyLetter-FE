import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h2>Home</h2>
      <p>임시로 만들어둔 페이지입니다.</p>
      <Link to='/login'>이동</Link>
    </div>
  );
};

export default Home;
