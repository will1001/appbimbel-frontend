import React,{ useEffect, useState } from 'react'
import { EditorState, convertToRaw} from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import draftToHtml from 'draftjs-to-html';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import styles from './styles.module.css'
import axios from '../../axios'
import Button from '../../components/Button'
import Table from '../../components/Table'
import { Draggable } from 'react-beautiful-dnd';
function Review(props) {
    
    // const [linkTemp, setLinkTemp] = useState([]);
    const [showPanelInput, setShowPanelInput] = useState(false);
    const [refreshRender, setRefreshRender] = useState(false);
    const [judul, setJudul] = useState("");
    const [tutor, setTutor] = useState("");
    const [thumbnailName, setThumbnailName] = useState("");
    const [videoName, setVideoName] = useState("");
    const [review, setReview] = useState([]);
    const [mapel, setMapel] = useState([]);
    const [kelas, setKelas] = useState([]);
    const [babSoal, setBabSoal] = useState([]);
    const [subBabSoal, setsubBabSoal] = useState([]);
    const [fileVideo, setfileVideo] = useState(new FormData());
    // const [tingkatKesulitan, setTingkatKesulitan] = useState([]);
    const [selectMapel, setSelectMapel] = useState("");
    const [selectKelas, setSelectKelas] = useState("");
    const [selectbabSoal, setSelectBabSoal] = useState("");
    const [selectSubBabSoal, setSelectSubBabSoal] = useState("");
    const [linkImg, setLinkImg] = useState("");
    const [img, setImg] = useState(new FormData());

    // const [selectTingkatKesulitan, setSelectTingkatKesulitan] = useState("");
    const base_url = "http://103.161.184.70";

    let editorState = EditorState.createEmpty();
  const [description, setDescription] = useState(editorState);
  const onEditorStateChange = (editorState) => {
    setDescription(editorState);
  }

    const selectMapelChanged = (e) => {
        setSelectMapel(e.target.value);
    }
    
   

     const selectKelasChanged = (e) => {
        setSelectKelas(e.target.value)
    }
    
    const selectBabSoalChanged = (e) => {
        setSelectBabSoal(e.target.value)
    }
    const ResetFilter = () => {
        setSelectBabSoal("");
        setSelectSubBabSoal("");
    }
    
    const selectSubBabSoalChanged = (e) => {
        setSelectSubBabSoal(e.target.value)
    }

    const onImageChange = (event) => {
        let files = event.target.files;
        const extLength = files[0]["name"].split(".").length;
        const dateCode = Date.now();
        const ext = files[0]["name"].split(".")[extLength - 1];
        const file_name = "thumbnail_"+dateCode+"."+ext;
        setThumbnailName(file_name);
        if (FileReader && files && files.length) {
           
            img.append('name', "thumbnail_"+dateCode)
            img.append('name_before', "thumbnail_"+dateCode)
            img.append('file', files[0])
          
             
        }
                    
    }

    const hapusData = (dataTemp) => {
        let  data_delete = require('querystring');
        data_delete = data_delete.stringify({
            id: dataTemp.id
        });
    
    
        axios.delete('/video_materi', {
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            data : data_delete
        }) .then(function (response) {
                    console.log(response);
                    if(response.status === 201){
                        // setPanelChange("main");
                        setRefreshRender(true);
                        setRefreshRender(true);
                        setRefreshRender(true);
                    }
                });
       
    }

    const handleOnDragEnd = (result) => {
        let arr = review;
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
        //  console.log(review);
         
         axios.put('/video_materi', data)
                .then(function (response) {
                    // console.log(response);
                    if (response.status == 200) {
                        // setPanelChange("main");
                        setReview([]);
                        getReview();
                        // setPanelChange("isi soal");
                        // setHasilSearchSoal([]);
                        setRefreshRender(true);
                    }
                });
    }
    
    // const selectTingkatKesulitanChanged = (e) => {
    //     setSelectTingkatKesulitan(e.target.value)
    // }

    const uploadVideo = (event)=>{
        let files = event.target.files;
        //  console.log(files[0]["name"]);
        //  console.log((Date.now()));
        const extLength = files[0]["name"].split(".").length;
        const dateCode = Date.now();
        const ext = files[0]["name"].split(".")[extLength - 1];
        const file_name = "video_materi_"+selectbabSoal+"_"+selectSubBabSoal+"_"+dateCode+"."+ext;
        setVideoName(file_name);
        if (FileReader && files && files.length) {
           
            fileVideo.append('name', "video_materi_"+selectbabSoal+"_"+selectSubBabSoal+"_"+dateCode)
            fileVideo.append('name_before', "video_materi_"+selectbabSoal+"_"+selectSubBabSoal+"_"+dateCode)
            fileVideo.append('file', files[0])
          
             
        }
        
    }

    const save = () => {
        if (fileVideo !== null
            && judul !== ""
            && tutor !== ""
            && draftToHtml(convertToRaw(description.getCurrentContent())) !== ""
            && selectSubBabSoal !== ""
            // && selectbabSoal !== ""
        ) {
            const link_video ="/uploads/" + videoName;
            const link_img ="/uploads/" + thumbnailName;
             const data = {
                judul: judul,
                nomor: review.length+1,
                tutor: tutor,
                deskripsi: draftToHtml(convertToRaw(description.getCurrentContent())),
                thumbnail: link_img,
                link_video: link_video,
                id_sub_bab: selectSubBabSoal,
                // id_bab: selectbabSoal,
               
            }
            // console.log(data);
            axios.post('/video_materi', data)
                .then(function (response) {
                    console.log(response);
                    setRefreshRender(true);
                    setShowPanelInput(showPanelInput => !showPanelInput);
                    setRefreshRender(false);
                });
            
            axios.post('/file_upload', fileVideo)
                .then(function (response) {
                    console.log(response);
                });
                axios.post('/file_upload', img)
                .then(function (response) {
                    console.log(response);
                });
          
        } else {
            alert("Isi Semua Data");
       }
    }

    const panelInputReview =
        <div className={styles.panel_input_review}>
            <div className={styles.panel_input_review_layer_inside}>
                <h1>Buat Video Materi</h1>
                
                <input type="text" placeholder="Judul Video" onChange={(e) => { setJudul(e.target.value) }} />
                <br/>
                
                <input type="text" placeholder="Tutor" onChange={(e) => { setTutor(e.target.value) }} />
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
            {/* <Button link="" title="cek isi text" onClick={() => { console.log(draftToHtml(convertToRaw(description.getCurrentContent()))) }} /> */}
               
                {/* <span>mata pelajaran </span>
            <select value={selectMapel} onChange={selectMapelChanged}>   
            <option value="" disabled ></option>
                {mapel.map(item => (
                   <option key={item.id} value={item.id}>{item.deskripsi}</option>
                ))}
            </select>
            
            <br/>
            <span>kelas </span>
            <select value={selectKelas} onChange={selectKelasChanged}>
                <option value="" disabled ></option>
                {kelas.map(item => (
                   <option key={item.id} value={item.id}>{item.deskripsi}</option>
                ))}
            </select>
             */}
            <br/>
            <span>Bab </span>
            <select value={selectbabSoal} onChange={selectBabSoalChanged}>
                <option value="" disabled ></option>
                {babSoal.map(item => (
                   <option key={item.id} value={item.id}>{item.deskripsi}</option>
                ))}
            </select>
            
            <br/>
            <span>Sub Bab </span>
            <select value={selectSubBabSoal} onChange={selectSubBabSoalChanged}>
                <option value="" disabled ></option>
                {subBabSoal.map(item => (
                   <option key={item.id} value={item.id}>{item.deskripsi}</option>
                ))}
            </select>
            
            <br/>
            <br/>
            <span>Thumbnail : </span>
            <input type="file" onChange={onImageChange.bind(this)} className="filetype" />
                <br/>
                <br />
                <span>Upload Video : </span>
                <input type="file" onChange={uploadVideo.bind(this)} />
                <br/>
                <br />
            {/* <span>tingkat kesulitan </span>
            <select value={selectTingkatKesulitan} onChange={selectTingkatKesulitanChanged}>
                <option value="" disabled ></option>
                {tingkatKesulitan.map(item => (
                   <option key={item.id} value={item.id}>{item.deskripsi}</option>
                ))}
            </select> */}
            
            <br/>
           
            <br />
                <Button link="" title="cancel" onClick={() => { setShowPanelInput(showPanelInput => !showPanelInput) }} />
                <Button link="" title="save" onClick={() => save()} />
            </div>
        </div>
    
    const mainPanel =
        <>
            <h1>Video Materi</h1>
          
            <Button link="" title="Tambah Video Materi" onClick={() => { setShowPanelInput(showPanelInput => !showPanelInput) }} />
            <h3>Filter</h3>
            <span>Bab </span>
            <select value={selectbabSoal} onChange={selectBabSoalChanged}>
                <option value="" disabled ></option>
                {babSoal.map(item => (
                   <option key={item.id} value={item.id}>{item.deskripsi}</option>
                ))}
            </select>
            <br/>
            
            <span>Sub Bab </span>
            <select value={selectSubBabSoal} onChange={selectSubBabSoalChanged}>
                <option value="" disabled ></option>
                {subBabSoal.map(item => (
                   <option key={item.id} value={item.id}>{item.deskripsi}</option>
                ))}
            </select>
            <br/>
            <Button link="" title="Terapkan" onClick={()=>getReviewFilter()} />
            <Button link="" title="Reset" onClick={()=>ResetFilter()} />
            <Table
                dropID = {"drop-1"}
                handleOnDragEnd={handleOnDragEnd}
                thList={["no","tutor","deskripsi", "judul", "Sub Bab","Thumbnail", "Video",""]}
                tdList={review.map((item, index) => (
                    <Draggable key={item.id} draggableId={item.id} index={index}>
                        {(provided, snapshot) => (
                            <tr
                                ref={provided.innerRef}
                                {...provided.draggableProps}
                                {...provided.dragHandleProps}
                            >
                                <td>{item.nomor}</td>
                                <td>{item.tutor}</td>
                                <td>{item.Deskripsi} . . .</td>
                                <td>{item.judul}</td>
                                <td>{item.sub_bab}</td>
                            <td><a href={base_url+item.thumbnail}>Lihat</a></td>
                            <td><a href={base_url+item.link_video}>Lihat</a></td>
                            <td><a href="#0" onClick={()=>hapusData(item)}>hapus</a></td>
                            </tr>
                    )}
                    </Draggable>
                ))}
            />
            {/* <Table
                dropID = {"drop_1"}
                thList={["no","tutor","deskripsi", "judul", "Video"]}
                tdList={review.map(item => (
                    <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.tutor}</td>
                        <td>{item.Deskripsi} . . .</td>
                        <td>{item.judul}</td>
                            <td><a href={item.link_video}>{item.link_video}</a></td>
                    </tr>
                    ))}
            /> */}
            
        </>
    

    const getReview = () => {
        axios.get('/video_materi')
            .then(function (response) {
                setReview(response.data);
            });
    }
  
    const getReviewFilter = () => {
       if(selectSubBabSoal !== ""){
        axios.get('/video_materi?id_sub_bab='+selectSubBabSoal)
        .then(function (response) {
            setReview(response.data);
        });
       }
    }


    useEffect(() => {
        async function fetchdata() {
            
            
            getReview();

            axios.get('/bab_soal?id_mapel=1')
                .then(function (response) {
                    setBabSoal(response.data);
            });
          
            // axios.get('/mapel')
            //     .then(function (response) {
            //         setMapel(response.data);
            //     });
            
            // axios.get('/kelas')
            //     .then(function (response) {
            //         setKelas(response.data);
            //     });
            
            // axios.get('/tingkat_kesulitan')
            //     .then(function (response) {
            //         setTingkatKesulitan(response.data);
            //     });
        }
      
        fetchdata();
        //   if (selectMapel !== "") {
        //     axios.get('/bab_soal?id_mapel=' + selectMapel)
        //         .then(function (response) {
        //             setBabSoal(response.data);
        //     });
        // }
      
          if (selectbabSoal !== "") {
            axios.get('/subBab_soal?id_bab=' + selectbabSoal)
                .then(function (response) {
                    setsubBabSoal(response.data);
            });
        }

        if (refreshRender) {
            getReview();
            setRefreshRender(false);
        }
       
    }, [selectbabSoal,refreshRender]);

    return (
        <div className={styles.container}>
            {showPanelInput ? panelInputReview : mainPanel}
        </div>
    )
}

export default Review
