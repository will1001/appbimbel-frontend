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


    const selectMapelChanged = (e) => {
        setSelectMapel(e.target.value);
        
    }

    const fecthBankSoal = () => {
        if (
            selectMapel === "" &&
            selectKelas === "" &&
            selectbabSoal === "" &&
            selectTingkatKesulitan === ""
        ) {
            return "";
        } else {
            axios.get('/bank_soal?id_mapel='
                + selectMapel +
                '&id_kelas=' + selectKelas
                + '&id_bab_soal=' + selectbabSoal
                +'&id_tingkat_kesulitan=' + selectTingkatKesulitan)
                .then(function (response) {
                    setBankSoal(response.data);
                });
        }
    }
    
    const nomorChanged = (e) => {
        setNomor(e.target.value)
    }
    const selectKelasChanged = (e) => {
        setSelectKelas(e.target.value)
    }
    const selectBabSoalChanged = (e) => {
        setSelectBabSoal(e.target.value)
    }
    const selectTingkatKesulitanChanged = (e) => {
        setSelectTingkatKesulitan(e.target.value)
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
        if (
            selectMapel !== "" &&
            selectKelas !== "" &&
            selectbabSoal !== "" &&
            selectTingkatKesulitan !== ""
        ) {
            axios.get('/bank_soal?id_mapel='
                + selectMapel +
                '&id_kelas=' + selectKelas
                + '&id_bab_soal=' + selectbabSoal
                +'&id_tingkat_kesulitan=' + selectTingkatKesulitan)
                .then(function (response) {
                    setBankSoal(response.data);
                });
        }
    }, [selectMapel,selectKelas,selectbabSoal,selectTingkatKesulitan]);

    return (
        <div className={styles.container}>
            <div className={styles.button__group}>
                <Button title="Tambah Soal" link="/form_soal" />
                <Button title="Edit Soal" link="/form_soal" />
                <Button link="/" title="Hapus Soal" />
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
