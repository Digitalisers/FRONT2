import {useState} from "react";
import '../../App.css';
import {useNavigate} from "react-router-dom";

const LogStd =() => {
    var [Stdref,setStdref]= useState("");
    //const [StdrefError,setStdrefError]= useState('');
    //const [nav,setnav]= useState('');
    //const [navstyle,setnavStyle]= useState<any>(null);
    //const [stylStdref,setStdrefStyle]= useState<any>(null);

    

    let navigate = useNavigate();

    const routeChange = () =>{
        let path = `Home`;
        navigate(path);
    }


    const handleSubmit= (e:any)=>{
        e.preventDefault();

    }
    
    return (
        <>
            <div className="contents order-2 order-md-1 mt-5">
                <div className="container">
                    <div className="row align-items-center justify-content-center">
                        <div className="col-md-7">
                            <div className="mb-4 container-fluid">
                                <div className="position-relative d-flex align-items-center justify-content-center mb-lg-5">
                                    <h1 className="text-uppercase text-yellow"> SIGN IN WITH YOU STD </h1>
                                </div>
                                <p className="mb-4">  </p>
                            </div>
                            <form>
                                <form onSubmit={(e)=>{handleSubmit(e)}}>
                                    <label htmlFor="username">
                                        {Stdref}
                                    </label>
                                    <input type="text" placeholder="write our Stdref" className="input100 one" onChange={(e)=> {
                                                   setStdref(e.target.value);

                                    }} id="Stdref"/>
                                        <button onChange={
                                            (e)=>
                                            handleSubmit(e)
                                    }
                                    onClick={
                                        routeChange
                                    }
                                            className="relative transition-colors flex w-full justify-center rounded-md
                                                    border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-light
                                                    hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                            id={"Social"}>  Log In
                                    </button>
                                </form>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
export default LogStd;