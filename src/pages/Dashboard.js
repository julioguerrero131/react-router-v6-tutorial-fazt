import { useNavigate } from 'react-router-dom'
// antes: useSystem

// Panel de control del usuario
function Dashboard() {

  const navigate = useNavigate();
  // antes: history

  const handleClick = () => {
    navigate('/');
  }

  return (
    <div>
        <h1>Dashboard</h1>
        <button onClick={handleClick}>
            log out
        </button>
    </div>
  )
}

export default Dashboard