import React, {useState} from 'react'
import Sidebar from "../../components/Sidebar";
import jsPDF from "jspdf";
import axios from "axios";
import {IGrade} from "../../types/Student";
import Stdref from "../Login/LogStd";

const generatePDF = () => {
    const bulletin_de_note = new jsPDF('portrait', 'pt', 'a2');
    const src:any = document.getElementById("download");
    bulletin_de_note.html(src).then(() => {
        bulletin_de_note.save('report.pdf');
    });
    console.log(Stdref);
}

const Student: React.FunctionComponent = () => {

    const baseURL = `http://localhost:8080/student/grade/`;

    const [post,setPost] = useState<Partial<IGrade>>({});
    React.useEffect(()=> {
        axios.get(baseURL).then((response) => {
            setPost(response.data[0]);
        });
    },[]);

    let Moyenne = "16.25";
    let credit = "20";
    let date = "10-11-2020";
    let signature=<img src="favicon.ico" width={100} height={100} alt="signature"/>;
    let Moyenne_de_classe = "13.50";
    let Directeur = "Dr Fonenantsoa MAURICA A.";

    
    return (<>
            <Sidebar />
            <header className="site-header container animated fadeInDown">
                <div className="header-wrapper">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="site-branding">
                                <a href="/home"><h1>HEI</h1></a>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <div className="container p-5 bg-white text-black" id="download" >

                <div id="menu-container">
                    <div id="menu-1" className="homepage home-section container">
                        <div className="home-intro text-center">
                            <h1 className='bryan'>Bulletin de note</h1>
                            <h3>Haute Ecole d'Informatique</h3>
                            <p >Lot 2J 161 R Ivandry, 101 Antananarivo, Madagascar <br />+261 34 94 041 16 <br />
                            contact@hei.school</p>
                        </div>
                    </div>
                </div>

                <div className='row'>
                    <div className='col-2'>

                        <div>Numero d'Inscription :</div>
                        <div>Nom :</div>
                        <div>Prenom :</div>
                        <div>Email :</div>
                        <div>Group :</div>
                    </div>
                    <div className='col-10'>
                                        <div>{post?.student?.ref}</div>
                                        <div>{post?.student?.firstName}</div>
                                        <div>{post?.student?.lastName}</div>
                                        <div>{post?.student?.email}</div>
                                        <div>{post?.student?.group?.ref}</div>
                    </div>
                    <div className='col-12'>
                        <div><br /> Inscrit(e) en <i className='p'>première année d’informatique - tronc commun</i>
                        , pour l’année scolaire <i className='p'>2021-2022,</i><br />
                        A obtenu les notes suivantes :</div>
                    </div>
                    <div className='col-12 container p-5'>
                        <div className='row '>
                            <div className='col-2 bulletin'>UE</div>
                            <div className='col-6 bulletin'>Intitule</div>
                            <div className='col-2 bulletin'>Credit</div>
                            <div className='col-2 bulletin'>coefficient</div>
                        </div>
                        <div className='row '>
                            <div className='col-2 bulletin'>{post?.evaluation?.course?.name}</div>
                            <div className='col-6 bulletin'>...</div>
                            <div className='col-2 bulletin'>{post?.evaluation?.course?.credits}</div>
                            <div className='col-2 bulletin'>{post?.evaluation?.course?.coef}</div>
                        </div>
                        <div className='row '>
                            <div className='col-2 bulletin'>Back-End</div>
                            <div className='col-6 bulletin'>Spring, Java</div>
                            <div className='col-2 bulletin'>5</div>
                            <div className='col-2 bulletin'>18</div>
                        </div>
                        <div className='row '>
                            <div className='col-2 bulletin'>OPS</div>
                            <div className='col-6 bulletin'>Deploiment</div>
                            <div className='col-2 bulletin'>5</div>
                            <div className='col-2 bulletin'>14</div>
                        </div>
                        <div className='row '>
                            <div className='col-2 bulletin'>Organisation</div>
                            <div className='col-6 bulletin'>Jira, Docs, Meet</div>
                            <div className='col-2 bulletin'>5</div>
                            <div className='col-2 bulletin'>17</div>
                        </div>
                    </div>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-2'>
                                Resultat general:
                                </div>
                            <div className='col-10'>
                                <p className='p'>Credits acquis:{credit}</p>
                                <p className='p'>Moyenne general : {Moyenne}</p>
                                <p className='p'>Moyenne de Classe :{Moyenne_de_classe}</p>
                            </div>
                        </div>
                    </div>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-8'></div>
                        <div className='col-4'>
                            <p>Fait a Antananarivo, le {date}</p>
                            <p>Le Directeur pedagogique</p>
                            {signature}
                            <p>{Directeur}</p>
                        </div>
                    </div>
                </div>
            </div>
                <button className="bg-danger" onClick={generatePDF} type="button">Telecharger</button>
        </div>

            <footer className="site-footer container text-center mt-2">
                <div className="row">
                    <div className="col-md-12">
                        <div className="main-footer">
                        <p>Project 2 &copy; from <a href="/Student">Digitalisers (git digitalisers eto aveo)</a></p>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}

export default Student;

