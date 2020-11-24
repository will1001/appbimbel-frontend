import React,{ useEffect, useState } from 'react'
import Button from '../../component/Button'
import styles from './styles.module.css'
import axios from '../../axios'

function FormSoal(props) {
    const Latex = require('react-latex');
    const [mapel, setMapel] = useState([]);
    const [kelas, setKelas] = useState([]);
    const [babSoal, setBabSoal] = useState([]);
    const [tingkatKesulitan, setTingkatKesulitan] = useState([]);
    const [selectMapel, setSelectMapel] = useState("");
    const [selectKelas, setSelectKelas] = useState("");
    const [selectbabSoal, setSelectBabSoal] = useState("");
    const [selectTingkatKesulitan, setSelectTingkatKesulitan] = useState("");
    const [tipeSoal, setTipeSoal] = useState("essai");
    const [soal, setSoal] = useState("essai");


    const selectMapelChanged = (e) => {
        setSelectMapel(e.target.value);
        // console.log(selectMapel);
        axios.get('/bab_soal?id_mapel=' + selectMapel)
            .then(function (response) {
                setBabSoal(response.data);
        });
    }
   
    const tipeSoalChanged = (e) => {
        setTipeSoal(e.target.value);
    }
    
    const soalType = (e) => {
        setSoal(e.target.value)
    }

    useEffect(() => {
        async function fetchdata() {
            
            axios.get('/mapel')
                .then(function (response) {
                    setMapel(response.data);
                });
            
            axios.get('/kelas')
                .then(function (response) {
                    setKelas(response.data);
                });
            
            axios.get('/tingkat_kesulitan')
                .then(function (response) {
                    setTingkatKesulitan(response.data);
                });
        }
        fetchdata();
    }, []);

    return (
        <div className={styles.container}>
            <span>mata pelajaran </span>
            <select value={selectMapel} onChange={selectMapelChanged}>   
            <option value="" disabled ></option>
                {mapel.map(item => (
                   <option key={item.id} value={item.id}>{item.deskripsi}</option>
                ))}
            </select>
            <span>kelas </span>
            <select value={selectKelas} value={selectKelas} onChange={setSelectKelas}>
                <option value="" disabled ></option>
                {kelas.map(item => (
                   <option key={item.id} value={item.deskripsi}>{item.deskripsi}</option>
                ))}
            </select>
            <span>Bab </span>
            <select value={selectbabSoal} onChange={setSelectBabSoal}>
                <option value="" disabled ></option>
                {babSoal.map(item => (
                   <option key={item.id} value={item.deskripsi}>{item.deskripsi}</option>
                ))}
            </select>
            <span>tingkat kesulitan </span>
            <select value={selectTingkatKesulitan} onChange={setSelectTingkatKesulitan}>
                <option value="" disabled ></option>
                {tingkatKesulitan.map(item => (
                   <option key={item.id} value={item.deskripsi}>{item.deskripsi}</option>
                ))}
            </select>
            <span>tipe soal : </span>
            <select value={tipeSoal} onChange={tipeSoalChanged}>
                <option value="essai">essai</option>
                <option value="pilgan">pilihan ganda</option>
            </select>
            <br />
            <span>soal : </span>
            <br/>
            <textarea value={soal} onChange={soalType} name="" id="" cols="30" rows="10"></textarea>
            
            {/* <Latex>What is $(3\times 4) \div (5-3)$</Latex> */}
            <Latex>{soal}</Latex>
            <br />
            {tipeSoal === "essai" ?
                <div></div>
            :
                <div className={styles.pilihan__ganda}>
                    <span>Pilihan A</span>
                    <textarea name="" id="" cols="30" rows="10"></textarea>
                    <br />
                    <span>Pilihan B</span>
                    <textarea name="" id="" cols="30" rows="10"></textarea>
                    <br />
                    <span>Pilihan C</span>
                    <textarea name="" id="" cols="30" rows="10"></textarea>
                    <br />
                    <span>Pilihan D</span>
                    <textarea name="" id="" cols="30" rows="10"></textarea>
                    <br />
                    <span>Pilihan E</span>
                    <textarea name="" id="" cols="30" rows="10"></textarea>
                    <br/>
                </div>
            }
            <span>jawaban : </span>
            <br/>
            <textarea name="" id="" cols="30" rows="10"></textarea>
            <br />
            <span>pembahasan : </span>
            <br/>
            <textarea name="" id="" cols="30" rows="10"></textarea>
            <br/>
            <Button title="Submit" link="/" />
        </div>
    )
}

export default FormSoal
