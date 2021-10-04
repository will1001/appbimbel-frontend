import React,{ useEffect, useState } from 'react'
import styles from './styles.module.css'
import Button from '../../components/Button'
import axios from '../../axios'
import SiunitX from '../../JSON/Siunitx'
import 'katex/dist/katex.min.css';
import TeX from '@matejmazur/react-katex';

function HomeSoal(props) {
    const Latex = require('react-latex');
    const [bankSoal, setBankSoal] = useState([]);
    const [mapel, setMapel] = useState([]);
    const [kelas, setKelas] = useState([]);
    const [babSoal, setBabSoal] = useState([]);
    const [tingkatKesulitan, setTingkatKesulitan] = useState([]);
    const [selectMapel, setSelectMapel] = useState("");
    const [tahunSoal, setTahunSoal] = useState("");
    const [konsepSoal, setKonsepSoal] = useState([]);
    const [utbk, setUtbk] = useState([]);
    const [selectUtbk, setSelectUtbk] = useState("");
    const [selectKonsepSoal, setSelectKonsepSoal] = useState("");
    const [selectSubBabSoal, setSelectSubBabSoal] = useState("");
    const [subBabSoal, setSubBabSoal] = useState([]);
    const [selectKelas, setSelectKelas] = useState("");
    const [selectbabSoal, setSelectBabSoal] = useState("");
    const [kategoriSoal, setKategoriSoal] = useState("");
    const [selectTingkatKesulitan, setSelectTingkatKesulitan] = useState("");
    const [nomor, setNomor] = useState(1);
    const [id, setId] = useState("");
    const [deleteData, setDeleteData] = useState(false);
    const [updateData, setUpdateData] = useState(false);
    const [nomorChangeTriggered, setNomorChangeTriggered] = useState(false);
    const [loadImg, setLoadImg] = useState(true);
    const [imgSoal, setImgSoal] = useState([]);
    const [link, setLink] = useState([]);
    const [linkTemp, setLinkTemp] = useState([]);

    // const base_url = "http://localhost/app_bimbel_api";
    // const base_url = "https://app-bimbel-web.herokuapp.com";
    const base_url = "http://103.161.184.70";


    // const getSrcImg = (id_soal) => {
    //     axios.get('/gambar_soal?id_soal='+id_soal)
    //             .then(function (response) {
    //                 // setMapel(response.data);
    //                 // return response.data[0]["deskripsi"];
    //                 setLink(response.data);
    //             });
        
    //     //  const dataPromise = promise.then((response) => response.data)
    //     console.log("link = "+link);
    // }

    const kategoriSoalChanged = (e) => {
        setKategoriSoal(e.target.value);
    }
    const selectSubBabSoalChanged = (e) => {
        setSelectSubBabSoal(e.target.value)
        setUpdateData(true);
    }
    const selectKonsepSoalChanged = (e) => {
        setSelectKonsepSoal(e.target.value)
        setUpdateData(true);
    }
    const tahunSoalChanged = (e) => {
        setTahunSoal(e.target.value);
        setUpdateData(true);

    }
    const selectUtbkChanged = (e) => {
        setSelectUtbk(e.target.value)
        setUpdateData(true);
    }
    

    const translationLatex = (input) => {
        
        if (typeof input !== 'undefined') {
            let result = input
                // .replaceAll("\\begin{align*}", String.fromCharCode(32) + "@#\\begin{aligned}")
                // .replaceAll("\\end{align*}", "\\end{aligned}@#" + String.fromCharCode(32))
                // .replaceAll("\\begin{equation*}", String.fromCharCode(32) + "@#\\begin{aligned}")
                // .replaceAll("\\end{equation*}", "\\end{aligned}@#" + String.fromCharCode(32));
        
            const angFunction = result.match(/\\ang{.*?}/g);
            if (angFunction !== null) {
                angFunction.map((item) => {
                    const param = item.match(/{.*?}/g);
                    const covertItem = replaceAllCurlyBraces(param[0]) + "\\degree";
                    result = result.replace(item, covertItem);
                })
        }
        
        
        
        // console.log("siunitX1");
        // console.log(imgGroup);
        // console.log(imgSoal);
        
            // const beginEndCommand = result.match(/\\begin{.*?}\[.*?]|\\begin{.*?}|\\end{.*?}/gi);
            const beginEndCommand = result.match(/\\begin{.*?}\[.*?]|\\begin{.*?}|\\end{.*?}/gi);
            if (beginEndCommand !== null) {
                let convertItem;
                beginEndCommand.map((item) => {
                    let param = item.match(/\{.*?}/s)
                    let setting = item.match(/\[.*?]/s)
                    if (param !== null) {
                        param.map((paramItem) => {
                            // console.log("paramItem");
                            // console.log(paramItem);
                            // console.log(paramItem == "{align*}");
                            if (paramItem == "{enumerate}") {
                                // console.log("paramItem123");
                                convertItem = item
                                    .replaceAll(/\\begin{enumerate}\[.*?]|\\begin{enumerate}/gi, "$\\newline$")
                                    .replaceAll(/\\end{enumerate}/gi, "$\\newline$")
                                
                            }
                            else if (paramItem == "{align*}" || paramItem == "{equation}") {
                                // console.log("paramItem234");
                                convertItem = item.replaceAll(/\\begin{align\*}\[.*?]|\\begin{align\*}|\\begin{equation}\[.*?]|\\begin{equation}/gi,String.fromCharCode(32) + "@#\\begin{aligned}")
                                convertItem = convertItem.replaceAll(/\\end{align\*}|\\end{equation}/gi,"\\end{aligned}@#" + String.fromCharCode(32))
                                // console.log("aaa");
                                // console.log(convertIte/m);
                            } else {
                                // console.log("paramItem345");
                            convertItem = item;
                        }
                    })
                   }
            // const covertItem = item.replaceAll(String.fromCharCode(32), '\\,');
            // console.log(covertItem);
                    
               

                    result = result.replace(item, convertItem);
        })
            }

        // convertItem = convertItem.replaceAll(/\\end{enumerate}/gi, "$\\newline$")
            const insideBeginEnumerate = input.match(/\\begin\{enumerate}(.*?)\\end\{enumerate}/gms);
            if (insideBeginEnumerate !== null) {
                console.log("insideBeginEnumerate");
            console.log(insideBeginEnumerate);
                insideBeginEnumerate.map((item) => {
                    // let convertItem;
                    const itemTotal = item.match(/(?=\\item).*/g)
                    let convertItem = item
                    .replaceAll(/\\begin{enumerate}\[.*?]|\\begin{enumerate}/gi, "$\\newline$")
                    .replaceAll(/\\end{enumerate}/gi, "$\\newline$");
                    
                    // console.log(itemTotal)
                    if (itemTotal !== null) {
                        itemTotal.map((itemTotalItem,index) => {
                            // const convertItem = item.replaceAll("\\item " + itemTotalItem, "$\\left(" + itemTotalItem + "\\right)$")
                            // console.log("insideas/djalksfjaBegin")
                            // console.log(itemTotalItem)
                            // console.log("item")
                            // console.log(item)
                            const itemTotalItemReplace = itemTotalItem.replaceAll("\\item ","")
                            convertItem = convertItem.replaceAll(itemTotalItem, "$("+(index+1)+") "+itemTotalItemReplace+"\\newline$")
                            // console.log("convertItem")
                            // console.log(convertItem)
                            
                            
                            
                            // result = result.replaceAll(itemNoBeginEnd, convertItem)
                            // console.log("2342423423424242424234")
                            // console.log(convertItem)
                        })
                    }
                    const itemNoBeginEnd = item
                    .replaceAll(/\\begin{enumerate}\[.*?]|\\begin{enumerate}/gi, "$\\newline$")
                    .replaceAll(/\\end{enumerate}/gi, "$\\newline$")
                    
                    result = result.replace(itemNoBeginEnd, convertItem);
                })
            }
            
            const inlineEquation = result.match(/\$(.*?)\$/g);
            if (inlineEquation !== null) {
            inlineEquation.map((item) => {
            const covertItem = item.replaceAll(String.fromCharCode(32), '\\,');
            // console.log(covertItem);

            result = result.replace(item, covertItem);
        })
            }
        
        const blockEquation = result.match(/(@#)(.+?)(@#)/gs);
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

        const siunitXCondition =
            /\\SI{.*?}{.*?}|\\SI\[.*?]{.*?}{.*?}|\\SI{.*?}|\\NUM{.*?}/gi
        const siunitX1 = result.match(siunitXCondition);
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

    const translationLatexPreview = (input,item,index) => {
        // console.log(item);
        // console.log(/img\d+/s.test(item));
       if (/\$(.*?)\$/s.test(item)) {
            return (<Latex key={index.toString()}>{item+" "}</Latex>);
        } if (/@#(.*?)@#/s.test(item)) {
            // return (<Latex key={index.toString()} displayMode={true}>{item.replaceAll("@#","$$")+" "}</Latex>);
            return (<TeX key={index.toString()} block>{item.replaceAll("@#","")+" "}</TeX>);
        } if (/img\d+/s.test(item)) {
            const numberImages = item.match(/(?<=img)\d+/s);
            // const src = link[numberImages[0]]["deskripsi"];
            // console.log(link);
            // console.log("link ="+link.length);
            // console.log("linkTemp ="+linkTemp.length);
            // console.log(typeof link[numberImages[0]]["deskripsi"] === 'undefined');
            // setLinkTemp(link);
            // let i = 0;
            // i += 1;
            // console.log("ini i = "+i++)
            // console.log(link.length);
            if (typeof link[numberImages[0]] !== 'undefined') {
                // console.log("ini ;lllllink");
                // console.log(numberImages[0]);
                // console.log(link[numberImages[0]]);
                   return (
                       <div key={index.toString()} className="img__group" id="img__group__soal">
                           <img src={typeof link[numberImages[0]]["deskripsi"] !== 'undefined'?base_url+link[numberImages[0]]["deskripsi"]:""} alt="aad" />
                           {/* <button style={{ position: "absolute",right: "10px",width: "40px",height: "30px",cursor: "pointer"}} onClick={() => removeImage(input, numberImages[0])}>X</button> */}
                       </div>
                        );
            } else {
                return <div key={index.toString()}></div>;
            }
            // // let src2;
            // if (typeof link !== 'undefined') {
            //     return (
            //    <div key={index.toString()} className="img__group" id="img__group__soal">
            //        <img src={base_url+link[numberImages[0]]["deskripsi"]} alt="aad" />
            //        {/* <button style={{ position: "absolute",right: "10px",width: "40px",height: "30px",cursor: "pointer"}} onClick={() => removeImage(input, numberImages[0])}>X</button> */}
            //    </div>
            //     );
            // }
        //    console.log("numberImages[0] = " + numberImages[0]);
        //    console.log(src2);
        //    console.log("imgSoal[numberImages[0] = " + imgSoal[numberImages[0]]);
           
        } else { 
            return (<span key={index.toString()}>{item+" "}</span>);
        }
    }

    const replaceAllCurlyBraces = (sentences) => {
        const temp = sentences.replaceAll("{","").replaceAll("}","");
    
        return temp;
        
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
                    const nominal = str.match(/-?\d+(?=e)/s);
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
        setUpdateData(true);
        
    }

   
    
    const nomorChanged = (e) => {
        setNomorChangeTriggered(true);
        setNomor(e.target.value)
    }
    const selectKelasChanged = (e) => {
        setSelectKelas(e.target.value)
        setUpdateData(true);
    }
    const selectBabSoalChanged = (e) => {
        setSelectBabSoal(e.target.value)
        setUpdateData(true);
    }
    const selectTingkatKesulitanChanged = (e) => {
        setSelectTingkatKesulitan(e.target.value)
        setUpdateData(true);
    }
    const fetchImageSoal = () => {
        axios.get('/bank_soal?id_mapel='
                + selectMapel +
                '&id_kelas=' + selectKelas
                + '&id_bab_soal=' + selectbabSoal
                +'&id_tingkat_kesulitan=' + selectTingkatKesulitan)
                .then(function (response) {
                   
                    if (response.data.length !== 0) {
                          axios.get('/gambar_soal?id_soal='+response.data[nomor-1]["id"])
                              .then(function (response) {
                                //   console.log("iniresponse.data");
                                //   console.log(response.data);
                            setLink(response.data);
                        });
                     }
                });
        setLinkTemp(link);
    }

    const fetchUpdateBankSoal = (e) => {
        console.log("/bank_soal?id_bab_soal="+selectbabSoal+
        "&id_sub_bab="+selectSubBabSoal+
        "&id_konsep="+selectKonsepSoal+
        "&kategori_soal="+kategoriSoal+
        "&id_tingkat_kesulitan="+selectTingkatKesulitan+
        "&tahun_soal="+tahunSoal+
        "&id_utbk="+selectUtbk);
        axios.get("/bank_soal?id_bab_soal="+selectbabSoal+
        "&id_sub_bab="+selectSubBabSoal+
        "&id_konsep="+selectKonsepSoal+
        "&kategori_soal="+kategoriSoal+
        "&id_tingkat_kesulitan="+selectTingkatKesulitan+
        "&tahun_soal="+tahunSoal+
        "&id_utbk="+selectUtbk)
                .then(function (response) {
                    setBankSoal(response.data);
                    if (response.data.length !== 0 ) {
                        if(nomor !== 0){
                            setId(response.data[nomor - 1].id);
                        }
                    }
                });
    }


    useEffect(() => {
        async function fetchdata() {
            
            // axios.get('/mapel')
            //     .then(function (response) {
            //         setMapel(response.data);
            //     });
            
            // axios.get('/kelas')
            //     .then(function (response) {
            //         setKelas(response.data);
            //     });
            axios.get('/bab_soal')
            .then(function (response) {
                setBabSoal(response.data);
        });
            axios.get('/tingkat_kesulitan')
                .then(function (response) {
                    setTingkatKesulitan(response.data);
                });
                
        }
        // async function getSrcImg() {
        //     console.log("id= "+id);
        //     axios.get('/gambar_soal?id_soal='+id)
        //             .then(function (response) {
        //                 // setMapel(response.data);
        //                 // return response.data[0]["deskripsi"];
        //                 setLink(response.data);
        //             });
            
        //     //  const dataPromise = promise.then((response) => response.data)
        //     console.log("lnk= "+link);
        // }
        fetchdata();
        // if (selectMapel !== "") {
        //     axios.get('/bab_soal?id_mapel=' + selectMapel)
        //         .then(function (response) {
        //             setBabSoal(response.data);
        //     });
        // }
        if (deleteData) {
            const data = {
                id : id
            }
            axios.post('/bank_soal',data)
                .then(function (response) {
                    console.log(response.data);
                });
            setNomor(bankSoal.length - 1);
            axios.get('/bank_soal?id_mapel='
                + selectMapel +
                '&id_kelas=' + selectKelas
                + '&id_bab_soal=' + selectbabSoal
                +'&id_tingkat_kesulitan=' + selectTingkatKesulitan)
                .then(function (response) {
                    // getSrcImg(response.data[response.data.length - 1].id);
                    // console.log(response.data);
                    setBankSoal(response.data);
                    if (response.data.length !== 0) {
                        if (nomor !== 0) {
                            setId(response.data[response.data.length - 1].id);
                        }
                    }
                });
                setDeleteData(false)
        }
        if (nomorChangeTriggered) {
            // setLink([]);
            fetchImageSoal();
            setNomorChangeTriggered(false);
        }
        if (
            kategoriSoal === "UTBK" &&
            tahunSoal !== "" &&
            selectUtbk !== "" &&
            updateData
        ) {
            fetchUpdateBankSoal();
            fetchImageSoal();
            
            setUpdateData(false);
            
            }
    
       if(kategoriSoal === "UTBK"){
        axios.get('/utbk')
        .then(function (response) {
            setUtbk(response.data);
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
                    console.log(response.data);
                    setKonsepSoal(response.data);
        });
    }
        if (
            kategoriSoal === "BAB" &&
            selectbabSoal !== "" &&
            selectSubBabSoal !== "" &&
            selectKonsepSoal !== "" &&
            selectTingkatKesulitan !== "" &&
            tahunSoal !== "" &&
            updateData
        ) {
            fetchUpdateBankSoal();
            fetchImageSoal();
            // console.log(id+"= id")
            // getSrcImg();
            
            setUpdateData(false);
            
            }
       
    }, [selectUtbk,selectKonsepSoal,selectSubBabSoal,tahunSoal,kategoriSoal,selectMapel,selectKelas,selectbabSoal,selectTingkatKesulitan,nomor,nomorChangeTriggered,deleteData,id,bankSoal]);

    return (
        <div className={styles.container}>
            <div className={styles.button__group}>
                <Button title="Tambah Soal" link="/dashboard/AddSoal" />
                {bankSoal.length === 0 ? 
                    <>
                    </>
                :
                    <>
                        <Button title="Edit Soal" link={'/dashboard/EditSoal/'+ id } />
                        <Button link="/dashboard/HomeSoal" title="Hapus Soal" onClick={e =>{setDeleteData(true)}} />
                    </>
                }
            </div>
            {/* <span>mata pelajaran </span>
            <select value={selectMapel} onChange={selectMapelChanged}>   
            <option value="" disabled ></option>
                {mapel.map(item => (
                   <option key={item.id} value={item.id}>{item.deskripsi}</option>
                ))}
            </select> */}
            {/* <span>kelas </span>
            <select value={selectKelas} onChange={selectKelasChanged}>
                <option value="" disabled ></option>
                {kelas.map(item => (
                   <option key={item.id} value={item.id}>{item.deskripsi}</option>
                ))}
            </select> */}
            {/* <span>Bab </span>
            <select value={selectbabSoal} onChange={selectBabSoalChanged}>
                <option value="" disabled ></option>
                {babSoal.map(item => (
                   <option key={item.id} value={item.id}>{item.deskripsi}</option>
                ))}
            </select>
            <span>Level </span>
            <select value={selectTingkatKesulitan} onChange={selectTingkatKesulitanChanged}>
                <option value="" disabled ></option>
                {tingkatKesulitan.map(item => (
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
            <span>Konsep </span>
            <select value={selectKonsepSoal} onChange={selectKonsepSoalChanged}>
                <option value="" disabled ></option>
                {konsepSoal.map(item => (
                   <option key={item.id} value={item.id}>{item.deskripsi}</option>
                ))}
            </select>
            <br/>
            <span>Level Soal </span>
            <select value={selectTingkatKesulitan} onChange={selectTingkatKesulitanChanged}>
                <option value="" disabled ></option>
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
            <br/>
            <span>Tahun Soal</span>
            <input type="date" value={tahunSoal} onChange={tahunSoalChanged} />
            <br/>
            </>:
            <></>
            }
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
                    <p>
                        {translationLatex(item.soal).split(" ").map((item,index) => {
                            return translationLatexPreview("soal",item,index)
                        })}
                    </p>
                    {item.tipe_soal === "pilgan" ? 
                        <div className="">
                            <p>A.  {translationLatex(item.pil_a).split(" ").map((item,index) => {
                                    return translationLatexPreview("pil_a",item,index)
                                    })}</p>
                            <p>B.  {translationLatex(item.pil_b).split(" ").map((item,index) => {
                                    return translationLatexPreview("pil_b",item,index)
                                    })}</p>
                            <p>C.  {translationLatex(item.pil_c).split(" ").map((item,index) => {
                                    return translationLatexPreview("pil_c",item,index)
                                    })}</p>
                            <p>D.  {translationLatex(item.pil_d).split(" ").map((item,index) => {
                                    return translationLatexPreview("pil_d",item,index)
                                    })}</p>
                            <p>E.  {translationLatex(item.pil_e).split(" ").map((item,index) => {
                                    return translationLatexPreview("pil_e",item,index)
                                    })}</p>
                        </div>
                    :
                        <div className=""></div>
                }    
                <strong>Jawaban :</strong>
                <p>{translationLatex(item.jawaban).split(" ").map((item,index) => {
                    return translationLatexPreview("jawaban",item,index)
                })}</p>
                <strong>Pembahasan :</strong>
                <p>{translationLatex(item.pembahasan).split(" ").map((item,index) => {
                    return translationLatexPreview("pembahasan",item,index)
                })}</p>
                {/* <a href="#0"></a> */}
                </div>
            ))}
            
        </div>
    )
}

export default HomeSoal
