import React,{ useEffect, useState } from 'react'
import Button from '../../component/Button'
import styles from './styles.module.css'
import axios from '../../axios'
// import ReactHtmlParser from 'react-html-parser';
// import CKEditor from 'ckeditor4-react';
// import { CKEditor } from '@ckeditor/ckeditor5-react';
// import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
// import CKEditor from '@ckeditor/ckeditor5-react';
// import ClassicEditor from 'ckeditor5-classic-with-mathtype';
// import MathType from '@wiris/mathtype-ckeditor5';
// import MathType from '@wiris/mathtype-ckeditor5';
// import MathType from '@ckeditor/ckeditor5-react/';
// import CKEditor from '@ckeditor/ckeditor5-react';
// import ClassicEditor from 'ckeditor5-classic-with-mathtype';
import 'katex/dist/katex.min.css';
// import TeX from '@matejmazur/react-katex';
// import { MathComponent } from 'mathjax-react'
import SiunitX from '../../JSON/Siunitx'



function AddForm(props) {
    const Latex = require('react-latex');
    const [mapel, setMapel] = useState([]);
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
    const [popUpMenu, setPopUpMenu] = useState(false);
    const [popUpTitle, setPopUpTitle] = useState("");
    const [inputDeskripsi, setInputDeskripsi] = useState("");
    const [addDeskripsiClicked, setAddDeskripsiClicked] = useState(false);

    // const data = soal.replaceAll(String.fromCharCode(32), '')
    //                     .replaceAll(String.fromCharCode(13), '')
    //                     .replaceAll("{}&",'');
    //                     console.log("dataadnda : "+data);
    //                     // console.log(/\@(.*?)\@/g.test(data))

    const replaceSiunitx = (mode , str) => {
        let result;
        let CodeMatch = false;
        
        SiunitX.map((item) => {
            // console.log("mode = "+ mode);
            // console.log("item.code = "+ item.code);
            // console.log("str= "+ str);
            // console.log(mode === "");
            // console.log("item code = " + item.code);
            // const code = String.raw`${item.code}
            // console.log("code = " + code);
            if (str === item.code && mode === "" && CodeMatch === false) {
                // console.log(item.translation);
                // console.log(SiunitX);
                // return item.translation;
                result =  item.translation;
                CodeMatch = true;
            } else if (str === item.code && mode === "per-mode=symbol" && CodeMatch === false) { 
                result = item["per-mode=symbol"];
                CodeMatch = true;
            } else if(str !== item.code && CodeMatch === false){
                result = str;    
            }
        })
        // console.log(result);
        return result;
    }

    // console.log(SiunitX);


    const charReplace = (sentences, params) => {
        let temp = sentences;
        const result = params.map(item => {
            temp = temp.replaceAll(item.before, item.after);
            return temp;
        })

        return temp;
        
    }

    const replaceFormulasLatex = (str) => {
        const inlineEquation = str.match(/\$(.*?)\$/g);
        const result = inlineEquation.map(i => {
            return i.replace(/\$/g, "");
        })
        // console.log(str.split(" "));
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
  
    const tambahDeskripsi = (title) => {
        setPopUpMenu(true);
        if (selectMapel === "" && title === "Bab Soal") {
            alert("Pilih Mapel Terlebih dahulu");
            setPopUpMenu(false);
        }
        setPopUpTitle(title);
    }

    
    const addData = (e) => {
        let data;
        if (tipeSoal === "essai") {
            data = {
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
        axios.post('/bank_soal',data)
                .then(function (response) {
                    console.log(response.data);
                });
    }
    
    const addDeskripsi = () => {
        setAddDeskripsiClicked(true);
        // const data = {
        //         deskripsi: deskripsi,
        // }

        let tableName;
        let data;
        data = {
            deskripsi : inputDeskripsi
        }
        switch (popUpTitle) {
            case "Mapel":
                tableName = "mapel";
                break;
            case "Kelas":
                tableName = "kelas";
                break;
            case "Bab Soal":
                tableName = "bab_soal";
                data = {
                    deskripsi: inputDeskripsi,
                    id_mapel: selectMapel
                }
                break;
            case "Tingkat Kesulitan":
                tableName = "tingkat_kesulitan";
                break;
        
            default:
                break;
        }

        // console.log(tableName);
        
        axios.post('/' + tableName,data)
                .then(function (response) {
                    console.log(response.data);
                });
        
        setPopUpMenu(false);
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
        }
        fetchdata();
        if (selectMapel !== "") {
            axios.get('/bab_soal?id_mapel=' + selectMapel)
                .then(function (response) {
                    setBabSoal(response.data);
            });
        }
        if (addDeskripsiClicked) {
            fetchdata();
            setAddDeskripsiClicked(false);
        }
    }, [selectMapel, addDeskripsiClicked]);
    
    // const str = ""

    return (
        <div className={styles.container}>
            
             {/* <CKEditor
                    editor={ClassicEditor}
                    config={{
                        toolbar: {
                            items: [
                                'heading', 'MathType', 'ChemType',
                                '|',
                                'bold',
                                'italic',
                                // 'link',
                                // 'bulletedList',
                                // 'numberedList',
                                'imageUpload',
                                // 'mediaEmbed',
                                // 'insertTable',
                                // 'blockQuote',
                                'undo',
                                'redo'
                            ]
                        },
                    }}
                    data="<p>Hello from CKEditor 5 with MathType!</p>"
                     onChange={ ( event, editor ) => {
                        const data = editor.getData();
                        console.log(data);
                    } }
                    onInit={editor => {
                        // You can store the "editor" and use when it is needed.
                        console.log( 'Editor is ready to use!', editor );
                    }}
                /> */}
            
                <br/>
            {popUpMenu ? 
            <div className={styles.popup__menu__container}>
                <div className={styles.popup__menu}>
                    <h5>{popUpTitle}</h5>
                    <input type="text" placeholder={popUpTitle} onChange={(e)=>{setInputDeskripsi(e.target.value)}} />
                    <div className={styles.button__group}>
                    <button onClick={()=>{setPopUpMenu(false)}}>Close</button>
                    <button onClick={addDeskripsi}>Submit</button>
                    </div>    
                </div>
            </div>
            :
            ""
            }
            <span>mata pelajaran </span>
            <select value={selectMapel} onChange={selectMapelChanged}>   
            <option value="" disabled ></option>
            <input type="text" name="" id=""/>
                {mapel.map(item => (
                   <option key={item.id} value={item.id}>{item.deskripsi}</option>
                ))}
                {/* <option value="" onClick={tambahDeskripsi}>+</option> */}
            </select>
            <button onClick={(title) => tambahDeskripsi("Mapel")}>+</button>
            <br/>
            <span>kelas </span>
            <select value={selectKelas} onChange={selectKelasChanged}>
                <option value="" disabled ></option>
                {kelas.map(item => (
                   <option key={item.id} value={item.id}>{item.deskripsi}</option>
                ))}
            </select>
            <button onClick={(title) => tambahDeskripsi("Kelas")}>+</button>
            <br/>
            <span>Bab </span>
            <select value={selectbabSoal} onChange={selectBabSoalChanged}>
                <option value="" disabled ></option>
                {babSoal.map(item => (
                   <option key={item.id} value={item.id}>{item.deskripsi}</option>
                ))}
            </select>
            <button onClick={(title) => tambahDeskripsi("Bab Soal")}>+</button>
            <br/>
            <span>tingkat kesulitan </span>
            <select value={selectTingkatKesulitan} onChange={selectTingkatKesulitanChanged}>
                <option value="" disabled ></option>
                {tingkatKesulitan.map(item => (
                   <option key={item.id} value={item.id}>{item.deskripsi}</option>
                ))}
            </select>
            <button onClick={(title) => tambahDeskripsi("Tingkat Kesulitan")}>+</button>
            <br/>
            <span>tipe soal : </span>
            <select value={tipeSoal} onChange={tipeSoalChanged}>
                <option value="essai">essai</option>
                <option value="pilgan">pilihan ganda</option>
            </select>
            <br />
            {/* <span>Generate Latex : </span> */}
            
            <br />
            <span>soal : </span>
            <br/>
            <div className={styles.editor}>
            <textarea value={soal} onChange={soalType} name="" id="" cols="30" rows="10"></textarea>            
                <Latex dangerouslySetInnerHTML={{__html: soal}}></Latex>
                {/* <div className={styles.text}>
                    <Latex>{'$' +
                        charReplace(soal,
                            [
                                {
                                    'before': String.fromCharCode(32),
                                    'after': String.fromCharCode(92) + String.fromCharCode(32)
                                },
                                {
                                    'before': String.fromCharCode(10),
                                    'after':    String.fromCharCode(92) + String.fromCharCode(92)
                                }
                            ]
                        )
                             +
                        '$'}</Latex>
                </div> */}
                {/* <Latex displayMode={true}>{soal}</Latex> */}
                {/* <p>aslkhdkjasd <Latex>{String.raw`$\int_0^1 x^2\ dx$`}</Latex> asldjlaksd <Latex displayMode={true}>{String.raw`$\int_0^1 x^2\ dx$`}</Latex></p> */}
                {/* <div dangerouslySetInnerHTML={{__html: soal}}></div> */}
                {/* {ReactHtmlParser(soal)} */}
                {/* {Latex.render("c = \\pm\\sqrt{a^2 + b^2}")} */}
                {/* {soal}
                <br/>
                {soal.split("$").map(i => (
                    <div>{i}</div>
                ))}
                <br />
                <h1>subs</h1>
                {soal.substring(
                    soal.lastIndexOf(":") + 1, 
                    soal.lastIndexOf(";")
                )} */}
                {/* <Latex>{ soal }</Latex> */}
              
                {soal.split(" ").map((item,index) => {
                    
                    // console.log(item);
                    // console.log(/(@)(.+?)(@)/s.test(item));
                    //     if (/(@)(.+?)(@)/s.test(item)) {
                        
                    //     const data = item.replaceAll(String.fromCharCode(32), '')
                    //     .replaceAll(String.fromCharCode(13), '')
                    //     .replaceAll("{}&",'');
                    //         console.log("dataadnda : " + data);
                            
                    //     // console.log(/\@(.*?)\@/g.test(data))
                    //         // console.log("data = ="+data);
                    //     // let result = data.replaceAll(/\\si{(.*?)}{.*?}/g, '');
                    //     // result = result.replaceAll(/\\SI|\\si|\\NUM|\\num/g, '');
                    //     let results;
                    //     results = data.replaceAll("@", "$$")
                    //     const findSiunitX = data.match(/\\si{(.*?)}{.*?}/g);
                    //     // console.log(a);
                    //     // return (<Latex key={index} displayMode={true}>{data.replaceAll("@","$")}</Latex>)
                    // //       console.log("data = "+data);
                    // //       console.log("cond = "+/\\SI|\\si|\\NUM|\\num/g.test(data));
                    // //     if (/\\SI|\\si|\\NUM|\\num/g.test(data)) {
                    // //         const a = data.match(/(?<=\\si).*/g); 
                    //     findSiunitX.map((item) => {
                    //         const result = item.match(/(?<=\{)(.*?)(?=\})/g);
                    //         const mode = item.match(/(?<=\[)(.*?)(?=\])/g);
                    //         //         console.log(a);
                            
                        
                    //         if (result.length > 1) {
                    //             let param1;
                    //             let param2;
                    //             if (mode === null) {
                    //                 param1 = replaceSiunitx("", result[0]);
                    //                 param2 = replaceSiunitx("", result[1]);
                    //             } else {
                    //                 param1 = replaceSiunitx(mode[0], result[0]);
                    //                 param2 = replaceSiunitx(mode[0], result[1]);
                    //             }
                    //             // console.log("result = " + param1 + param2);
                    //             results = results.replace(/\\si{(.*?)}{.*?}/s, param1 + param2);
                    //             // return (<Latex key={index}>{abc}</Latex>);
                    //         } else {
                    //             let param1;
                    //             mode === null ? param1 = replaceSiunitx("", result[0]) : param1 = replaceSiunitx(mode[0], result[0]);
                    //             // console.log("result param2 = "+param2);
                    //             // return (<Latex key={index} >{param1}</Latex>);
                    //         }
                    //     });
                    //         return (<Latex key={index}>{results}</Latex>);

                            

                    // }else{
                    //     return (<Latex key={index} displayMode={true}>{data.replaceAll("@","$")}</Latex>)
                    // }
                        
                    // }
                    //  else if (/\$(.*?)\$/g.test(item)) {
                    //     return (<Latex key={index}>{ item + " " }</Latex>)
                    // }
                    //  else if (/\\begin{align*}(.*?)\\end{align*}/g.test(item)) {
                    //     return (<Latex key={index} displayMode={true}>{ item }</Latex>)
                    // }
                    // else if (/\\SI|\\si|\\NUM|\\num/g.test(item)) {
                    //     const result = item.match(/(?<=\{)(.*?)(?=\})/g);
                    //     const mode = item.match(/(?<=\[)(.*?)(?=\])/g);
                        
                    //     if (result.length > 1) {
                    //         let param1;
                    //         let param2;
                    //         if (mode === null) {
                    //             param1 = replaceSiunitx("",result[0]);
                    //             param2 = replaceSiunitx("",result[1]);
                    //         } else {
                    //             param1 = replaceSiunitx(mode[0],result[0]);
                    //             param2 = replaceSiunitx(mode[0],result[1]);
                    //         }
                    //         // console.log("result param2 = "+param2);
                    //         return (<Latex key={index}>{param1 + " " + param2 + " "}</Latex>);
                    //     } else {
                    //         let param1;
                    //         mode === null ? param1 = replaceSiunitx("", result[0]) : param1 = replaceSiunitx(mode[0], result[0]);
                    //         return (<Latex key={index}>{param1}</Latex>);
                    //     }

                    // }
                    // else{
                    //     return (<span key={index}>{ item + " " }</span>);
                    // }
                // })}
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
                    <Latex>{jawaban}
                    {/* <Latex displayMode={true}>$\pi$</Latex> */}
                    </Latex>
                    {/* {ReactHtmlParser(jawaban)} */}
                    {/* {jawaban} */}
                    {/* <div dangerouslySetInnerHTML={{__html: jawaban}}></div> */}
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

export default AddForm
