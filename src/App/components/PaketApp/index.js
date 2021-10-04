import React,{ useEffect, useState } from 'react'
import { EditorState, convertToRaw} from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import draftToHtml from 'draftjs-to-html';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import styles from './styles.module.css'
import axios from '../../axios'
import Button from '../Button'
import Table from '../Table'
import { Draggable } from 'react-beautiful-dnd';
function PaketApp(props) {
    
    // const [linkTemp, setLinkTemp] = useState([]);
    const [paketApp, setPaketApp] = useState([]);
    const [panelCahnge, setPanelChange] = useState("main");
    const [nama, setNama] = useState("");
    const [harga, setHarga] = useState(0);
    const [deskripsi, setDeskripsi] = useState("");
    const [refreshRender, setRefreshRender] = useState(false);
    const [showTambahData, setShowTambahData] = useState(false);
    const [editButtonPressed, setEditButtonPressed] = useState(false);
    const [addButtonPressed, setAddButtonPressed] = useState(false);
    const [dataSelectedNow, setDataSelectedNow] = useState(null);

    let editorState = EditorState.createEmpty();
    const [description, setDescription] = useState(editorState);
    
    const base_url = "http://103.161.184.70";



    
    const onEditorStateChange = (editorState) => {
        setDescription(editorState);
      }
  
      const tambahData = () => {
        setShowTambahData(true);
        setAddButtonPressed(true);
      }


     useEffect(() => {
         async function fetchdata() {
            getPaketApp();
        }
      
        fetchdata();

        if (refreshRender) {
            getPaketApp();
            setRefreshRender(false);
        }
        if (addButtonPressed) {
            setNama("");
            setDescription(editorState);
            setAddButtonPressed(false);
         }
       
        
       
    }, [refreshRender,addButtonPressed,editButtonPressed]);

/// action function

const getPaketApp = ()=>{
    axios.get('/paket_app')
    .then(function (response) {
        setPaketApp(response.data);
    });
}



const kembali = () => {
    setPanelChange("main");
    setAddButtonPressed(true);
    setEditButtonPressed(false);
    setShowTambahData(false);
}

const save = () => {
    if (nama !== ""
        && draftToHtml(convertToRaw(description.getCurrentContent())) !== <p></p>
    ) {
         const data = {
            nama: nama,
            harga: harga,
            deskripsi: draftToHtml(convertToRaw(description.getCurrentContent())),
           
        }
        // console.log(data);
        axios.post('/paket_app', data)
            .then(function (response) {
                console.log(response);
            });
        
        
            setRefreshRender(true);
            setShowTambahData(false);
    } else {
        alert("Isi Semua Data");
   }
}

const hapusData = (dataTemp) => {
    let  data_delete = require('querystring');
    data_delete = data_delete.stringify({
        id: dataTemp.id
    });


    axios.delete('/paket_app', {
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

const editData = (data) => {
    setEditButtonPressed(true);
    setNama(data.nama);
    setDeskripsi(data.deskripsi);
    setDataSelectedNow(data);
    setShowTambahData(true);
 }

 const dataEdited = () => {
     
    const data={
        id: dataSelectedNow.id,
        nama : nama,
        harga : harga,
        deskripsi:deskripsi
    };

    
    axios.put('/paket_app', data)
            .then(function (response) {
                console.log(response);
                if (response.status == 200) {
                    setNama("");
                    setDeskripsi("");
                    setShowTambahData(false);
                    setRefreshRender(true);
                }
            });
}

   
    
    // panel components
    
    
    const mainPanel =
        <>
            {/* <h1></h1> */}
            <Table
                dropID = {"drop-1"}
                thList={["no", "nama","Deskripsi","Harga", "Action"]}
                tdList={paketApp.map((item,index) => (
                    <tr key={item.id}>
                        <td>{index+1}</td>
                        <td>{item.nama}</td>
                        <td>{item.deskripsi}</td>
                        <td>{item.harga}</td>
                        <td><a href="#0" onClick={()=>editData(item)}>edit</a> || <a href="#0" onClick={()=>hapusData(item)}>hapus</a></td>
                    </tr>
                    ))}
            />
            <br/>
             <Button link="" title="Tambah Data" onClick={() => tambahData()} />
           
           
        </>
    
    
    
    
    
    const panelTambahData =
        <div className={styles.tambah_data_container}>
            <h1>Tambah Data</h1>
            <span>Nama Paket : </span>
            <input value={nama} type="text" placeholder="Nama Paket" onChange={(e) => { setNama(e.target.value) }} />
            <br/>
            <br/>
            <span>Harga :</span>
            <input value={harga} type="number" placeholder="Harga Paket" onChange={(e) => { setHarga(e.target.value) }} />
            <br/>
            <br/>
            <h5>Deskripsi :</h5>
            <div className={styles.editor_style}>
            <Editor
                editorState={description}
                onEditorStateChange={onEditorStateChange}
              />
            </div>
            <textarea style={{display:'none'}} disabled  value={draftToHtml(convertToRaw(description.getCurrentContent())) } />
            {/* <input value={deskripsi} type="text" placeholduer="Deskripsi" onChange={(e) => { setDeskripsi(e.target.value) }} /> */}
            {/* <textarea value={deskripsi} placeholder="Deskripsi" onChange={(e) => { setDeskripsi(e.target.value) }} rows="7" cols="70"></textarea> */}
            <br/>
           
           
            <Button link="" title="Submit" onClick={editButtonPressed?()=>dataEdited(): ()=>save()} />
            <Button link="" title="Kembali" onClick={()=>kembali()} />
        </div>
    



   

    return (
        <>
         <div className={styles.container}>
            {panelCahnge === "main" ? mainPanel : null}
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

export default PaketApp
