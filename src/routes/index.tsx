import { Route, Routes } from 'react-router-dom';

import AddUsers from '../pages/AddUsers';
import Users from '../pages/Users';

export default function MainRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Users/>}/>
            <Route path='add-user' element={<AddUsers/>}/>
            <Route path='edit-user/:userCpf' element={<AddUsers/>}/>
        </Routes>
    )
}