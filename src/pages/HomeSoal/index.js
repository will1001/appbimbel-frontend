import React,{ useEffect, useState } from 'react'
import styles from './styles.module.css'
import Button from '../../component/Button'
import axios from '../../axios'

function HomeSoal(props) {
    const [bankSoal, setBankSoal] = useState([]);
    const [mapel, setMapel] = useState([]);
    const [kelas, setKelas] = useState([]);
    const [babSoal, setBabSoal] = useState([]);
    const [tingkatKesulitan, setTingkatKesulitan] = useState([]);
    const [selectMapel, setSelectMapel] = useState("");
    const [selectKelas, setSelectKelas] = useState("");
    const [selectbabSoal, setSelectBabSoal] = useState("");
    const [selectTingkatKesulitan, setSelectTingkatKesulitan] = useState("");
    const [nomor, setNomor] = useState(1);
    const [id, setId] = useState("");
    const [deleteData, setDeleteData] = useState(false);
    const [updateData, setUpdateData] = useState(false);


    const selectMapelChanged = (e) => {
        setSelectMapel(e.target.value);
        setUpdateData(true);
        
    }

   
    
    const nomorChanged = (e) => {
        setNomor(e.target.value)
    }
    const selectKelasChanged = (e) => {
        setSelectKelas(e.target.value)
        setUpdateData(true);
    }
    const selectBabSoalChanged = (e) => {
        setSelectBabSoal(e.target.value)
        setUpdateData(true);
    }
    const selectTingkatKesulitanChanged = (e) => {
        setSelectTingkatKesulitan(e.target.value)
        setUpdateData(true);
    }
    const fetchUpdateBankSoal = (e) => {
        axios.get('/bank_soal?id_mapel='
                + selectMapel +
                '&id_kelas=' + selectKelas
                + '&id_bab_soal=' + selectbabSoal
                +'&id_tingkat_kesulitan=' + selectTingkatKesulitan)
                .then(function (response) {
                    setBankSoal(response.data);
                    if (response.data.length !== 0 ) {
                        if(nomor !== 0){
                            setId(response.data[nomor - 1].id);
                        }
                    }
                });
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
        if (selectMapel !== "") {
            axios.get('/bab_soal?id_mapel=' + selectMapel)
                .then(function (response) {
                    setBabSoal(response.data);
            });
        }
        if (deleteData) {
            const data = {
                id : id
            }
            axios.post('/bank_soal',data)
                .then(function (response) {
                    console.log(response.data);
                });
            setNomor(bankSoal.length - 1);
            axios.get('/bank_soal?id_mapel='
                + selectMapel +
                '&id_kelas=' + selectKelas
                + '&id_bab_soal=' + selectbabSoal
                +'&id_tingkat_kesulitan=' + selectTingkatKesulitan)
                .then(function (response) {
                    setBankSoal(response.data);
                    if (response.data.length !== 0) {
                        if (nomor !== 0) {
                            setId(response.data[response.data.length - 1].id);
                        }
                    }
                });
                setDeleteData(false)
        }
        // if (nomor > 0) {
            
        // }
        if (
            selectMapel !== "" &&
            selectKelas !== "" &&
            selectbabSoal !== "" &&
            selectTingkatKesulitan !== "" &&
            updateData
        ) {
            fetchUpdateBankSoal();
            setUpdateData(false);
            
            }
    }, [selectMapel,selectKelas,selectbabSoal,selectTingkatKesulitan,nomor,deleteData,id,bankSoal]);

    return (
        <div className={styles.container}>
            <div className={styles.button__group}>
                <Button title="Tambah Soal" link="/add_soal" />
                {bankSoal.length === 0 ? 
                    <>
                    </>
                :
                    <>
                        <Button title="Edit Soal" link={'/edit_soal/'+ id } />
                        <Button link="/" title="Hapus Soal" onClick={e =>{setDeleteData(true)}} />
                    </>
                }
            </div>
            <span>mata pelajaran </span>
            <select value={selectMapel} onChange={selectMapelChanged}>   
            <option value="" disabled ></option>
                {mapel.map(item => (
                   <option key={item.id} value={item.id}>{item.deskripsi}</option>
                ))}
            </select>
            <span>kelas </span>
            <select value={selectKelas} onChange={selectKelasChanged}>
                <option value="" disabled ></option>
                {kelas.map(item => (
                   <option key={item.id} value={item.id}>{item.deskripsi}</option>
                ))}
            </select>
            <span>Bab </span>
            <select value={selectbabSoal} onChange={selectBabSoalChanged}>
                <option value="" disabled ></option>
                {babSoal.map(item => (
                   <option key={item.id} value={item.id}>{item.deskripsi}</option>
                ))}
            </select>
            <span>tingkat kesulitan </span>
            <select value={selectTingkatKesulitan} onChange={selectTingkatKesulitanChanged}>
                <option value="" disabled ></option>
                {tingkatKesulitan.map(item => (
                   <option key={item.id} value={item.id}>{item.deskripsi}</option>
                ))}
            </select>
            <span>No </span>
            <select value={nomor} onChange={nomorChanged}>
                <option value=""></option>
                {bankSoal.map((item,index) => (
                   <option key={item.id} value={index+1}>{index+1}</option>
                ))}
            </select>
            <br />
            {bankSoal.slice(nomor-1,nomor).map(item => (
                <div key={item.id} className="">
                    {/* //    <option key={item.id} value={item.id}>{item.deskripsi}</option> */}
                <strong>Soal :</strong>
                <p>{item.soal}</p>
                    {item.tipe_soal === "pilgan" ? 
                        <div className="">
                            <p>A. {item.pil_a}</p>
                            <p>B. {item.pil_b}</p>
                            <p>C. {item.pil_c}</p>
                            <p>D. {item.pil_d}</p>
                            <p>E. {item.pil_e}</p>
                        </div>
                    :
                        <div className=""></div>
                }    
                <strong>Jawaban :</strong>
                <p>{item.jawaban}</p>
                <strong>Pembahasan :</strong>
                <p>{item.pembahasan}</p>
                {/* <a href="#0"></a> */}
                </div>
            ))}
            
        </div>
    )
}

export default HomeSoal
