import React,{ useEffect, useState } from 'react'
import styles from './styles.module.css'
import axios from '../../axios'
import Button from '../../components/Button'
import Table from '../../components/Table'
import { Draggable } from 'react-beautiful-dnd';

function TryOut(props) {
    
    // const [linkTemp, setLinkTemp] = useState([]);
    const [panelCahnge, setPanelChange] = useState("main");
    const [searchInput, setSearchInput] = useState("");
    const [refreshRender, setRefreshRender] = useState(false);
    const [getIsiSoalRender, setGetIsiSoalRender] = useState(false);
    const [showTambahSoal, setShowTambahSoal] = useState(false);
    const [showInputWaktu, setShowInputWaktu] = useState(false);
    const [showInputPart, setShowInputPart] = useState(false);
    const [showInputPartCustom, setShowInputPartCustom] = useState(false);
    const [tryoutList, setTryoutList] = useState([]);
    const [tryoutPartList, setTryoutPartList] = useState([]);
    const [isiSoal, setIsiSoal] = useState([]);
    const [tryoutAllPart, setTryoutAllPart] = useState([]);
    const [hasilSearchSoal, setHasilSearchSoal] = useState([]);
    const [detailSoal, setDetailSoal] = useState([]);
    const [jmlSoal, setJmlSoal] = useState(0);
    const [jam, setJam] = useState(0);
    const [menit, setMenit] = useState(0);
    const [detik, setDetik] = useState(0);
    const [idPaketTryOut, setIdPaketTryOut] = useState(0);
    const [mapel, setMapel] = useState([]);
    const [selectMapel, setSelectMapel] = useState("");
    const [selectTryoutPart, setSelectTryoutPart] = useState("");
    const [custonNamaBagian, setCustonNamaBagian] = useState("");
    const base_url = "http://103.161.184.70";

    const selectMapelChanged = (e) => {
        setSelectMapel(e.target.value);
    }
    
    const selectTryoutPartChanged  = (e) => {
        setSelectTryoutPart(e.target.value);
    }
    
    const saveBagian = () => {
        if (selectMapel == "") {
            const data_post = {
                id_paket: idPaketTryOut,
                id_mapel: 0,
                nama_part: custonNamaBagian,
            }
        
            axios.post('/tryout_part', data_post)
                .then(function (response) {
                    console.log(response);
                    if (response.status == 200) {
                        setPanelChange("main");
                        setIsiSoal([]);
                        getIsiSoal(idPaketTryOut);
                        setPanelChange("isi soal");
                        setHasilSearchSoal([]);
                        setRefreshRender(true);
                    }
                });
        } else {
            axios.get('/mapel?id=' + selectMapel).then((res) =>{
                const data_post = {
                    id_paket: idPaketTryOut,
                    id_mapel: selectMapel,
                    nama_part: res.data[0].deskripsi,
                }
        
                axios.post('/tryout_part', data_post)
                    .then(function (response) {
                        console.log(response);
                        if (response.status == 200) {
                            setPanelChange("main");
                            setIsiSoal([]);
                            getIsiSoal(idPaketTryOut);
                            setPanelChange("isi soal");
                            setHasilSearchSoal([]);
                            setRefreshRender(true);
                        }
                    });
                });
            
        }
        setShowInputPart(!showInputPart);
    }
    
    const changeCustonOrMapel = () => {
        setShowInputPartCustom(!showInputPartCustom);
        setSelectMapel("");
        setCustonNamaBagian("");
    }
    
    const getTryOut = () => {
        axios.get('/paket_soal?tipe=tryout')
            .then(function (response) {
                setTryoutList(response.data);
            });
    }
    
    const getIsiSoal = (idTryOut) => {
        let dataTemp = [];
        axios.get(`/tryout_part?id_paket=${idTryOut}`)
            .then(function (resPart) {
                if (resPart.status == 200) {
                    setTryoutPartList(resPart.data);
                    resPart.data.map((e,i) => {
                        axios.get("/isi_paket_soal?tipe=tryout&id=" + idTryOut + "&id_tryout_part=" + e.id)
                            .then(function (resIsi) {
                                if (resIsi.status == 200) {
                                        setIsiSoal(isiSoal => isiSoal.concat({
                                            "id": e.id,
                                            "nama_part": e.nama_part,
                                            "isi_soal": resIsi.data
                                        }))
                                    
                                }
                            });
                    });   
                }
            });
        console.log(isiSoal);
        
    }
  
  

    const handleOnDragEnd = (result, isi_soal) => {
         let arr = isi_soal;
         const old_index = result.source.index;
         const new_index = result.destination.index;
         
         if (new_index >= arr.length) {
            let k = new_index - arr.length + 1;
            while (k--) {
                arr.push(undefined);
            }
        }
         arr.splice(new_index, 0, arr.splice(old_index, 1)[0]);
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
                        getIsiSoal(idPaketTryOut);
                        setPanelChange("isi soal");
                        setHasilSearchSoal([]);
                        setRefreshRender(true);
                    }
                });
    }
    
    const searchSoal = () => {
        axios.get(`/bank_soal?cari=${searchInput}`)
            .then(function (response) {
                setHasilSearchSoal(response.data);
            });
        setRefreshRender(true);
    }

    const editPaket = (waktu) => {
        let sisaWaktu = waktu;
        setJam(parseInt(sisaWaktu/3600));
        sisaWaktu = sisaWaktu % 3600;
        setMenit(parseInt(sisaWaktu/60));
        sisaWaktu = sisaWaktu%60;
        setDetik(sisaWaktu);

        setRefreshRender(true);
        setShowInputWaktu(!showInputWaktu);

    }
    
    const updatePaket = () => {
        const waktu = parseInt(jam) * 3600 + parseInt(menit) * 60 + parseInt(detik);
          const tryoutFilterTemp =  tryoutList.filter((a) => {
            return a.id == idPaketTryOut;
         })
        const data_paket_soal = {
            id: tryoutFilterTemp[0].id,
            id_mapel: 0,
            id_bab: 0,
            id_kelas: 0,
            id_level: 0,
            waktu: waktu,
        }
            
        axios.put('/paket_soal', data_paket_soal)
                .then(function (response) {
                    console.log(response);
                });
        setRefreshRender(true);
        setShowInputWaktu(!showInputWaktu);

    }
    
    const TambahSoal = (idSoal) => {
        

        if (selectTryoutPart === "") {
            alert("pilih bagian soal");
        } else {
             const data_isi_paket_soal = {
                id_paket: idPaketTryOut,
                id_tryout_part: selectTryoutPart,
                id_soal: idSoal,
                no_soal: tryoutList.length,
            }
        
            const tryoutFilter =  tryoutList.filter((a) => {
                return a.id == idPaketTryOut;
            })
        
            const data_paket_soal = {
                id: tryoutFilter[0].id,
                jml_soal: parseInt(tryoutFilter[0].jml_soal) + 1,
                update_jml_soal: "true",
            }
            
            const bank_soal = {
                id: idSoal,
                tryout_used: 1,
            }
            
            axios.post('/isi_paket_soal', data_isi_paket_soal)
                    .then(function (response) {
                        console.log(response);
                        if (response.status == 200) {
                            setPanelChange("main");
                            setIsiSoal([]);
                            getIsiSoal(idPaketTryOut);
                            setPanelChange("isi soal");
                            setHasilSearchSoal([]);
                            setRefreshRender(true);
                        }
                    });
        
        
            
            axios.put('/paket_soal', data_paket_soal)
                    .then(function (response) {
                        console.log(response);
                    });
           
            axios.put('/bank_soal', bank_soal)
                    .then(function (response) {
                        console.log(response);
                    });
            
                setShowTambahSoal(false);
        }
         
        
    }

    const hapusTryOut = (idTryout) => {
        let  data_delete = require('querystring');
        data_delete = data_delete.stringify({
            id: idTryout
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
    
    const hapusSoal = (idIsiSoal,idSoal) => {

        let  data_isi_paket_soal = require('querystring');
        data_isi_paket_soal = data_isi_paket_soal.stringify({
            id: idIsiSoal
        });

         const data_paket_soal = {
            id: tryoutList[0].id,
            jml_soal: parseInt(tryoutList[0].jml_soal) - 1,
            update_jml_soal: "true",
        }
        
        const bank_soal = {
            id: idSoal,
            tryout_used: 0,
        }


        axios.delete('/isi_paket_soal', {
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            data : data_isi_paket_soal
        })
                .then(function (response) {
                    console.log(response);
                    setTimeout(function () {
                        setPanelChange("main");
                        setIsiSoal([]);
                        getIsiSoal(idPaketTryOut);
                        setPanelChange("isi soal");
                        setRefreshRender(true);
                    }, 3000);
                });
        
        axios.put('/paket_soal', data_paket_soal)
            .then(function (response) {
                console.log(response);
            });
        
          axios.put('/bank_soal', bank_soal)
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
            getTryOut();
        }
      
        fetchdata();
        if (refreshRender) {
            getTryOut();
            setRefreshRender(false);
         }
         
         if (getIsiSoalRender) {
             setIsiSoal([]);
             getIsiSoal(idPaketTryOut);
             setGetIsiSoalRender(false);
         }
        
       
    }, [refreshRender,getIsiSoalRender]);

/// action function


    const lihatDetaillSoal = (index,idSoal) => {
        const soal = isiSoal[index]["isi_soal"].filter((a) => {
            return a.id == idSoal;
        })
        // console.log(isiSoal);
        // console.log(soal);
        setDetailSoal(soal);
        setPanelChange("detail soal")
        setRefreshRender(true);
    }

    const editTryOut = (idTryOut) => {
        setGetIsiSoalRender(true);
        setIdPaketTryOut(idTryOut);
        setPanelChange("isi soal");
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
            detik !== 0
        ) {
            const waktu = parseInt(jam) * 3600 + parseInt(menit) * 60 + parseInt(detik);
            const data = {
                deskripsi: "TryOut "+(tryoutList.length + 1).toString(),
                waktu: waktu,
                id_mapel: 0,
                id_bab: 0,
                id_kelas: 0,
                id_level: 0,
                tipe: "tryout",
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
    const panelPartTryout =
        <div className={styles.panel_part_tryout}>
            <span>Bagian Soal : </span>
            <select value={selectTryoutPart} onChange={selectTryoutPartChanged}>   
                <option value="" disabled ></option>
                {tryoutPartList.map(item => (
                    <option key={item.id} value={item.id}>{item.nama_part}</option>
                ))}
            </select>
        </div>
    
    const panelInputReview =
        <div className={styles.panel_input_review}>
            <div className={styles.panel_input_review_layer_inside}>
                <h1>TryOut { (tryoutList.length + 1).toString()}</h1>
                {/* <input type="text" placeholder="Judul Video" />
                <br/>
                <br/> */}
                <span>Waktu : </span>
                <input type="number" min="0" placeholder="jam" onChange={(e) => { setJam(e.target.value) }} />
                <input type="number" min="0" placeholder="menit" onChange={(e) => { setMenit(e.target.value) }} />
                <input type="number" min="0" placeholder="detik" onChange={(e) => { setDetik(e.target.value) }} />
               
            
            <br/>
           
            <br />
                <Button link="" title="cancel" onClick={() => { setPanelChange("main") }} />
                <Button link="" title="save" onClick={() => save()} />
            </div>
        </div>
    
    const mainPanel =
        <>
            <h1>TryOut</h1>
            <Button link="" title="Buat TryOut" onClick={() => { setPanelChange("add tryout") }} />
            <Table
                dropID={"drop-1"}
                thList={["no", "judul", "Deskripsi","Action"]}
                tdList={tryoutList.map((item,index) => (
                    <tr key={item.id}>
                        <td>{index+1}</td>
                        <td>{item.deskripsi}</td>
                        <td>{item.jml_soal +" Soal ,"+ formatWaktu(item.waktu)}</td>
                        <td><a href="#0" onClick={()=>editTryOut(item.id)}>edit</a>||<a href="#0" onClick={()=>hapusTryOut(item.id)}>hapus</a></td>
                    </tr>
                    ))}
            />
        </>
    
    const panelIsiSoal = () => {
          const tryoutFilterTemp =  tryoutList.filter((a) => {
            return a.id == idPaketTryOut;
         })
        return(<>
            <h1>{tryoutFilterTemp[0].deskripsi }</h1>
            {!showInputWaktu ?
                <>
                    <span>Waktu : { formatWaktu(tryoutFilterTemp[0].waktu) }</span>
                    <br/>
                    
                    <br/>
                    {
                        showInputPart ?
                            <></> : <>
                            <button onClick={() => editPaket(tryoutFilterTemp[0].waktu)} >edit</button>
                            <button onClick={()=>{setShowInputPart(true)}} >Buat Bagian</button>
                            </>
                    }
                </>
                :
                <>
                    <span>Waktu : </span>
                    <input type="number" min="0" placeholder="jam" value={jam} onChange={(e) => { setJam(e.target.value) }} />
                    <input type="number" min="0" placeholder="menit" value={menit} onChange={(e) => { setMenit(e.target.value) }} />
                    <input type="number" min="0" placeholder="detik" value={detik} onChange={(e) => { setDetik(e.target.value) }} />
                    <br/>
                    <br/>
                   
                    <br/>
                    <button onClick={() => { setShowInputWaktu(!showInputWaktu) }} >cancel</button>
                    <button onClick={()=>updatePaket()} >save</button>
                </>
            }
            {
                !showInputPart ?
                <>
                  
                </> :
                    <>
                        <br/>
                        <br />
                  
                        {
                            showInputPartCustom ? <><input type="text" placeholder="Nama Bagian" onChange={(e)=>{setCustonNamaBagian(e.target.value)}} /></> :
                                <>
                                    <select value={selectMapel} onChange={selectMapelChanged}>   
                                        <option value="" disabled ></option>
                                        {mapel.map(item => (
                                        <option key={item.id} value={item.id}>{item.deskripsi}</option>
                                        ))}
                                    </select>
                                </>
                        }
                        <button onClick={() => changeCustonOrMapel()} >{showInputPartCustom?"mapel":"custom"}</button>
                        <br/>
                        <br/>
                    <button onClick={() => { setShowInputPart(!showInputPart) }} >cancel</button>
                    <button onClick={()=>saveBagian()} >save</button>
                </>
            }
            <br />
            <br />
            
            <div className={styles.button_flex_display}>
                <Button link="" title="Kembali" onClick={() => { setPanelChange("main") }} />
                <Button link="" title="Tambah Soal" onClick={() => { setShowTambahSoal(true) }} />
             </div>
            <br />

            {isiSoal.sort((a, b) => parseInt(a.id) - parseInt(b.id)).map((item1, index1) => (
                <div key={index1}>
                    <h1>{item1.nama_part}</h1>
                    <Table
                        dropID = {index1.toString()}
                        handleOnDragEnd={(e)=>handleOnDragEnd(e,item1.isi_soal)}
                        thList={["no", "soal", "Action"]}
                        tdList={item1.isi_soal.map((item, index) => (
                            <Draggable key={item.id} draggableId={item.id} index={index}>
                                {(provided, snapshot) => (
                                    <tr
                                        ref={provided.innerRef}
                                        {...provided.draggableProps}
                                        {...provided.dragHandleProps}
                                    >
                                        <td>{index + 1}</td>
                                        <td>{item.soal.substring(0, 100)} . . .</td>
                                        <td><a href="#0" onClick={() => lihatDetaillSoal(index1,item.id)}>Lihat Detail</a>||<a href="#0" onClick={() => hapusSoal(item.id,item.id_soal)}>hapus</a></td>
                                    </tr>
                            )}
                            </Draggable>
                        ))}
                    />
                </div>
            ))}
           
           
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
            {panelPartTryout}
            <Table
                dropID={"drop-1"}
                thList={["no", "Hasil Pencarian",""]}
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
            {panelCahnge == "main" ? mainPanel : null}
            {panelCahnge == "add tryout" ? panelInputReview : null}
            {panelCahnge == "isi soal" ? panelIsiSoal() : null}
            {panelCahnge == "detail soal" ? panelDetailSoal : null}
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

export default TryOut
