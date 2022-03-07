import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import FormUser from '../../components/FormUser';

const AddUsers: React.FC = () => {

  const { userCpf } = useParams() as any;
  

  const [user, setUser] = useState({
    name: '',
    email: '',
    cpf: '',
    phone: '',
  })
  
  useEffect(() => {
    if (window.location.href.includes('/edit-user')) {
      const users = JSON.parse(localStorage.users)
      const atualUser = users.filter((item: any) => item.cpf === userCpf)
      setUser({
        name: atualUser[0].name,
        email: atualUser[0].email,
        cpf: atualUser[0].cpf,
        phone: atualUser[0].phone
      })
    }
  }, []);

  return(
          <FormUser
          user={user}
          userSet={setUser}
          userCpf={userCpf}
          />
  );
}

export default AddUsers;