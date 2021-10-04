import React,{ useEffect, useState } from 'react';
import Chart from "react-apexcharts";
import {Row, Col, Card, Table} from 'react-bootstrap';
import axios from '../../App/axios'
import avatar2 from '../../assets/images/user/avatar-2.jpg';
import avatar4 from '../../assets/images/user/avatar-4.jpg';

import phone1 from '../../assets/images/widget/PHONE1.jpg';
import phone2 from '../../assets/images/widget/PHONE2.jpg';
import phone3 from '../../assets/images/widget/PHONE3.jpg';

import seoAnalytics1 from './chart/sale-seo-analytics-1';
import seoAnalytics2 from './chart/sale-seo-analytics-2';
import seoAnalytics3 from './chart/sale-seo-analytics-3';
import seoAnalytics4 from './chart/sale-seo-analytics-4';

import secEcommerceChartLine from './chart/sale-sec-ecommerce-chart-line';
import secEcommerceChartBar from './chart/sale-sec-ecommerce-chart-bar';

import Aux from "../../hoc/_Aux";
import DEMO from "../../store/constant";
import monthlyProfilt1 from "../Widget/chart/monthly-profit-1";
import monthlyProfilt2 from "../Widget/chart/monthly-profit-2";

// class Sales extends React.Component {
function Sales(props) {

    const [transactions, setTransactions] = useState([]);
    const [totalEarnigs, setTotalEarnigs] = useState(0);
    const [totalTransactions, setTotalTransactions] = useState("");
    const [totalMember, setTotalMember] = useState("");
    const [totalMentor, setTotalMentor] = useState("");
  
         useEffect(() => {
        async function fetchdata() {
            
            axios.get('/transaction_history')
                .then(function (response) {
                    setTransactions(response.data);
                });
            axios.get('/transaction_history?transaction=totalTransaction')
                .then(function (response) {
                    setTotalTransactions(response.data[0].total);
                });
            axios.get('/users_api?member_count=total')
                .then(function (response) {
                    // console.log("212");
                    // console.log(response.data);
                    setTotalMember(response.data[0].total);
                });
            //  axios.get('/users_api?mentor_count="ad')
            //     .then(function (response) {
            //         setTotalMentor(response.data);
            //     });
            axios.get('/transaction_history?transaction=totalEarning')
                .then(function (response) {
                    setTotalEarnigs(response.data[0].total);
                });
            
        }
        fetchdata();
         },[]);
        
        const getStatusClass = (status)=>{
            if(status === "pending"){
                return "badge badge-light-warning";
            }else if(status === "sukses"){
                return "badge badge-light-success";
            }else{
                return "badge badge-light-danger";
            }
        }
        return (
            <Aux>
                <Row>
                    <Col md={6} xl={4}>
                         <Card>
                                <Card.Body>
                                        <Row className="align-items-center">
                                            <Col sm={8}>
                                                <h4 className="text-c-yellow">Rp. {totalEarnigs}</h4>
                                                <h6 className="text-muted m-b-0">Total Pendapatan</h6>
                                            </Col>
                                            <Col sm={4} className="text-right">
                                                <i className="feather icon-bar-chart-2 f-28"/>
                                            </Col>
                                        </Row>
                                    </Card.Body>
                                    <Card.Footer className="bg-c-yellow">
                                        <Row className="row align-items-center">
                                            <Col sm={9}>
                                                <p className="text-white m-b-0">April</p>
                                            </Col>
                                            <Col sm={3} className="text-right">
                                                <i className="feather icon-trending-up text-white f-16"/>
                                            </Col>
                                        </Row>
                                    </Card.Footer>
                                </Card>
                    </Col>
                    <Col md={6} xl={4}>
                        <Card>
                                    <Card.Body>
                                        <Row className="align-items-center">
                                            <Col sm={8}>
                                                <h4 className="text-c-green">{totalTransactions}</h4>
                                                <h6 className="text-muted m-b-0">Total Transaksi</h6>
                                            </Col>
                                            <Col sm={4} className="text-right">
                                                <i className="feather icon-file-text f-28"/>
                                            </Col>
                                        </Row>
                                    </Card.Body>
                                    <Card.Footer className="bg-c-green">
                                        <Row className="row align-items-center">
                                            <Col sm={9}>
                                                <p className="text-white m-b-0">April</p>
                                            </Col>
                                            <Col sm={3} className="text-right">
                                                <i className="feather icon-trending-up text-white f-16"/>
                                            </Col>
                                        </Row>
                                    </Card.Footer>
                                </Card>
                    </Col>
                    {/* <Col md={6} xl={3}>
                        <Card>
                                    <Card.Body>
                                        <Row className="align-items-center">
                                            <Col sm={8}>
                                                <h4 className="text-c-red">{totalMentor}</h4>
                                                <h6 className="text-muted m-b-0">Jumlah Mentor</h6>
                                            </Col>
                                            <Col sm={4} className="text-right">
                                                <i className="feather icon-user f-28"/>
                                            </Col>
                                        </Row>
                                    </Card.Body>
                                    <Card.Footer className="bg-c-red">
                                        <Row className="row align-items-center">
                                            <Col sm={9}>
                                                <p className="text-white m-b-0"></p>
                                            </Col>
                                            <Col sm={3} className="text-right">
                                                <i className="feather icon-trending-up text-white f-16"/>
                                            </Col>
                                        </Row>
                                    </Card.Footer>
                                </Card>
                    </Col> */}
                    <Col md={6} xl={4}>
                        <Card>
                                    <Card.Body>
                                        <Row className="align-items-center">
                                            <Col sm={8}>
                                                <h4 className="text-c-blue">{totalMember}</h4>
                                                <h6 className="text-muted m-b-0">Jumlah Member</h6>
                                            </Col>
                                            <Col sm={4} className="text-right">
                                                <i className="feather icon-users f-28"/>
                                            </Col>
                                        </Row>
                                    </Card.Body>
                                    <Card.Footer className="bg-c-blue">
                                        <Row className="row align-items-center">
                                            <Col sm={9}>
                                                <p className="text-white m-b-0"></p>
                                            </Col>
                                            <Col sm={3} className="text-right">
                                                <i className="feather icon-trending-up text-white f-16"/>
                                            </Col>
                                        </Row>
                                    </Card.Footer>
                                </Card>
                    </Col>
                    <Col xl={12} md={12}>
                        <Card className="table-card latest-activity-card">
                            <Card.Header>
                                <h5>Transaksi Terbaru</h5>
                            </Card.Header>
                            <Card.Body className='pb-0'>
                                <Table responsive hover borderless>
                                    <thead>
                                    <tr>
                                        <th>Nama User</th>
                                        <th>Order ID</th>
                                        {/* <th>Photo</th> */}
                                        <th>Tipe Pembayaran</th>
                                        <th>Jumlah Pembayaran</th>
                                        <th>Deskripsi</th>
                                        <th>Date</th>
                                        <th>Status</th>
                                        {/* <th>Action</th> */}
                                    </tr>
                                    </thead>
                                    <tbody>
                                     {transactions.map(item => (
                                        <tr key={item.id}>
                                        <td>{item.username}</td>
                                        <td>{item.id}</td>
                                        {/* <td><img src={phone1} alt="" className="img-fluid"/></td> */}
                                        <td>{item.payment_type}</td>
                                        <td>{item.jumlah}</td>
                                        <td>{item.description}</td>
                                        <td>{item.created_at}</td>
                                        <td><label className={getStatusClass(item.status)}>{item.status}</label></td>
                                        {/* <td><a href={DEMO.BLANK_LINK}><i className="icon feather icon-edit f-w-600 f-16 m-r-15 text-c-green"/></a><a href={DEMO.BLANK_LINK}><i className="feather icon-trash-2 f-w-600 f-16 text-c-red"/></a></td> */}
                                    </tr>
                                    ))}
                                   
                                    </tbody>
                                </Table>
                            </Card.Body>
                        </Card>
                    </Col>

                   
                   
                </Row>
            </Aux>
        );
    // }
}

export default Sales;