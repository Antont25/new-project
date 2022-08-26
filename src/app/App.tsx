import React, {useEffect} from 'react';
import './App.css';

import {useAppSelector} from '../common/hooks/useAppSelector';
import {useAppDispatch} from '../common/hooks/useAppDispatch';
import {initializeAppTC} from '../features/auth/auth-reducer';
import {LinearProgress} from '@mui/material';
import {WhichRouting} from '../common/components/routes/WhichRouting';
import {ErrorSnackbar} from '../common/components/errorSnackbar/ErrorSnackbar';
import {AppBar} from '../common/components/appBar/AppBar';
import {CircularIndeterminate} from '../common/components/CircularProgress/CircularProgress';


function App() {

    const status = useAppSelector(state => state.app.status)
    const initializeApp = useAppSelector(state => state.auth.initializeApp)
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(initializeAppTC())
    }, [])

    if(!initializeApp){
        return <CircularIndeterminate/>
    }

    return (
        <div className="App">
            <ErrorSnackbar/>
            <AppBar/>
            {status === 'loading' && <LinearProgress/>}
            <div className="container">
                <WhichRouting/>
            </div>
        </div>
    );
}


export default App