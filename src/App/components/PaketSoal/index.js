import React,{ useEffect, useState } from 'react'
import styles from './styles.module.css'
import axios from '../../axios'
import Button from '../Button'
import Table from '../Table'
import { Draggable } from 'react-beautiful-dnd';
function PaketSoal(props) {
    
    // const [linkTemp, setLinkTemp] = useState([]);
    const [panelCahnge, setPanelChange] = useState("main");
    const [kategoriSoal, setKategoriSoal] = useState("");
    const [namaPaket, setNamaPaket] = useState("");
    const [searchInput, setSearchInput] = useState("");
    const [popUpTitle, setPopUpTitle] = useState("");
    const [refreshRender, setRefreshRender] = useState(false);
    const [showTambahSoal, setShowTambahSoal] = useState(false);
    const [tambahSoalClicked, setTambahSoalClicked] = useState(false);
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
    const [selectMapel, setSelectMapel] = useState("");
    const [selectKelas, setSelectKelas] = useState("");
    const [selectbabSoal, setSelectBabSoal] = useState("");
    const [selectSubBabSoal, setSelectSubBabSoal] = useState("");
    const [selectUtbk, setSelectUtbk] = useState("");
    const [selectKonsepSoal, setSelectKonsepSoal] = useState("");
    const [selectTingkatKesulitan, setSelectTingkatKesulitan] = useState("");
    const base_url = "http://103.161.184.70";

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

     const handleOnDragEnd = (result) => {
        let arr = quizList;
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
         
         axios.put('/paket_soal', data)
                .then(function (response) {
                    console.log(response);
                    if (response.status == 200) {
                        // setPanelChange("main");
                        setQuizList([]);
                        getQuiz();
                        // setPanelChange("isi soal");
                        // setHasilSearchSoal([]);
                        setRefreshRender(true);
                    }
                });
    }
     
    const handleOnDragEndIsiPaketSoal = (result) => {
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
        //  console.log("arr");
        //  console.log(arr);
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

        //  console.log(data);
         
         axios.put('/isi_paket_soal', data)
                .then(function (response) {
                    console.log(response);
                    if (response.status == 200) {
                        // setPanelChange("main");
                        setIsiSoal([]);
                        getIsiSoal(idPaketQuiz);
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
 
    const tambahSoal = () => {
        setShowTambahSoal(true)
        setTambahSoalClicked(true);
    }
    
    const searchSoal = () => {
        const quizFilterTemp =  quizList.filter((a) => {
            return a.id === idPaketQuiz;
        })
        // console.log(searchInput);
        // console.log(selectbabSoal);
        // console.log(selectSubBabSoal);
        // console.log(selectKonsepSoal);
        // console.log(kategoriSoal);
        // console.log(selectTingkatKesulitan);
        // console.log(tahunSoal);
        // console.log(selectUtbk);
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
            nomor: quizFilterTemp[0].nomor,
            deskripsi: quizFilterTemp[0].deskripsi,
            waktu: quizFilterTemp[0].waktu,
            id_bab: quizFilterTemp[0].id_bab,
            id_sub_bab: quizFilterTemp[0].id_sub_bab,
            id_konsep: quizFilterTemp[0].id_konsep,
            id_level: quizFilterTemp[0].id_level,
            id_utbk: quizFilterTemp[0].id_utbk,
            tipe: quizFilterTemp[0].tipe,
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

        const quizFilterTemp =  quizList.filter((a) => {
            return a.id === idPaketQuiz;
        })

         const data_paket_soal = {
            id: quizFilterTemp[0].id,
            nomor: quizFilterTemp[0].nomor,
            deskripsi: quizFilterTemp[0].deskripsi,
            waktu: quizFilterTemp[0].waktu,
            id_bab: quizFilterTemp[0].id_bab,
            id_sub_bab: quizFilterTemp[0].id_sub_bab,
            id_konsep: quizFilterTemp[0].id_konsep,
            id_level: quizFilterTemp[0].id_level,
            id_utbk: quizFilterTemp[0].id_utbk,
            tipe: quizFilterTemp[0].tipe,
            jml_soal: parseInt(quizFilterTemp[0].jml_soal) - 1,
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
             
            getQuiz();
        }
      
        fetchdata();
        if (tambahSoalClicked) {
           setSelectBabSoal("");
           setSelectSubBabSoal("")
           setSelectKonsepSoal("");
           setSelectTingkatKesulitan("");
           setKategoriSoal("");
           setSelectUtbk("");
           setTambahSoalClicked(false);
         }
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

        if (selectbabSoal !== "") {
            axios.get('/subBab_soal?id_bab=' + selectbabSoal)
                .then(function (response) {
                    setSubBabSoal(response.data);
            });
        }
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
       
        
        
       
    }, [tambahSoalClicked,refreshRender,selectMapel,selectbabSoal,kategoriSoal]);

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


        // setSelectMapel(quizFilterTemp[0].id_mapel);
        // setSelectBabSoal(quizFilterTemp[0].id_bab);
        // setSelectKelas(quizFilterTemp[0].id_kelas);
        setKategoriSoal(quizFilterTemp[0].tipe);
        setSelectSubBabSoal(quizFilterTemp[0].id_sub_bab);
        setSelectUtbk(quizFilterTemp[0].id_utbk);
        setSelectTingkatKesulitan(quizFilterTemp[0].id_level);
        setRefreshRender(true);

        axios.get('/subBab_soal')
        .then(function (response) {
            setSubBabSoal(response.data);
        });


        setShowInputWaktu(!showInputWaktu);

    }
    
    const updatePaket = () => {
        let data;
        const waktu = parseInt(jam) * 3600 + parseInt(menit) * 60 + parseInt(detik);
          const quizFilterTemp =  quizList.filter((a) => {
            return a.id === idPaketQuiz;
         })
      if(quizFilterTemp[0].tipe === "UTBK"){
        data = {
            id: quizFilterTemp[0].id,
            deskripsi: quizFilterTemp[0].deskripsi,
            tipe: quizFilterTemp[0].tipe,
            id_utbk:selectUtbk,
            waktu: waktu,
        }
      }else{
        data = {
            id: quizFilterTemp[0].id,
            deskripsi: quizFilterTemp[0].deskripsi,
            tipe: quizFilterTemp[0].tipe,
            id_sub_bab:selectSubBabSoal,
            id_level: selectTingkatKesulitan,
            waktu: waktu,
        }
      }
            
        axios.put('/paket_soal', data)
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
        if (
            namaPaket !== "" ||
            jam !== 0 ||
            menit !== 0 ||
            detik !== 0 ||
            selectSubBabSoal !== "" ||
            selectKonsepSoal !== "" ||
            selectTingkatKesulitan !== ""
        ) {
            const waktu = parseInt(jam) * 3600 + parseInt(menit) * 60 + parseInt(detik);
            const data = {
                nomor: quizList.length+1,
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
                <option value={""} disabled ></option>
                {babSoal.map(item => (
                   <option key={item.id} value={item.id}>{item.deskripsi}</option>
                ))}
            </select>
            <br/>
            <span>Sub Bab </span>
            <select value={selectSubBabSoal} onChange={selectSubBabSoalChanged}>
                <option value={""} disabled ></option>
                {subBabSoal.map(item => (
                   <option key={item.id} value={item.id}>{item.sub_bab}</option>
                ))}
            </select>
            <br/>
            <span>Konsep </span>
            <select value={selectKonsepSoal} onChange={selectKonsepSoalChanged}>
                <option value={""} disabled ></option>
                {konsepSoal.map(item => (
                   <option key={item.id} value={item.id}>{item.deskripsi}</option>
                ))}
            </select>
            <br/>
            <span>Level Soal </span>
            <select value={selectTingkatKesulitan} onChange={selectTingkatKesulitanChanged}>
                <option value={""} disabled ></option>
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
            <h1>Paket Soal</h1>
            <Button link="" title="Buat Paket" onClick={() => { setPanelChange("add quiz") }} />
            <Table
                dropID = {"drop-1"}
                handleOnDragEnd={handleOnDragEnd}
                thList={["no", "judul","Kategori", "Deskripsi", "Action"]}
                tdList={quizList.map((item,index) => (
                    <Draggable key={item.id} draggableId={item.id} index={index}>
                        {(provided, snapshot) => (
                            <tr
                                ref={provided.innerRef}
                                {...provided.draggableProps}
                                {...provided.dragHandleProps}
                            >
                                <td>{item.nomor}</td>
                                <td>{item.deskripsi}</td>
                                <td>{item.tipe}</td>
                                <td>{item.jml_soal +" Soal ,"+ formatWaktu(item.waktu)}</td>
                                <td><a href="#0" onClick={()=>editQuiz(item.id)}>edit</a> || <a href="#0" onClick={()=>hapusQuiz(item.id)}>hapus</a></td>
                            </tr>
                    )}
                    </Draggable>
                   
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
                    {quizFilterTemp[0].tipe == "UTBK"?
                    <>
                    <span>Kategori : { quizFilterTemp[0].id_utbk }</span>
                    <br/>
                    </>
                    :
                    <>
                    <span>Level : { quizFilterTemp[0].id_level }</span>
                    <br/>
                    <span>Sub Bab : { quizFilterTemp[0].id_sub_bab }</span>
                    <br/>
                    </>}
                    {/* <span>Mata pelajaran : { quizFilterTemp[0].mapel }</span>
                    <br/>
                    <span>Kelas : { quizFilterTemp[0].kelas }</span>
                    <br/>
                    <span>Bab : { quizFilterTemp[0].bab }</span>
                    <br/> */}
                    {/* <span>Level : { quizFilterTemp[0].id_level }</span> */}
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
                    {quizFilterTemp[0].tipe == "UTBK"?
                    <>
                    <span>UTBK </span>
                    <select value={selectUtbk} onChange={selectUtbkChanged}>
                        <option value="" disabled ></option>
                        {utbk.map(item => (
                        <option key={item.id} value={item.id}>{item.deskripsi}</option>
                        ))}
                    </select>
                    <br/>
                    </>
                    :
                    <>
                    <span>Level </span>
                    <select value={selectTingkatKesulitan} onChange={selectTingkatKesulitanChanged}>
                        <option value="" disabled ></option>
                        {tingkatKesulitan.map(item => (
                        <option key={item.id} value={item.id}>{item.deskripsi}</option>
                        ))}
                    </select>
                    <br/>
                     <span>Sub Bab </span>
                    <select value={selectSubBabSoal} onChange={selectSubBabSoalChanged}>
                        <option value="" disabled ></option>
                        {subBabSoal.map(item => (
                        <option key={item.id} value={item.id}>{item.sub_bab}</option>
                        ))}
                    </select>
                    <br/>
                    </>}
                    {/* <span>mata pelajaran </span>
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
                    <br /> */}
                    <br />
                    {/* <span>Level </span>
                    <select value={selectTingkatKesulitan} onChange={selectTingkatKesulitanChanged}>
                        <option value="" disabled ></option>
                        {tingkatKesulitan.map(item => (
                        <option key={item.id} value={item.id}>{item.deskripsi}</option>
                        ))}
                    </select>
                    <br/> */}
                    <button onClick={() => { setShowInputWaktu(!showInputWaktu) }} >cancel</button>
                    <button onClick={()=>updatePaket()} >save</button>
                </>
            }    
            <br />
            <br />
          
        
            <Table
                dropID = {"drop-2"}
                handleOnDragEnd={handleOnDragEndIsiPaketSoal}
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
            <Button link="" title="Tambah Soal" onClick={() => tambahSoal()} />
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
            <br/>
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
                <option value={""} disabled ></option>
                {babSoal.map(item => (
                   <option key={item.id} value={item.id}>{item.deskripsi}</option>
                ))}
            </select>
            <br/>
            <span>Sub Bab </span>
            <select value={selectSubBabSoal} onChange={selectSubBabSoalChanged}>
                <option value={""} disabled ></option>
                {subBabSoal.map(item => (
                   <option key={item.id} value={item.id}>{item.deskripsi}</option>
                ))}
            </select>
            <br/>
            <span>Konsep </span>
            <select value={selectKonsepSoal} onChange={selectKonsepSoalChanged}>
                <option value={""} disabled ></option>
                {konsepSoal.map(item => (
                   <option key={item.id} value={item.id}>{item.deskripsi}</option>
                ))}
            </select>
            <br/>
            <span>Level Soal </span>
            <select value={selectTingkatKesulitan} onChange={selectTingkatKesulitanChanged}>
                <option value={""} disabled ></option>
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
                <option value={""} disabled ></option>
                {utbk.map(item => (
                   <option key={item.id} value={item.id}>{item.deskripsi}</option>
                ))}
            </select>
            <br/>
            <span>Tahun Soal</span>
            <input type="date" value={tahunSoal} onChange={tahunSoalChanged} />
            <br/>
           </>:
           <></>
            }
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

export default PaketSoal
