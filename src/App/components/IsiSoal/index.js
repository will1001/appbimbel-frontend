import React,{ useEffect, useState } from 'react'
import styles from './styles.module.css'
import axios from '../../axios'
import Button from '../../components/Button'
function IsiSoal(props) {
    
    // const [linkTemp, setLinkTemp] = useState([]);
    const [showPanelInput, setShowPanelInput] = useState(false);
   
    const base_url = "http://103.161.184.70";

    useEffect(() => {
        async function fetchdata() {
        }
      
        fetchdata();

    }, []);

    const MainPanel =
        <>
            <h1>Isi Soal</h1>
        </>

    return (
        <div className={styles.container}>
            {MainPanel}
        </div>
    )
}

export default IsiSoal
