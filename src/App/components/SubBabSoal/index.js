import React,{ useEffect, useState } from 'react'
import styles from './styles.module.css'
import axios from '../../axios'
import Button from '../Button'
import Table from '../Table'
import { Draggable } from 'react-beautiful-dnd';
function SubBabSoal(props) {
    
    // const [linkTemp, setLinkTemp] = useState([]);
    const [panelCahnge, setPanelChange] = useState("main");
    const [dataSelectedNow, setDataSelectedNow] = useState(null);
    const [kategoriSoal, setKategoriSoal] = useState("");
    const [namaPaket, setNamaPaket] = useState("");
    const [searchInput, setSearchInput] = useState("");
    const [popUpTitle, setPopUpTitle] = useState("");
    const [deskripsi, setDeskripsi] = useState("");
    const [editButtonPressed, setEditButtonPressed] = useState(false);
    const [addButtonPressed, setAddButtonPressed] = useState(false);
    const [refreshRender, setRefreshRender] = useState(false);
    const [showTambahData, setShowTambahData] = useState(false);
    const [showInputWaktu, setShowInputWaktu] = useState(false);
    const [popUpMenu, setPopUpMenu] = useState(false);
    const [quizList, setQuizList] = useState([]);
    const [isiSoal, setIsiSoal] = useState([]);
    const [hasilSearchSoal, setHasilSearchSoal] = useState([]);
    const [detailSoal, setDetailSoal] = useState([]);
    const [jmlSoal, setJmlSoal] = useState(0);
    const [tahunSoal, setTahunSoal] = useState("");
    const [jam, setJam] = useState(0);
    const [menit, setMenit] = useState(0);
    const [detik, setDetik] = useState(0);
    const [idPaketQuiz, setIdPaketQuiz] = useState(0);
    const [mapel, setMapel] = useState([]);
    const [kelas, setKelas] = useState([]);
    const [babSoal, setBabSoal] = useState([]);
    const [subBabSoal, setSubBabSoal] = useState([]);
    const [konsepSoal, setKonsepSoal] = useState([]);
    const [utbk, setUtbk] = useState([]);
    const [tingkatKesulitan, setTingkatKesulitan] = useState([]);
    const [listData, setListData] = useState([
        // {'id':'bab_soal','desc':'Bab'},
        {'id':'sub_bab_soal','desc':'Sub Bab'},
        {'id':'konsep_soal','desc':'Konsep'},
        // {'id':'level_soal','desc':'Level'},
        {'id':'utbk','desc':'UTBK'},
    ]);
    const [selectMapel, setSelectMapel] = useState("");
    const [selectKelas, setSelectKelas] = useState("");
    const [selectbabSoal, setSelectBabSoal] = useState("");
    const [selectData, setSelectData] = useState("");
    const [selectSubBabSoal, setSelectSubBabSoal] = useState("");
    const [selectUtbk, setSelectUtbk] = useState("");
    const [selectKonsepSoal, setSelectKonsepSoal] = useState("");
    const [selectTingkatKesulitan, setSelectTingkatKesulitan] = useState("");
    const [th, setTh] = useState(null);
    const [td, setTd] = useState(null);
    const base_url = "http://103.161.184.70";

    const addData = () => {
        const data ={
            nomor : subBabSoal.length+1,
            deskripsi : deskripsi,
            id_bab:selectbabSoal
        }
        
        axios.post('/subBab_soal', data)
                .then(function (response) {
                    console.log(response);
                    if (response.status == 200) {
                        setPanelChange("main");
                        setShowTambahData(false);
                        setSelectData("");
                        setRefreshRender(true);
                    }
                });
    }

    const dataEdited = (id) => {
        const data={
            id: dataSelectedNow.id,
            nomor: dataSelectedNow.nomor,
            deskripsi : deskripsi,
            id_bab:selectbabSoal
        };

        
        axios.put('/SubBab_soal', data)
                .then(function (response) {
                    console.log(response);
                    if (response.status == 200) {
                        setPanelChange("main");
                        setDeskripsi("");
                        setSelectBabSoal("");
                        setShowTambahData(false);
                        setRefreshRender(true);
                    }
                });
    }
    const kategoriSoalChanged = (e) => {
        setKategoriSoal(e.target.value);
    }
    

    const selectUtbkChanged = (e) => {
        setSelectUtbk(e.target.value)
    }
    const selectSubBabSoalChanged = (e) => {
        setSelectSubBabSoal(e.target.value)
    }
    const selectKonsepSoalChanged = (e) => {
        setSelectKonsepSoal(e.target.value)
    }
    
    const tahunSoalChanged = (e) => {
        setTahunSoal(e.target.value)
    }

    const selectMapelChanged = (e) => {
        setSelectBabSoal("");
        setSelectMapel(e.target.value);
    }
  
    const kembali = () => {
        setPanelChange("main");
        setAddButtonPressed(true);
        setEditButtonPressed(false);
    }
   
    const tambahData = () => {
        setShowTambahData(true)
        setAddButtonPressed(true);
        setEditButtonPressed(false);
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

    const tambahDeskripsi = (title) => {
        setPopUpMenu(true);
     
        setPopUpTitle(title);
    }

    const getSubBabSoal = () => {
        axios.get('/subBab_soal')
            .then(function (response) {
                setSubBabSoal(response.data);
            });
    }

    const handleOnDragEnd = (result) => {
        let arr = subBabSoal;
         const old_index = result.source.index;
         const new_index = result.destination.index;
         
         if (new_index >= arr.length) {
            let k = new_index - arr.length + 1;
            while (k--) {
                arr.push(undefined);
            }
        }
         arr.splice(new_index, 0, arr.splice(old_index, 1)[0]);
        //  console.log("arr");
        //  console.log(arr);
         let dataTemp = [];
         for (let i = 0; i < arr.length; i++) {
            const childData = {
                id: arr[i].id,
                nomor: i+1,
            }
             dataTemp.push(childData);
             
         }
        
         const data = {
                data_nomor: dataTemp,
         }
        //  console.log(data);
         
         axios.put('/subBab_soal', data)
                .then(function (response) {
                    console.log(response);
                    if (response.status == 200) {
                        // setPanelChange("main");
                        setSubBabSoal([]);
                        getSubBabSoal();
                        // setPanelChange("isi soal");
                        // setHasilSearchSoal([]);
                        setRefreshRender(true);
                    }
                });
    }

    const getQuiz = () => {
        axios.get('/paket_soal')
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
        console.log(searchInput);
        console.log(selectbabSoal);
        console.log(selectSubBabSoal);
        console.log(selectKonsepSoal);
        console.log(kategoriSoal);
        console.log(selectTingkatKesulitan);
        console.log(tahunSoal);
        console.log(selectUtbk);
        axios.get("/bank_soal?cari="+searchInput+
        "&id_bab_soal="+selectbabSoal+
        "&id_sub_bab="+selectSubBabSoal+
        "&id_konsep="+selectKonsepSoal+
        "&kategori_soal="+kategoriSoal+
        "&id_tingkat_kesulitan="+selectTingkatKesulitan+
        "&tahun_soal="+tahunSoal+
        "&id_utbk="+selectUtbk
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
        
            setShowTambahData(false);
        
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
            axios.get('/bab_soal')
                .then(function (response) {
                    setBabSoal(response.data);
                });
            
            
            
            axios.get('/tingkat_kesulitan')
                .then(function (response) {
                    setTingkatKesulitan(response.data);
                });
            getSubBabSoal();
            axios.get('/konsep_soal')
            .then(function (response) {
                setKonsepSoal(response.data);
            });
            axios.get('/utbk')
                .then(function (response) {
                    setUtbk(response.data);
            });
             
            getQuiz();
        }
      
        fetchdata();
        if (refreshRender) {
            getQuiz();
            setRefreshRender(false);
         }
        if (addButtonPressed) {
            setDeskripsi("");
            setSelectBabSoal("");
            setAddButtonPressed(false);
         }
      
         if (selectMapel !== "") {
            axios.get('/bab_soal?id_mapel=' + selectMapel)
                .then(function (response) {
                    setBabSoal(response.data);
                });
        }

        // if (selectbabSoal !== "") {
        //     axios.get('/subBab_soal?id_bab=' + selectbabSoal)
        //         .then(function (response) {
        //             setSubBabSoal(response.data);
        //     });
        // }
        if (selectSubBabSoal !== "") {
            axios.get('/konsep_soal?id_sub_bab=' + selectSubBabSoal)
                .then(function (response) {
                    setKonsepSoal(response.data);
            });
        }
        if (kategoriSoal === "UTBK") {
            axios.get('/utbk')
                .then(function (response) {
                    setUtbk(response.data);
            });
        }
        
       
    }, [addButtonPressed,editButtonPressed,showTambahData,refreshRender,selectMapel,selectbabSoal,kategoriSoal]);

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

    const editData = (data) => {
       setEditButtonPressed(true);
       setDeskripsi(data.sub_bab);
       setSelectBabSoal(data.id_bab);
       setDataSelectedNow(data);
       setShowTambahData(true);
    }

    const hapusData = (dataTemp) => {
        let  data_delete = require('querystring');
        data_delete = data_delete.stringify({
            id: dataTemp.id
        });


        axios.delete('/SubBab_soal', {
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            data : data_delete
        }) .then(function (response) {
                    console.log(response);
                    if(response.status === 201){
                        setPanelChange("main");
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
        if (
            namaPaket !== "" ||
            jam !== 0 ||
            menit !== 0 ||
            detik !== 0 ||
            selectbabSoal !== 0 ||
            selectSubBabSoal !== 0 ||
            selectKonsepSoal !== 0 ||
            selectTingkatKesulitan !== 0 
        ) {
            const waktu = parseInt(jam) * 3600 + parseInt(menit) * 60 + parseInt(detik);
            const data = {
                deskripsi: namaPaket,
                waktu: waktu,
                // id_mapel: selectMapel,
                id_bab: selectbabSoal,
                id_sub_bab: selectSubBabSoal,
                id_konsep: selectKonsepSoal,
                // id_kelas: selectKelas,
                id_level: selectTingkatKesulitan,
                id_utbk: selectUtbk,
                tipe: kategoriSoal,
            }
            // console.log(data);
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
                {/* <h1>Quiz { (quizList.length + 1).toString()}</h1> */}
                <input type="text" placeholder="Nama Paket" onChange={(e) => { setNamaPaket(e.target.value) }}/>
                <br/>
                {/* <input type="text" placeholder="Judul Video" />
                <br/>
                <br/> */}
                <span>Waktu : </span>
                <input type="number" min="0" placeholder="jam" onChange={(e) => { setJam(e.target.value) }} />
                <input type="number" min="0" placeholder="menit" onChange={(e) => { setMenit(e.target.value) }} />
                <input type="number" min="0" placeholder="detik" onChange={(e) => { setDetik(e.target.value) }} />
                <br />
                <br />
                {/* <span>mata pelajaran </span>
                <select value={selectMapel} onChange={selectMapelChanged}>   
                <option value="" disabled ></option>
                    {mapel.map(item => (
                    <option key={item.id} value={item.id}>{item.deskripsi}</option>
                    ))}
                </select> */}
            
            {/* <br/>
            <span>kelas </span>
            <select value={selectKelas} onChange={selectKelasChanged}>
                <option value="" disabled ></option>
                {kelas.map(item => (
                   <option key={item.id} value={item.id}>{item.deskripsi}</option>
                ))}
            </select> */}

<span>Kategori Soal</span>
            <select value={kategoriSoal} onChange={kategoriSoalChanged}>
                <option value="" disabled></option>
                <option value="UTBK">UTBK</option>
                <option value="BAB">BAB</option>
            </select>
            <br/>

            {kategoriSoal == "BAB"?
            <>
            <br/>
            <span>Bab </span>
            <select value={selectbabSoal} onChange={selectBabSoalChanged}>
                <option value={0} disabled ></option>
                {babSoal.map(item => (
                   <option key={item.id} value={item.id}>{item.deskripsi}</option>
                ))}
            </select>
            <br/>
            <span>Sub Bab </span>
            <select value={selectSubBabSoal} onChange={selectSubBabSoalChanged}>
                <option value={0} disabled ></option>
                {subBabSoal.map(item => (
                   <option key={item.id} value={item.id}>{item.deskripsi}</option>
                ))}
            </select>
            <br/>
            <span>Konsep </span>
            <select value={selectKonsepSoal} onChange={selectKonsepSoalChanged}>
                <option value={0} disabled ></option>
                {konsepSoal.map(item => (
                   <option key={item.id} value={item.id}>{item.deskripsi}</option>
                ))}
            </select>
            <br/>
            <span>Level Soal </span>
            <select value={selectTingkatKesulitan} onChange={selectTingkatKesulitanChanged}>
                <option value={0} disabled ></option>
                {tingkatKesulitan.map(item => (
                   <option key={item.id} value={item.id}>{item.deskripsi}</option>
                ))}
            </select>
            <br/>
            <span>Tahun Soal</span>
            <input type="date" value={tahunSoal} onChange={tahunSoalChanged} />
            <br/>
            </>:
           kategoriSoal == "UTBK"?
           <>
            <span>UTBK </span>
            <select value={selectUtbk} onChange={selectUtbkChanged}>
                <option value="" disabled ></option>
                {utbk.map(item => (
                   <option key={item.id} value={item.id}>{item.deskripsi}</option>
                ))}
            </select>
            <button onClick={(title) => tambahDeskripsi("UTBK")}>+</button>
            <br/>
            <span>Tahun Soal</span>
            <input type="date" value={tahunSoal} onChange={tahunSoalChanged} />
            <br/>
           </>:
           <></>
            }
            
            
        
           
            <br />
                <Button link="" title="cancel" onClick={() => { setPanelChange("main") }} />
                <Button link="" title="save" onClick={() => save()} />
            </div>
        </div>
    
    const mainPanel =
        <>
            {/* <h1></h1> */}
            <Table
                dropID = {"drop-1"}
                handleOnDragEnd={handleOnDragEnd}
                thList={["no", "Deskripsi","Bab", "Action"]}
                tdList={subBabSoal.map((item,index) => (
                    <Draggable key={item.id} draggableId={item.id} index={index}>
                        {(provided, snapshot) => (
                            <tr
                                ref={provided.innerRef}
                                {...provided.draggableProps}
                                {...provided.dragHandleProps}
                            >
                                <td>{item.nomor}</td>
                                <td>{item.sub_bab}</td>
                                <td>{item.bab}</td>
                                <td><a href="#0" onClick={()=>editData(item)}>edit</a> || <a href="#0" onClick={()=>hapusData(item)}>hapus</a></td>
                            </tr>
                    )}
                    </Draggable>
                    ))}
            />
            <br/>
             <Button link="" title="Tambah Data" onClick={() => tambahData()} />
           
           
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
            <Button link="" title="Kembali" onClick={() => kembali()} />
            <Button link="" title="Tambah Soal" onClick={() => { setShowTambahData(true); }} />
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
    
    const panelTambahData =
        <>
            <h1>Tambah Data</h1>
            <input value={deskripsi} type="text" placeholder="Deskripsi" onChange={(e) => { setDeskripsi(e.target.value) }} />
            <br/>
            <span>Bab </span>
            <select value={selectbabSoal} onChange={selectBabSoalChanged}>
                <option value={""} disabled ></option>
                {babSoal.map(item => (
                   <option key={item.id} value={item.id}>{item.deskripsi}</option>
                ))}
            </select>
            <br/>
           
            <Button link="" title="Submit" onClick={editButtonPressed?()=>dataEdited(): ()=>addData()} />
            <Button link="" title="Kembali" onClick={()=>{setShowTambahData(false)}} />
        </>
    



   

    return (
        <>
         <div className={styles.container}>
            {panelCahnge === "main" ? mainPanel : null}
            {panelCahnge === "add quiz" ? panelInputReview : null}
            {panelCahnge === "isi soal" ? panelIsiSoal() : null}
            {panelCahnge === "detail soal" ? panelDetailSoal : null}
        </div>
            {showTambahData ?
                <div className={styles.tambah_soal}>
                    <div className={styles.layer1}>
                        {panelTambahData}
                    </div>
                </div> :
                null
            }
        </>
           
    )
}

export default SubBabSoal
