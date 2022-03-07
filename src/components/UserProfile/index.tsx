import React from 'react';
import User from '../../types/User'
import Avatar from 'react-avatar';

import './style.scss'
import { Button } from '../Styles/styles';
import { FaTrash } from 'react-icons/fa'
import { Link } from 'react-router-dom';


const UserProfile: React.FC<User> = ({ name, email, cpf, phone }) => {

    function ExcliurDados(usercpf: string) {

        const atualUsers = JSON.parse(localStorage.users)
        const removedUsers = atualUsers.filter((item: { cpf: string; }) => item.cpf !== usercpf)
        localStorage.setItem('users', JSON.stringify(removedUsers))
        window.location.reload()

    }

    return (
        <div className='container-profile'>
            <div className='profile-title'>
                <button className='button-excluir' onClick={() => ExcliurDados(cpf)}><FaTrash /></button>
                <Avatar name={name} round={true} size='80' className='Avatar' />
                <span className='title'>{name}</span>
            </div>
            <div className='informations'>
                <h4>Email:</h4>
                <h3>{email}</h3>
            </div>
            <div className='informations'>
                <h4>cpf:</h4>
                <h3>{cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4")}</h3>
            </div>
            <div className='informations'>
                <h4>Phone:</h4>
                <h3>{phone.replace(/(\d{2})(\d{4})(\d{4})/, "($1)$2-$3")}</h3>
            </div>
            <div className='container-button'>
                <Link to={`edit-user/${cpf}`}>
                    <Button>
                        Atualizar
                    </Button>
                </Link>


            </div>

        </div>
    );
}

export default UserProfile;