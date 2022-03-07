import React, { useEffect, useState } from 'react';
import { useParams } from "react-router";
import { useNavigate } from 'react-router-dom'
import { Spinner } from '../SpinnerLoading';
import './style.scss';


const FormUser: React.FC = () => {

  const { userCpf } = useParams() as any;
  const isNew: Boolean = !userCpf;
  const navigate = useNavigate();

  const [isLoading, setLoading] = useState(false);

  const [user, setUser] = useState({
    name: '',
    email: '',
    cpf: '',
    phone: '',
  })

  const [error, setError] = useState({
    type: '',
    text: ''
  })


  const valueInput = (e: { target: { name: any; value: any; }; } | any) => {
    setUser({ ...user, [e.target.name]: e.target.value })
    //Validações
    if (e.target.name === 'name') {
      if (user.name.length < 3) {
        setError({ type: 'name', text: 'Este campo deve conter 3 ou mais caracteres' })
        return
      }
      setError({ type: '', text: '' })
    }
    if (e.target.name === 'email') {
      if (user.email.includes("@") === false) {
        setError({ type: 'email', text: 'Digite um email válido' })
        return
      }
      setError({ type: '', text: '' })
    }

    if (e.target.name === 'cpf') {
      if (user.cpf.length < 10) {
        setError({ type: 'cpf', text: 'Digite um cpf válido' })
        return
      }
      setError({ type: '', text: '' })
    }

    if (e.target.name === 'phone') {
      if (user.phone.length < 9) {
        setError({ type: 'phone', text: 'Digite um telefone válido' })
        return
      }
      setError({ type: '', text: '' })
    }
  }

  const isEnable = user.name.length && user.email.length && user.cpf.length && user.phone.length > 0

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

  function criarUser(e: any) {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => {
      const users = JSON.parse(localStorage.users)
      users.push(user)
      localStorage.setItem('users', JSON.stringify(users))
      setLoading(false)
      navigate('/')
    },1000)
   

  }

  function atualizarUser(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()

    const users = JSON.parse(localStorage.users)
    const index = users.findIndex((item: any) => item.cpf === userCpf);
    console.log(index)

    users[index].name = user.name
    users[index].email = user.email
    users[index].cpf = user.cpf
    users[index].phone = user.phone

    localStorage.removeItem('users')
    localStorage.setItem('users', JSON.stringify(users))
    navigate('/')
  }


  return (
    <div className='container'>
      <div className='container-form'>
        <h2>{
          isNew ? 'Adicionar novo User' : 'Atualizar dados do User'
        }</h2>
        <form onSubmit={isNew ? criarUser : atualizarUser}>
          <label>Nome completo (sem apreviações)</label>
          <input
            className={error.type === 'name' ? 'error' : 'style-input'}
            type='text'
            name='name'
            value={user.name}
            onChange={valueInput}>
          </input>
          {error.type === 'name' && <p>{error.text}</p>}
          <label>Email</label>
          <input
            className={error.type === 'email' ? 'error' : 'style-input'}
            type='email'
            name='email'
            value={user.email}
            onChange={valueInput}>
          </input>
          {error.type === 'email' && <p>{error.text}</p>}
          <label>CPF</label>
          <input
            className={error.type === 'cpf' ? 'error' : 'style-input'}
            type='text'
            name='cpf'
            inputMode='decimal'
            value={user.cpf}
            maxLength={11}
            onChange={valueInput}>
          </input>
          {error.type === 'cpf' && <p>{error.text}</p>}
          <label>Telefone</label>
          <input
            className={error.type === 'phone' ? 'error' : 'style-input'}
            type='text'
            name='phone'
            value={user.phone}
            maxLength={10}
            onChange={valueInput}>
          </input>
          {error.type === 'phone' && <p>{error.text}</p>}
          <button type='submit' disabled={!isEnable}>{
            isLoading? <Spinner/> : isNew ? 'Cadastrar' : 'Atualizar'
          }</button>

        </form>
      </div>
    </div>
  );
}

export default FormUser;