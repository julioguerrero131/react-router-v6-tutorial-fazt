import { useParams } from 'react-router-dom'; // PARAMS

function UserPage() {

  const { id } = useParams(); // objeto con parametros

  return (
    <div>
        UserPage
        <h1>{ id }</h1>
    </div>
  )
}

export default UserPage