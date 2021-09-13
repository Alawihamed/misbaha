import React,{useState} from 'react';

function Home(props){

    let [data,setData]=useState(localStorage.getItem(props.word));
    const click = () =>
    {
        setData(++data);
        localStorage.setItem(props.word,data);  
    }
    const reset =() =>
    {
        setData(0);
        localStorage.setItem(props.word,0);
    }
    
    return(
        <div className="row custom">
            <div className="card">
                <h3 className="text-danger my-3">{props.word}</h3>
                <p className="text-danger">{data}</p>
                <button className="btn btn-primary my-3 btn-click" onClick={click}>احسب</button>
                <button className="btn btn-danger my-3" onClick={reset}>تصفير العداد</button>
            </div>

        </div>
    )
}
export default Home;