import React,{ useEffect, useState } from 'react'
import styles from './styles.module.css'
import axios from '../../axios'
import Button from '../Button'
import Table from '../Table'
import { Draggable } from 'react-beautiful-dnd';
function TransactionHistory(props) {
    
    // const [linkTemp, setLinkTemp] = useState([]);
    const [transactionHistory, setTransactionHistory] = useState([]);
    const [panelCahnge, setPanelChange] = useState("main");
    const [title, setTitle] = useState("");
    const [linkImg, setLinkImg] = useState("");
    const [fileName, setFileName] = useState("");
    const [img, setImg] = useState(new FormData());
    const [refreshRender, setRefreshRender] = useState(false);
    const [showTambahData, setShowTambahData] = useState(false);
    const [editButtonPressed, setEditButtonPressed] = useState(false);
    const [addButtonPressed, setAddButtonPressed] = useState(false);
    const [dataSelectedNow, setDataSelectedNow] = useState(null);



    const base_url = "http://103.161.184.70";

    

     useEffect(() => {
         async function fetchdata() {
            getTransactionHistory();
        }
      
        fetchdata();

        if (refreshRender) {
            getTransactionHistory();
            setRefreshRender(false);
        }
        if (addButtonPressed) {
            setTitle("");
            setLinkImg("");
            setAddButtonPressed(false);
         }
       
        
       
    }, [refreshRender,addButtonPressed,editButtonPressed]);

/// action function

const getTransactionHistory = ()=>{
    axios.get('/transaction_history')
    .then(function (response) {
        setTransactionHistory(response.data);
    });
}

const onImageChange = (event) => {
    let files = event.target.files;
    const extLength = files[0]["name"].split(".").length;
    const dateCode = Date.now();
    const ext = files[0]["name"].split(".")[extLength - 1];
    const file_name = "slide_"+dateCode+"."+ext;
    setFileName(file_name);
    if (FileReader && files && files.length) {
       
        img.append('name', "slide_"+dateCode)
        img.append('name_before', "slide_"+dateCode)
        img.append('file', files[0])
      
         
    }
                
}

const kembali = () => {
    setPanelChange("main");
    setAddButtonPressed(true);
    setEditButtonPressed(false);
    setShowTambahData(false);
}

const konfirmasi = (item) => {
    const data={
        id: item.id,
        id_user : item.id_user,
        id_paket:item.id_paket,
        payment_type:item.payment_type,
        jumlah:item.jumlah,
        status:"Aktif",
        description:item.description
    };
    // console.log(data);

    
    axios.put('/transaction_history', data)
            .then(function (response) {
                // console.log(response);
                if (response.status == 200) {
                    setShowTambahData(false);
                    setRefreshRender(true);
                }
            });
}



const save = () => {
    if (img !== null
        && title !== ""
    ) {
        const link_img = base_url + "/uploads/" + fileName;
         const data = {
            title: title,
            img: link_img,
           
        }
        // console.log(data);
        axios.post('/slide_content', data)
            .then(function (response) {
                console.log(response);
            });
        
        axios.post('/file_upload', img)
            .then(function (response) {
                console.log(response);
            });
            setRefreshRender(true);
            setShowTambahData(false);
        // setShowPanelInput(showPanelInput => !showPanelInput);
        // setRefreshRender(false);
    } else {
        alert("Isi Semua Data");
   }
}

const hapusData = (dataTemp) => {
    let  data_delete = require('querystring');
    data_delete = data_delete.stringify({
        id: dataTemp.id
    });


    axios.delete('/slide_content', {
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
    setTitle(data.title);
    setLinkImg(data.img);
    setDataSelectedNow(data);
    setShowTambahData(true);
 }

 const dataEdited = () => {
     console.log("ASasf");
    const data={
        id: dataSelectedNow.id,
        title : title,
        img:linkImg
    };

    
    axios.put('/slide_content', data)
            .then(function (response) {
                console.log(response);
                if (response.status == 200) {
                    setTitle("");
                    setLinkImg("");
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
                thList={["no", "Nama","Deskripsi","Nama Paket","Harga","Status", "Action"]}
                tdList={transactionHistory.map((item,index) => (
                    <tr key={item.id}>
                        <td>{index+1}</td>
                        <td>{item.username}</td>
                        <td>{item.description}</td>
                        <td>{item.nama}</td>
                        <td>{item.jumlah}</td>
                        <td>{item.status}</td>
                        <td><a href="#0" onClick={()=>konfirmasi(item)}>Konfirmasi</a></td>
                    </tr>
                    ))}
            />
            <br/>
             <Button link="" title="Tambah Data" onClick={() => {setShowTambahData(true);}} />
           
           
        </>
    
    
    
    
    
    const panelTambahData =
        <>
            <h1>Tambah Data</h1>
            <input value={title} type="text" placeholder="Judul" onChange={(e) => { setTitle(e.target.value) }} />
            <br/>
            <span>Gambar : </span>
            <input type="file" onChange={onImageChange.bind(this)} className="filetype" />
                <br/>
                <br />
           
            <Button link="" title="Submit" onClick={editButtonPressed?()=>dataEdited(): ()=>save()} />
            <Button link="" title="Kembali" onClick={()=>kembali()} />
        </>
    



   

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

export default TransactionHistory
