import React,{ useEffect, useState } from 'react'
import Button from '../../component/Button'
import styles from './styles.module.css'
import axios from '../../axios'
import ReactHtmlParser from 'react-html-parser';
import { useParams } from "react-router-dom";
import SiunitX from '../../JSON/Siunitx'
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
    const [imgSoal, setImgSoal] = useState([]);
    const [imgSoalFile, setImgSoalFile] = useState([]);
    const [imgSoalName, setImgSoalName] = useState([]);
    const [imgSoalTotal, setImgSoalTotal] = useState(0);
    const [jawaban, setJawaban] = useState("");
    const [pembahasan, setPembahasan] = useState("");
    const [pil_a, setPil_a] = useState("");
    const [pil_b, setPil_b] = useState("");
    const [pil_c, setPil_c] = useState("");
    const [pil_d, setPil_d] = useState("");
    const [pil_e, setPil_e] = useState("");
    const [onImageChangeClicked, setOnImageChangeClicked] = useState(false);
    const [addDataClicked, setAddDataClicked] = useState(false);
    const [link, setLink] = useState([]);
    let { id } = useParams();

    const onImageChange = (input, event) => {
        setOnImageChangeClicked(true);
        let files = event.target.files;
        setImgSoalFile(imgSoal => imgSoal.concat(files[0]));
        
        if (FileReader && files && files.length) {
            let reader = new FileReader();
            reader.readAsDataURL(files[0]);
            reader.onload = e => {
                setImgSoal(imgSoal => imgSoal.concat(e.target.result));
                setImgSoalTotal(imgSoalTotal => imgSoalTotal + 1);
            };
            var curPos =  
        document.getElementById(input).selectionStart; 
        let x;
        let text_to_insert = " img"+(imgSoal.length)+" ";
        switch (input) {
            case "soal":
                x = soal; 
                setSoal(x.slice(0, curPos) + text_to_insert + x.slice(curPos));
                break;
            case "jawaban":
                x = jawaban; 
                setJawaban(x.slice(0, curPos) + text_to_insert + x.slice(curPos));
                break;
                case "pembahasan":
                x = pembahasan; 
                setPembahasan(x.slice(0, curPos) + text_to_insert + x.slice(curPos));
                break;
            case "pil_a":
                x = pil_a; 
                setPil_a(x.slice(0, curPos) + text_to_insert + x.slice(curPos));
                break;
                case "pil_b":
                    x = pil_b; 
                    setPil_b(x.slice(0, curPos) + text_to_insert + x.slice(curPos));
                break;
            case "pil_c":
                x = pil_c; 
                setPil_c(x.slice(0, curPos) + text_to_insert + x.slice(curPos));
                break;
            case "pil_d":
                x = pil_d; 
                setPil_d(x.slice(0, curPos) + text_to_insert + x.slice(curPos));
                break;
                case "pil_e":
                    x = pil_e; 
                    setPil_e(x.slice(0, curPos) + text_to_insert + x.slice(curPos));
                    break;
        
                    default:
                        break;
                    }
        }
                    
    }

    const removeImage = (input,id) => {
        let imgRemove;
        switch (input) {
            case "soal":
                 imgRemove = soal.replace(" img" + id + " ", "");
                 setSoal(imgRemove);
                break;
            case "jawaban":
                 imgRemove = jawaban.replace(" img" + id + " ", "");
                 setJawaban(imgRemove);
                break;
            case "pembahasan":
                imgRemove = pembahasan.replace(" img" + id + " ", "");
                 setPembahasan(imgRemove);
                break;
            case "pil_a":
                imgRemove = pil_a.replace(" img" + id + " ", "");
                 setPil_a(imgRemove);
                break;
                case "pil_b":
                    imgRemove = pil_b.replace(" img" + id + " ", "");
                 setPil_b(imgRemove);
                break;
            case "pil_c":
                imgRemove = pil_c.replace(" img" + id + " ", "");
                 setPil_c(imgRemove);
                break;
            case "pil_d":
                imgRemove = pil_d.replace(" img" + id + " ", "");
                 setPil_d(imgRemove);
                break;
            case "pil_e":
                    imgRemove = pil_e.replace(" img" + id + " ", "");
                 setPil_e(imgRemove);
                    break;
        
            default:
                    break;
            }
        
    }
     const replaceAllCurlyBraces = (sentences) => {
        const temp = sentences.replaceAll("{","").replaceAll("}","");
    
        return temp;
        
    }

    const translationLatexPreview = (input,item,index) => {
       if (/\$(.*?)\$/s.test(item)) {
            return (<Latex key={index.toString()}>{item+" "}</Latex>);
        } else if (/@(.*?)@/s.test(item)) {
            return (<Latex key={index.toString()} displayMode={true}>{item.replaceAll("@","$$")+" "}</Latex>);
        } else if (/img\d+/s.test(item)) {
           const numberImages = item.match(/(?<=img)\d+/s);
        //    console.log("numberImages[0] = " + numberImages[0]);
        //    console.log("imgSoal[numberImages[0] = " + imgSoal[numberImages[0]]);
           return (
               <div key={index.toString()} className="img__group" id="img__group__soal">
                   <img src={imgSoal[numberImages[0]]} alt="aad" />
                   <button style={{ position: "absolute",right: "10px",width: "40px",height: "30px",cursor: "pointer"}} onClick={() => removeImage(input, numberImages[0])}>X</button>
               </div>
           );
        } else { 
            return (<span key={index.toString()}>{item+" "}</span>);
        }
    }

    const translationLatex = (input) => {
        
        if (typeof input !== 'undefined') {
            let result = input
                .replaceAll("\\begin{align*}", String.fromCharCode(32) + "@\\begin{aligned}")
                .replaceAll("\\end{align*}", "\\end{aligned}@" + String.fromCharCode(32))
                .replaceAll("\\begin{equation*}", String.fromCharCode(32) + "@\\begin{aligned}")
                .replaceAll("\\end{equation*}", "\\end{aligned}@" + String.fromCharCode(32));
        
            const angFunction = result.match(/\\ang{.*?}/g);
            if (angFunction !== null) {
                angFunction.map((item) => {
                    const param = item.match(/{.*?}/g);
                    const covertItem = replaceAllCurlyBraces(param[0]) + "\\degree";
                    result = result.replace(item, covertItem);
                })
        }
        const inlineEquation = result.match(/\$(.*?)\$/g);
        const blockEquation = result.match(/(@)(.+?)(@)/gs);
        const siunitXCondition =
            /\\SI{.*?}{.*?}|\\SI\[.*?]{.*?}{.*?}|\\SI{.*?}|\\NUM{.*?}/gi
        const siunitX1 = result.match(siunitXCondition);
        
        console.log("siunitX1");
        // console.log(imgGroup);
        // console.log(imgSoal);
       
          
        if (inlineEquation !== null) {
            inlineEquation.map((item) => {
            const covertItem = item.replaceAll(String.fromCharCode(32), '\\,');
            // console.log(covertItem);

            result = result.replace(item, covertItem);
        })
        }
        if (blockEquation !== null) {
            blockEquation.map((item) => {
                const covertItem = item
                .replaceAll(String.fromCharCode(32)+"\\"+String.fromCharCode(32), "\\,")
                    .replaceAll(String.fromCharCode(32), '\\,')
                    .replaceAll(String.fromCharCode(13), '')
                    .replaceAll(String.fromCharCode(9), '')
                    .replaceAll("{}&","")
                    .replaceAll("$","")
                    .replaceAll("=","&=")
                    .replaceAll("\\approx","&\\approx")
                    .replaceAll("[per-mode&=symbol]","[per-mode=symbol]")
                    // .replaceAll("=","&=")
            
            result = result.replace(item, covertItem);
            })
        }

        if (siunitX1 !== null) {
            siunitX1.map((item) => {
                let convertResult = "";
                let itemProseced;
                let paramItemProseced;
                let par;
                let tothe;
                if (/tothe/s.test(item)) {
                    itemProseced = item+"}";
                } else {
                    itemProseced = item;
                }
                // console.log("siunitX1");
                // console.log(itemProseced);
                
                const mode = itemProseced.match(/\[.*?]/s);
                const param = itemProseced.match(/{.*?}/g);
                // console.log("mode = " + mode);
                // console.log("param = " + param);
                if (mode !== null) {
                    param.map((paramItem) => {
                        if (/tothe/s.test(paramItem)) {
                            paramItemProseced = paramItem + "}";
                        } else {
                            paramItemProseced = paramItem;
                        }
                        par = replaceAllCurlyBraces(paramItemProseced);
                        // console.log("if not null mode = " + mode[0]);
                        convertResult += replaceSiunitx(mode[0], par) + " ";
                    })   
                } else {
                    param.map((paramItem) => {
                         if (/tothe/s.test(paramItem)) {
                             paramItemProseced = paramItem + "}";
                             const findTothe = paramItemProseced.match(/(?<=tothe).*/s);
                             tothe = "^{"+replaceAllCurlyBraces(findTothe[0])+"}";
                             paramItemProseced = paramItemProseced.replaceAll(/(?<=tothe).*/g, "");
                            //  console.log("paramItemProseced = "+paramItemProseced)
                            //  console.log("tothe = "+tothe)
                        } else {
                             paramItemProseced = paramItem;
                             tothe= "";
                        }
                        par = replaceAllCurlyBraces(paramItemProseced);
                        convertResult += replaceSiunitx("", par)+tothe+ " ";
                    })   
                }
                convertResult = convertResult.replaceAll(String.fromCharCode(32), '\\,');
                result = result.replace(itemProseced, convertResult);
                // console.log("convertResult = " + convertResult);
            })
        }

        // console.log("ini hasil resyo = "+result);
        // setSoalConverted(result);
        // setSoalCache(soal);
            return result;
        } else {
            return input;
            // console.log("nothing change")
        }
        
        
    }
   

    const replaceSiunitx = (mode , str) => {
        let result;
        let CodeMatch = false;
        
        SiunitX.map((item) => {
            // console.log("mode replaceunix= " + mode);
            if (str === item.code && mode === "" && CodeMatch === false) {
                result =  item.translation;
                CodeMatch = true;
            } else if (str === item.code && mode === "[per-mode=symbol]" && CodeMatch === false) { 
                result = item["per-mode=symbol"];
                CodeMatch = true;
            } else if(str !== item.code && CodeMatch === false){
                if (/-?\d+(?=e).-?\d+/s.test(str) || /(?=e).-?\d+/s.test(str)) {
                    const pangkat = str.match(/(?<=e).?\d+/s);
                    const nominal = str.match(/-?\d+(?=e)|-?\d+\,\d+(?=e)/s);
                    if (pangkat !== null && nominal !== null) {
                        result = nominal[0] + " x 10^{" + pangkat[0]+"}";
                    } else if (pangkat !== null && nominal === null) {
                        result = "10^" + pangkat[0];
                    }else {
                        result = str;
                    }
                } else {
                    result = str;     
                }
                    // result = str;     
            }
        })
        // console.log(result);
        return result;
    }


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
        setAddDataClicked(true);
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

        async function saveImages() { 
            axios.get('/bank_soal?last="1"')
                .then(function (response) {
                    // setLatestId(response.data[0]["id"]);
                    const dataform = new FormData() 
        
                    dataform.append('nameimg', imgSoalName)
                    // console.log("asd" + response.data[0]["id"])
                    dataform.append('id', response.data[0]["id"])
                    imgSoalFile.map((item, index) => {
                        dataform.append('file'+index, item)
                    });

                    axios.put('/gambar_soal',dataform)
                        .then(function (response) {
                            console.log(response);
                    });
                });
        }

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
         if (addDataClicked) {
            saveImages();
            // postImg();
            setAddDataClicked(false);
        }
    }, [addDataClicked]);

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
                {/* <Latex>{soal}</Latex> */}
                {/* {ReactHtmlParser(soal)} */}
                <input type="file" onChange={onImageChange.bind(this, "soal")} className="filetype" />
                <div className="img__group" id="img__group__soal">

                </div>
                <br />
                {translationLatex(soal).split(" ").map((item,index) => {
                    return translationLatexPreview("soal",item,index)
                })}
            </div>
            <br />
            {tipeSoal === "essai" ?
                <div></div>
            :
                <div className={styles.pilihan__ganda}>
                     <span>Pilihan A</span>
                     <div className={styles.editor}>
                    <textarea value={pil_a} onChange={e => {setPil_a(e.target.value)}} cols="30" rows="10"></textarea>
                    <span>Pilih Gambar </span>
                    <input type="file" onChange={onImageChange.bind(this, "pil_a")} className="filetype" />
                    <br/>
                    {/* <Latex>{pil_a}</Latex> */}
                    {translationLatex(pil_a).split(" ").map((item,index) => {
                        return translationLatexPreview("pil_a",item,index)
                    })}
                    </div>
                    <br />
                    <span>Pilihan B</span>
                     <div className={styles.editor}>
                    <textarea value={pil_b} onChange={e => {setPil_b(e.target.value)}} cols="30" rows="10"></textarea>
                    <span>Pilih Gambar </span>
                    <input type="file" onChange={onImageChange.bind(this, "pil_b")} className="filetype" />
                    <br/>
                    {/* <Latex>{pil_b}</Latex> */}
                    {translationLatex(pil_b).split(" ").map((item,index) => {
                        return translationLatexPreview("pil_b",item,index)
                    })}
                    </div>
                    <br />
                    <span>Pilihan C</span>
                     <div className={styles.editor}>
                    <textarea value={pil_c} onChange={e => {setPil_c(e.target.value)}} cols="30" rows="10"></textarea>
                    <span>Pilih Gambar </span>
                    <input type="file" onChange={onImageChange.bind(this, "pil_c")} className="filetype" />
                    <br/>
                    {/* <Latex>{pil_c}</Latex> */}
                    {translationLatex(pil_c).split(" ").map((item,index) => {
                        return translationLatexPreview("pil_c",item,index)
                    })}
                    </div>
                    <br />
                    <span>Pilihan D</span>
                    <div className={styles.editor}>
                    <textarea value={pil_d} onChange={e => {setPil_d(e.target.value)}} cols="30" rows="10"></textarea>
                    <span>Pilih Gambar </span>
                    <input type="file" onChange={onImageChange.bind(this, "pil_d")} className="filetype" />
                    <br/>
                    {/* <Latex>{pil_d}</Latex> */}
                    {translationLatex(pil_d).split(" ").map((item,index) => {
                        return translationLatexPreview("pil_d",item,index)
                    })}
                    </div>
                    <br />
                    <span>Pilihan E</span>
                    <div className={styles.editor}>
                    <textarea value={pil_e} onChange={e => {setPil_e(e.target.value)}} cols="30" rows="10"></textarea>
                    <span>Pilih Gambar </span>
                    <input type="file" onChange={onImageChange.bind(this, "pil_e")} className="filetype" />
                    <br/>
                    {/* <Latex>{pil_e}</Latex> */}
                    {translationLatex(pil_e).split(" ").map((item,index) => {
                        return translationLatexPreview("pil_e",item,index)
                    })}
                    </div>
                    <br/>
                </div>
            }
            <span>jawaban : </span>
            <br />
            {tipeSoal === "essai" ?
            <div className={styles.editor}>
                <textarea value={jawaban} onChange={jawabanType} name="" id="" cols="30" rows="10"></textarea>
                <span>Pilih Gambar </span>
                    <input type="file" onChange={onImageChange.bind(this, "jawaban")} className="filetype" />
                    <br/>
                    {/* <Latex>{jawaban} */}
                    {/* <Latex displayMode={true}>$\pi$</Latex> */}
                    {/* </Latex> */}
                    {/* {ReactHtmlParser(jawaban)} */}
                    {/* {jawaban} */}
                    {/* <div dangerouslySetInnerHTML={{__html: jawaban}}></div> */}
                    {translationLatex(jawaban).split(" ").map((item,index) => {
                    return translationLatexPreview("jawaban",item,index)
                    })}
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
            <span>Pilih Gambar </span>
                <input type="file" onChange={onImageChange.bind(this, "pembahasan")} className="filetype" />
                <br/>
                {/* <Latex>{pembahasan}</Latex> */}
                {translationLatex(pembahasan).split(" ").map((item,index) => {
                    return translationLatexPreview("pembahasan",item,index)
                })}
            </div>
            <br />
            
            <Button title="Submit" link="/" onClick={addData} />
        </div>
    )
}

export default EditForm
