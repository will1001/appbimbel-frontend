import React,{ useEffect, useState } from 'react'
import Button from '../../component/Button'
import styles from './styles.module.css'
import axios from '../../axios'
import ReactHtmlParser from 'react-html-parser';
import { useParams } from "react-router-dom";
// import CKEditor from 'ckeditor4-react';
// import { CKEditor } from '@ckeditor/ckeditor5-react';
// import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
// import CKEditor from '@ckeditor/ckeditor5-react';
// import ClassicEditor from 'ckeditor5-classic-with-mathtype';
// import MathType from '@wiris/mathtype-ckeditor5';


function EditForm(props) {
    const Latex = require('react-latex');
    const [mapel, setMapel] = useState([]);
    const [bankSoal, setBankSoal] = useState([]);
    const [kelas, setKelas] = useState([]);
    const [babSoal, setBabSoal] = useState([]);
    const [tingkatKesulitan, setTingkatKesulitan] = useState([]);
    const [selectMapel, setSelectMapel] = useState("");
    const [selectKelas, setSelectKelas] = useState("");
    const [selectbabSoal, setSelectBabSoal] = useState("");
    const [selectTingkatKesulitan, setSelectTingkatKesulitan] = useState("");
    const [tipeSoal, setTipeSoal] = useState("essai");
    const [soal, setSoal] = useState("");
    const [jawaban, setJawaban] = useState("");
    const [pembahasan, setPembahasan] = useState("");
    const [pil_a, setPil_a] = useState("");
    const [pil_b, setPil_b] = useState("");
    const [pil_c, setPil_c] = useState("");
    const [pil_d, setPil_d] = useState("");
    const [pil_e, setPil_e] = useState("");
    let { id } = useParams();


    const selectMapelChanged = (e) => {
        setSelectMapel(e.target.value);
    }
   
    const tipeSoalChanged = (e) => {
        setTipeSoal(e.target.value);
    }
    
    const soalType = (e) => {
        setSoal(e.target.value)
    }
    const jawabanType = (e) => {
        setJawaban(e.target.value)
    }
    const pembahasanType = (e) => {
        setPembahasan(e.target.value)
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
    
    const pil_aChanged = (e) => {
        setPil_a(e.target.value)
    }
    const pil_bChanged = (e) => {
        setPil_b(e.target.value)
    }
    const pil_cChanged = (e) => {
        setPil_c(e.target.value)
    }
    const pil_dChanged = (e) => {
        setPil_d(e.target.value)
    }
    const pil_eChanged = (e) => {
        setPil_e(e.target.value)
    }
    
    const addData = (e) => {
        let data;
        if (tipeSoal === "essai") {
            data = {
                id: id,
                soal: soal,
                jawaban: jawaban,
                pembahasan: pembahasan,
                tipe_soal: tipeSoal,
                id_mapel: selectMapel,
                id_tingkat_kesulitan: selectTingkatKesulitan,
                id_kelas: selectKelas,
                id_bab_soal: selectbabSoal
            }
        } else {
            data = {
                id: id,
                soal: soal,
                pil_a: pil_a,
                pil_b: pil_b,
                pil_c: pil_c,
                pil_d: pil_d,
                pil_e: pil_e,
                jawaban: jawaban,
                pembahasan: pembahasan,
                tipe_soal: tipeSoal,
                id_mapel: selectMapel,
                id_tingkat_kesulitan: selectTingkatKesulitan,
                id_kelas: selectKelas,
                id_bab_soal: selectbabSoal
            }
            
        }
        axios.put('/bank_soal',data)
                .then(function (response) {
                    console.log(response.data);
                });
    }

    useEffect(() => {
        async function fetchdata() {
            
            axios.get('/bank_soal?id=' + id)
                .then(function (response) {
                    // setBankSoal(response.data);
                    // console.log(bankSoal);
                    const resSoal = response.data[0];
                     
                    axios.get('/mapel?id=' + resSoal.id_mapel)
                        .then(function (response) {
                            // setMapel(response.data);
                            setSelectMapel(response.data[0].id)
                        });
                    
                    axios.get('/kelas?id=' + resSoal.id_kelas)
                    .then(function (response) {
                        setKelas(response.data);
                        setSelectKelas(response.data[0].id)
                    });

                    axios.get('/tingkat_kesulitan?id=' + resSoal.id_tingkat_kesulitan)
                    .then(function (response) {
                        // setTingkatKesulitan(response.data);
                        setSelectTingkatKesulitan(response.data[0].id)
                    });

                    axios.get('/bab_soal?id=' + resSoal.id_bab_soal)
                        .then(function (response) {
                            // setBabSoal(response.data);
                            setSelectBabSoal(response.data[0].id);
                        });
                    
                    
                    setTipeSoal(resSoal.tipe_soal);
                    setSoal(resSoal.soal);
                    setJawaban(resSoal.jawaban);
                    setPembahasan(resSoal.pembahasan);

                });
            
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
            
              axios.get('/bab_soal?id_mapel=' + selectMapel)
                .then(function (response) {
                    setBabSoal(response.data);
            });
            
                
                
           
            
            
            
            
        }
        fetchdata();
        // if (selectMapel !== "") {
        //     axios.get('/bab_soal?id_mapel=' + selectMapel)
        //         .then(function (response) {
        //             setBabSoal(response.data);
        //     });
        // }
    }, []);

    return (
        <div className={styles.container}>
            {/* {"id = "+id}
            <br /> */}
            
            {/* <div className="App">
                <h2>Using CKEditor 5 build in React</h2>
                <CKEditor
                    editor={ClassicEditor}
                    // config={{
                    //     plugins: [MathType],
                    //      toolbar: [ 'bold', 'italic','MathType', 'ChemType', ]
                    // }}
                    data={soal}
                    onReady={ editor => {
                        // You can store the "editor" and use when it is needed.
                        console.log( 'Editor is ready to use!', editor );
                    } }
                    onChange={ ( event, editor ) => {
                        const data = editor.getData();
                        setSoal(data);
                        console.log( { event, editor, data } );
                    } }
                    onBlur={ ( event, editor ) => {
                        console.log( 'Blur.', editor );
                    } }
                    onFocus={ ( event, editor ) => {
                        console.log( 'Focus.', editor );
                    } }
                />
            </div> */}
            {/* <CKEditor
                editor={ClassicEditor}
                // config={{
                //         plugins: [MathType],
                //         toolbar: {
                //             items:['MathType','ChemType']
                //         }
                //     }}
                    // data="<p>Hello from CKEditor 5!</p>"
                    onReady={ editor => {
                        // You can store the "editor" and use when it is needed.
                        console.log( 'Editor is ready to use!', editor );
                    } }
                    onChange={ ( event, editor ) => {
                        const data = editor.getData();
                        console.log( { event, editor, data } );
                    } }
                    onBlur={ ( event, editor ) => {
                        console.log( 'Blur.', editor );
                    } }
                    onFocus={ ( event, editor ) => {
                        console.log( 'Focus.', editor );
                    } }
                /> */}
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
            <span>tipe soal : </span>
            <select value={tipeSoal} onChange={tipeSoalChanged}>
                <option value="essai">essai</option>
                <option value="pilgan">pilihan ganda</option>
            </select>
            <br />
            <span>soal : </span>
            <br/>
            <div className={styles.editor}>
            <textarea value={soal} onChange={soalType} name="" id="" cols="30" rows="10"></textarea>            
                <Latex>{soal}</Latex>
                {/* {ReactHtmlParser(soal)} */}
            </div>
            <br />
            {tipeSoal === "essai" ?
                <div></div>
            :
                <div className={styles.pilihan__ganda}>
                     <span>Pilihan A</span>
                     <div className={styles.editor}>
                    <textarea value={pil_a} onChange={e => {setPil_a(e.target.value)}} cols="30" rows="10"></textarea>
                    <Latex>{pil_a}</Latex>
                    </div>
                    <br />
                    <span>Pilihan B</span>
                     <div className={styles.editor}>
                    <textarea value={pil_b} onChange={e => {setPil_b(e.target.value)}} cols="30" rows="10"></textarea>
                    <Latex>{pil_b}</Latex>
                    </div>
                    <br />
                    <span>Pilihan C</span>
                     <div className={styles.editor}>
                    <textarea value={pil_c} onChange={e => {setPil_c(e.target.value)}} cols="30" rows="10"></textarea>
                    <Latex>{pil_c}</Latex>
                    </div>
                    <br />
                    <span>Pilihan D</span>
                    <div className={styles.editor}>
                    <textarea value={pil_d} onChange={e => {setPil_d(e.target.value)}} cols="30" rows="10"></textarea>
                    <Latex>{pil_d}</Latex>
                    </div>
                    <br />
                    <span>Pilihan E</span>
                    <div className={styles.editor}>
                    <textarea value={pil_e} onChange={e => {setPil_e(e.target.value)}} cols="30" rows="10"></textarea>
                    <Latex>{pil_e}</Latex>
                    </div>
                    <br/>
                </div>
            }
            <span>jawaban : </span>
            <br />
            {tipeSoal === "essai" ?
            <div className={styles.editor}>
                <textarea value={jawaban} onChange={jawabanType} name="" id="" cols="30" rows="10"></textarea>
                <Latex>{jawaban}</Latex>
            </div>
                :
            <div className={styles.jwb_pilgan}>
                <select value={jawaban} onChange={jawabanType}>
                    <option value=""></option>
                    <option value="a">a</option>
                    <option value="b">b</option>
                    <option value="c">c</option>
                    <option value="d">d</option>
                    <option value="e">e</option>
                </select>
            </div>   
            }
            <br />
            <span>pembahasan : </span>
            <br/>
            <div className={styles.editor}>
            <textarea value={pembahasan} onChange={pembahasanType} name="" id="" cols="30" rows="10"></textarea>
            <Latex>{pembahasan}</Latex>
            </div>
            <br />
            
            <Button title="Submit" link="/" onClick={addData} />
        </div>
    )
}

export default EditForm
