import React from 'react'
import styles from './styles.module.css'
import Button from '../../component/Button'

function HomeSoal(props) {
    return (
        <div className={styles.container}>
            <div className={styles.button__group}>
                <Button title="Tambah Soal" link="/form_soal" />
                <Button title="Edit Soal" link="/form_soal" />
                <Button title="Hapus Soal" />
           </div>
            
            <select name="" id="">
                <option value="1">1</option>
                <option value="1">2</option>
                <option value="1">3</option>
                <option value="1">4</option>
            </select>
            <br/>
            <strong>Soal :</strong>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque velit laborum tempore ipsa accusamus consequuntur exercitationem fugiat eos distinctio pariatur aliquam, deserunt corporis similique error possimus dolorum. In, explicabo deserunt.</p>
            <p>jawaban</p>
            {/* <a href="#0"></a> */}
        </div>
    )
}

export default HomeSoal
