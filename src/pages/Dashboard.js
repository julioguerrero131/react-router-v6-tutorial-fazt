import { useNavigate, Link, Outlet } from "react-router-dom";
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
      <br/>
      <Link to='welcome'>Say Welcome</Link>
      <br/>
      <Link to='goodbye'>Say Good Bye</Link>
      <br/>

      <Outlet />

    </div>
  );
}
// OUTLET
// indica donde pintar el subcomponente

export default Dashboard;
