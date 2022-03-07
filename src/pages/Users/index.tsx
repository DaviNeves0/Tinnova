import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Container } from '../../components/Styles/styles';
import UserProfile from '../../components/UserProfile';
import api from '../../service/api';
import User from '../../types/User';


const Users: React.FC = () => {

    const [listUsers, setListUser] = useState([]);

    function salvarDados(users: User) {

        if (localStorage.getItem('users') == null) {
            localStorage.setItem('users', JSON.stringify(users));
        }
        setListUser(JSON.parse(localStorage.users));

    }

    useEffect(() => {
        async function buscarUsers() {
            const res = await api.get('https://private-9d65b3-tinnova.apiary-mock.com/users')
            salvarDados(res.data)
        }
        buscarUsers()
    }, [])

    return (
        <div>
            <div className='container-button'>
                <Link to="/add-user">
                    <Button style={{'marginTop':'20px'}}>Cadastrar</Button>
                </Link>
            </div>
            <Container>
                {
                    listUsers.map((item: User) => {
                        return (
                            <UserProfile
                                key={item.cpf}
                                name={item.name}
                                cpf={item.cpf}
                                phone={item.phone}
                                email={item.email}
                            />
                        )
                    })
                }
            </Container>
        </div>
    );
}

export default Users;