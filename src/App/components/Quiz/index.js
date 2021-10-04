import React,{ useEffect, useState } from 'react'
import styles from './styles.module.css'
import axios from '../../axios'
import Button from '../../components/Button'
import Table from '../../components/Table'
import { Draggable } from 'react-beautiful-dnd';
function Quiz(props) {
    
    // const [linkTemp, setLinkTemp] = useState([]);
    const [panelCahnge, setPanelChange] = useState("main");
    const [searchInput, setSearchInput] = useState("");
    const [refreshRender, setRefreshRender] = useState(false);
    const [showTambahSoal, setShowTambahSoal] = useState(false);
    const [showInputWaktu, setShowInputWaktu] = useState(false);
    const [quizList, setQuizList] = useState([]);
    const [isiSoal, setIsiSoal] = useState([]);
    const [hasilSearchSoal, setHasilSearchSoal] = useState([]);
    const [detailSoal, setDetailSoal] = useState([]);
    const [jmlSoal, setJmlSoal] = useState(0);
    const [jam, setJam] = useState(0);
    const [menit, setMenit] = useState(0);
    const [detik, setDetik] = useState(0);
    const [idPaketQuiz, setIdPaketQuiz] = useState(0);
    const [mapel, setMapel] = useState([]);
    const [kelas, setKelas] = useState([]);
    const [babSoal, setBabSoal] = useState([]);
    const [tingkatKesulitan, setTingkatKesulitan] = useState([]);
    const [selectMapel, setSelectMapel] = useState("");
    const [selectKelas, setSelectKelas] = useState("");
    const [selectbabSoal, setSelectBabSoal] = useState("");
    const [selectTingkatKesulitan, setSelectTingkatKesulitan] = useState("");
    const base_url = "http://103.161.184.70";

    const selectMapelChanged = (e) => {
        setSelectBabSoal("");
        setSelectMapel(e.target.value);
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

     const handleOnDragEnd = (result) => {
        let arr = isiSoal;
         const old_index = result.source.index;
         const new_index = result.destination.index;
         
         if (new_index >= arr.length) {
            let k = new_index - arr.length + 1;
            while (k--) {
                arr.push(undefined);
            }
        }
         arr.splice(new_index, 0, arr.splice(old_index, 1)[0]);
         console.log("arr");
         console.log(arr);
         let dataTemp = [];
         for (let i = 0; i < arr.length; i++) {
            const childData = {
                id: arr[i].id,
                no_soal: i+1,
            }
             dataTemp.push(childData);
             
         }
        
         const data = {
                data_nomor: dataTemp,
         }
         
         axios.put('/isi_paket_soal', data)
                .then(function (response) {
                    console.log(response);
                    if (response.status == 200) {
                        setPanelChange("main");
                        setIsiSoal([]);
                        getIsiSoal(idPaketQuiz);
                        setPanelChange("isi soal");
                        setHasilSearchSoal([]);
                        setRefreshRender(true);
                    }
                });
    }

    const getQuiz = () => {
        axios.get('/paket_soal?tipe=quiz')
            .then(function (response) {
                setQuizList(response.data);
            });
    }
    
    const getIsiSoal = (idQuiz) => {
        axios.get(`/isi_paket_soal?tipe=quiz&id=${idQuiz}`)
            .then(function (response) {
                setIsiSoal(response.data);
            });
        setIdPaketQuiz(idQuiz);
    }
    
    const searchSoal = () => {
        const quizFilterTemp =  quizList.filter((a) => {
            return a.id === idPaketQuiz;
        })
        axios.get("/bank_soal?cari="+searchInput+
        "&id_mapel="+quizFilterTemp[0].id_mapel+
        "&id_kelas="+quizFilterTemp[0].id_kelas+
        "&id_bab_soal="+quizFilterTemp[0].id_bab+
        "&id_tingkat_kesulitan="+quizFilterTemp[0].id_level
        )
            .then(function (response) {
                setHasilSearchSoal(response.data);
            });
        setRefreshRender(true);
    }
    
    const TambahSoal = (idSoal) => {
        

          const data_isi_paket_soal = {
            id_paket: idPaketQuiz,
            id_tryout_part: 0,
            id_soal: idSoal,
            no_soal: quizList.length,
        }
        
        const quizFilterTemp =  quizList.filter((a) => {
            return a.id === idPaketQuiz;
        })

        
        const data_paket_soal = {
            id: quizFilterTemp[0].id,
            jml_soal: parseInt(quizFilterTemp[0].jml_soal) + 1,
            update_jml_soal: "true",
        }
        
        axios.post('/isi_paket_soal', data_isi_paket_soal)
                .then(function (response) {
                    console.log(response);
                    if (response.status == 200) {
                        setPanelChange("main");
                        setIsiSoal([]);
                        getIsiSoal(idPaketQuiz);
                        setPanelChange("isi soal");
                        setHasilSearchSoal([]);
                        setRefreshRender(true);
                    }
                });
        
        
            
        axios.put('/paket_soal', data_paket_soal)
                .then(function (response) {
                    console.log(response);
                });
        
            setShowTambahSoal(false);
        
    }

    const hapusSoal = (idIsiSoal) => {

        let  data_isi_paket_soal = require('querystring');
        data_isi_paket_soal = data_isi_paket_soal.stringify({
            id: idIsiSoal
        });

         const data_paket_soal = {
            id: quizList[0].id,
            jml_soal: parseInt(quizList[0].jml_soal) - 1,
            update_jml_soal: "true",
        }


        axios.delete('/isi_paket_soal', {
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            data : data_isi_paket_soal
        })
                .then(function (response) {
                    console.log(response);
                    if(response.status === 201){
                        setPanelChange("main");
                        setIsiSoal([]);
                        getIsiSoal(idPaketQuiz);
                        setPanelChange("isi soal");
                        setRefreshRender(true);
                    }
                });
        
        axios.put('/paket_soal', data_paket_soal)
            .then(function (response) {
                console.log(response);
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
             
            getQuiz();
        }
      
        fetchdata();
        if (refreshRender) {
            getQuiz();
            setRefreshRender(false);
         }
         if (selectMapel !== "") {
            axios.get('/bab_soal?id_mapel=' + selectMapel)
                .then(function (response) {
                    setBabSoal(response.data);
                });
        }
        
       
    }, [refreshRender,selectMapel]);

/// action function


    const editPaket = (waktu) => {
        let sisaWaktu = waktu;
        setJam(parseInt(sisaWaktu/3600));
        sisaWaktu = sisaWaktu % 3600;
        setMenit(parseInt(sisaWaktu/60));
        sisaWaktu = sisaWaktu%60;
        setDetik(sisaWaktu);

        const quizFilterTemp = quizList.filter((a) => {
            return a.id === idPaketQuiz;
        })


        setSelectMapel(quizFilterTemp[0].id_mapel);
        setSelectBabSoal(quizFilterTemp[0].id_bab);
        setSelectKelas(quizFilterTemp[0].id_kelas);
        setSelectTingkatKesulitan(quizFilterTemp[0].id_level);
        setRefreshRender(true);


        setShowInputWaktu(!showInputWaktu);

    }
    
    const updatePaket = () => {
        const waktu = parseInt(jam) * 3600 + parseInt(menit) * 60 + parseInt(detik);
          const quizFilterTemp =  quizList.filter((a) => {
            return a.id === idPaketQuiz;
         })
        const data_paket_soal = {
            id: quizFilterTemp[0].id,
            id_mapel: selectMapel,
            id_bab: selectbabSoal,
            id_kelas: selectKelas,
            id_level: selectTingkatKesulitan,
            waktu: waktu,
        }
            
        axios.put('/paket_soal', data_paket_soal)
                .then(function (response) {
                    console.log(response);
                });
        setRefreshRender(true);
        setShowInputWaktu(!showInputWaktu);

    }
    
    const lihatDetaillSoal = (idSoal) => {
        const soal = isiSoal.filter((a) => {
            return a.id === idSoal;
        })

        setDetailSoal(soal);
        setPanelChange("detail soal")
        setRefreshRender(true);
    }

    const editQuiz = (idQuiz) => {
        setIsiSoal([]);
        getIsiSoal(idQuiz);
        //  const quizFilterTemp =  quizList.filter((a) => {
        //     return a.id === idQuiz;
        //  })
        // setQuizFilter(quizFilterTemp);
        setPanelChange("isi soal");
    }

    const hapusQuiz = (idQuiz) => {
      let  data_delete = require('querystring');
        data_delete = data_delete.stringify({
            id: idQuiz
        });


        axios.delete('/paket_soal', {
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            data : data_delete
        }) .then(function (response) {
                    console.log(response);
                    if(response.status === 201){
                        setRefreshRender(true);
                    }
                });
    }


    const formatWaktu = (waktu) => {
        let sisaWaktu = waktu;
        let result = "";
        const jams = sisaWaktu/3600;
        sisaWaktu = sisaWaktu % 3600;
        const menits = sisaWaktu/60;
        sisaWaktu = sisaWaktu%60;
        const detiks = sisaWaktu;
        
        
        if (parseInt(jams) > 0) {
            result += parseInt(jams) + " Jam ";
        }
        if (parseInt(menits) > 0) {
            result += parseInt(menits) + " Menit ";
        }
        if (parseInt(detiks) > 0) {
            result += parseInt(detiks) + " Detik";
        }

        // result = parseInt(jams) + "Jam" + parseInt(menits) + "Menit" + parseInt(detiks) + "Detik";

        return result.toString();
    }

    
    const save = () => {
        if (jam !== 0 ||
            menit !== 0 ||
            detik !== 0 ||
            selectMapel !== 0 ||
            selectbabSoal !== 0 ||
            selectKelas !== 0 ||
            selectTingkatKesulitan !== 0 
        ) {
            const waktu = parseInt(jam) * 3600 + parseInt(menit) * 60 + parseInt(detik);
            const data = {
                deskripsi: "Quiz "+(quizList.length + 1).toString(),
                waktu: waktu,
                id_mapel: selectMapel,
                id_bab: selectbabSoal,
                id_kelas: selectKelas,
                id_level: selectTingkatKesulitan,
                tipe: "quiz",
            }
            axios.post('/paket_soal', data)
                .then(function (response) {
                    console.log(response);
                });
            setRefreshRender(true);
            setPanelChange("main");
            setJam(0);
            setMenit(0);
            setDetik(0);
        } else {
            alert("isi semua data")
        }
    }
    
    // panel components
    const panelInputReview =
        <div className={styles.panel_input_review}>
            <div className={styles.panel_input_review_layer_inside}>
                <h1>Quiz { (quizList.length + 1).toString()}</h1>
                {/* <input type="text" placeholder="Judul Video" />
                <br/>
                <br/> */}
                <span>Waktu : </span>
                <input type="number" min="0" placeholder="jam" onChange={(e) => { setJam(e.target.value) }} />
                <input type="number" min="0" placeholder="menit" onChange={(e) => { setMenit(e.target.value) }} />
                <input type="number" min="0" placeholder="detik" onChange={(e) => { setDetik(e.target.value) }} />
                <br />
                <br />
                <span>mata pelajaran </span>
            <select value={selectMapel} onChange={selectMapelChanged}>   
            <option value="" disabled ></option>
            {/* <input type="text" name="" id=""/> */}
                {mapel.map(item => (
                   <option key={item.id} value={item.id}>{item.deskripsi}</option>
                ))}
                {/* <option value="" onClick={tambahDeskripsi}>+</option> */}
            </select>
            
            <br/>
            <span>kelas </span>
            <select value={selectKelas} onChange={selectKelasChanged}>
                <option value="" disabled ></option>
                {kelas.map(item => (
                   <option key={item.id} value={item.id}>{item.deskripsi}</option>
                ))}
            </select>
            
            <br/>
            <span>Bab </span>
            <select value={selectbabSoal} onChange={selectBabSoalChanged}>
                <option value="" disabled ></option>
                {babSoal.map(item => (
                   <option key={item.id} value={item.id}>{item.deskripsi}</option>
                ))}
            </select>
            
                <br />
                
                <span>tingkat kesulitan </span>
                <select value={selectTingkatKesulitan} onChange={selectTingkatKesulitanChanged}>
                    <option value="" disabled ></option>
                    {tingkatKesulitan.map(item => (
                    <option key={item.id} value={item.id}>{item.deskripsi}</option>
                    ))}
                </select>
               
            
            <br/>
           
            <br />
                <Button link="" title="cancel" onClick={() => { setPanelChange("main") }} />
                <Button link="" title="save" onClick={() => save()} />
            </div>
        </div>
    
    const mainPanel =
        <>
            <h1>Quiz</h1>
            <Button link="" title="Buat Quiz" onClick={() => { setPanelChange("add quiz") }} />
            <Table
                dropID = {"drop-1"}
                thList={["no", "judul", "Deskripsi", "Action"]}
                tdList={quizList.map((item,index) => (
                    <tr key={item.id}>
                        <td>{index+1}</td>
                        <td>{item.deskripsi}</td>
                        <td>{item.jml_soal +" Soal ,"+ formatWaktu(item.waktu)}</td>
                        <td><a href="#0" onClick={()=>editQuiz(item.id)}>edit</a> || <a href="#0" onClick={()=>hapusQuiz(item.id)}>hapus</a></td>
                    </tr>
                    ))}
            />
        </>
    
    const panelIsiSoal = () => {
          const quizFilterTemp =  quizList.filter((a) => {
            return a.id === idPaketQuiz;
         })
        return(<>
            <h1>{quizFilterTemp[0].deskripsi }</h1>
            {!showInputWaktu ?
                <>
                    <span>Waktu : { formatWaktu(quizFilterTemp[0].waktu) }</span>
                    <br/>
                    <span>Mata pelajaran : { quizFilterTemp[0].mapel }</span>
                    <br/>
                    <span>Kelas : { quizFilterTemp[0].kelas }</span>
                    <br/>
                    <span>Bab : { quizFilterTemp[0].bab }</span>
                    <br/>
                    <span>Level : { quizFilterTemp[0].level }</span>
                    <br/>
                    <button onClick={() => editPaket(quizFilterTemp[0].waktu)} >edit</button>
                </>
                :
                <>
                    <span>Waktu : </span>
                    <input type="number" min="0" placeholder="jam" value={jam} onChange={(e) => { setJam(e.target.value) }} />
                    <input type="number" min="0" placeholder="menit" value={menit} onChange={(e) => { setMenit(e.target.value) }} />
                    <input type="number" min="0" placeholder="detik" value={detik} onChange={(e) => { setDetik(e.target.value) }} />
                    <br/>
                    <br/>
                    <span>mata pelajaran </span>
                    <select value={selectMapel} onChange={selectMapelChanged}>   
                    <option value="" disabled ></option>
                        {mapel.map(item => (
                        <option key={item.id} value={item.id}>{item.deskripsi}</option>
                        ))}
                    </select>
                    <br/>
                    <br/>
                    <span>kelas </span>
                    <select value={selectKelas} onChange={selectKelasChanged}>
                        <option value="" disabled ></option>
                        {kelas.map(item => (
                        <option key={item.id} value={item.id}>{item.deskripsi}</option>
                        ))}
                    </select>
                    <br/>
                    <br/>
                    <span>Bab </span>
                    <select value={selectbabSoal} onChange={selectBabSoalChanged}>
                        <option value="" disabled ></option>
                        {babSoal.map(item => (
                        <option key={item.id} value={item.id}>{item.deskripsi}</option>
                        ))}
                    </select>        
                    <br />
                    <br />
                    <span>Level </span>
                    <select value={selectTingkatKesulitan} onChange={selectTingkatKesulitanChanged}>
                        <option value="" disabled ></option>
                        {tingkatKesulitan.map(item => (
                        <option key={item.id} value={item.id}>{item.deskripsi}</option>
                        ))}
                    </select>
                    <br/>
                    <button onClick={() => { setShowInputWaktu(!showInputWaktu) }} >cancel</button>
                    <button onClick={()=>updatePaket()} >save</button>
                </>
            }    
            <br />
            <br />
          
        
            <Table
                dropID = {"drop-1"}
                handleOnDragEnd={handleOnDragEnd}
                thList={["no", "soal", "Action"]}
                tdList={isiSoal.map((item, index) => (
                    <Draggable key={item.id} draggableId={item.id} index={index}>
                        {(provided, snapshot) => (
                            <tr
                                ref={provided.innerRef}
                                {...provided.draggableProps}
                                {...provided.dragHandleProps}
                            >
                                <td>{index + 1}</td>
                                <td>{item.soal.substring(0, 100)} . . .</td>
                                <td><a href="#0" onClick={() => lihatDetaillSoal(item.id)}>Lihat Detail</a>||<a href="#0" onClick={() => hapusSoal(item.id)}>hapus</a></td>
                            </tr>
                    )}
                    </Draggable>
                ))}
            />
            <Button link="" title="Kembali" onClick={() => { setPanelChange("main") }} />
            <Button link="" title="Tambah Soal" onClick={() => { setShowTambahSoal(true) }} />
        </>)
    }
    
    const panelDetailSoal = 
        <>
            <h1>Detail Soal</h1>
            {detailSoal.map((item) => (
                <div key={item.id}>
                    <p>{item.soal}</p>
                    <p>{item.pil_a}</p>
                    <p>{item.pil_b}</p>
                    <p>{item.pil_c}</p>
                    <p>{item.pil_d}</p>
                    <p>{item.pil_e}</p>
                    <p>{item.jawaban}</p>
                    <p>{item.pembahasan}</p>
                    <Button link="" title="Kembali" onClick={()=>{setPanelChange("isi soal")}} />
                </div>
            ))}
        </>
    
    const panelTambahSoal =
        <>
            <h1>Tambah Soal</h1>
            <input type="text" placeholder="Cari Soal" onChange={(e) => { setSearchInput(e.target.value) }} /> <button onClick={() => searchSoal()}>Cari</button>
            <Table
                dropID = {"drop-1"}
                thList={["no", "Hasil Pencarian", ""]}
                tdList={hasilSearchSoal.map((item,index) => (
                    <tr key={item.id}>
                        <td>{index+1}</td>
                        <td>{item.soal.substring(0,100)} . . .</td>
                        <td><a href="#0" onClick={()=>TambahSoal(item.id)}>tambahkan</a></td>
                    </tr>
                    ))}
            />
            <Button link="" title="Kembali" onClick={()=>{setShowTambahSoal(false)}} />
        </>
    



   

    return (
        <>
         <div className={styles.container}>
            {panelCahnge === "main" ? mainPanel : null}
            {panelCahnge === "add quiz" ? panelInputReview : null}
            {panelCahnge === "isi soal" ? panelIsiSoal() : null}
            {panelCahnge === "detail soal" ? panelDetailSoal : null}
        </div>
            {showTambahSoal ?
                <div className={styles.tambah_soal}>
                    <div className={styles.layer1}>
                        {panelTambahSoal}
                    </div>
                </div> :
                null
            }
        </>
           
    )
}

export default Quiz
