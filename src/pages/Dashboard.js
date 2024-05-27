import { useNavigate, Route, Routes, Link } from "react-router-dom";
// antes: useSystem

// Panel de control del usuario
function Dashboard() {
  const navigate = useNavigate();
  // antes: history

  const handleClick = () => {
    navigate("/");
  };

  return (
    <div>
      <h1>Dashboard</h1>
      <button onClick={handleClick}>log out</button>

      <Link to='welcome'>Say Welcome</Link>

      <Routes>
      <Route path="welcome" element={<p>Welcome</p>} />s
      </Routes>
      
    </div>
  );
}

export default Dashboard;
