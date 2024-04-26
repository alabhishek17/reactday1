const Title=()=>{
    return <h1>Topic Covered</h1>
}


const MyPara1=()=>{
    return (<p>The following is a list of all the topics we cover in the MDN learning area</p>)
}
const MyPara2=()=>{
    return (<p>provides a practical introduction to web developement for complete beginners</p>)
}
const MyPara3=()=>{
    return (<p>CSS is the language that we use to control our web content's style and layout, as well as adding behavior like animation. This topic provides comprehensive coverage of CSS</p>)
}


const MyFirstReact=()=>{
    // const para=["MyPara1","MyPara2","MyPara3"]
    return (<div style={{width:"50%", margin:"40px", marginLeft:"25%", boxShadow:"10px 5px 5px"}}>
        <Title/>
        <a href="">Getting started with the web</a>
        <MyPara1/>
        <a href="">HTML - Structuring the web</a>
        <MyPara2/>
        <a href="">CSS- Styling the web</a>
        <MyPara3/>
        {/* <p>ds6ssykdudkiu6we7isiksis</p> */}
        {/* {
            para.map(p1=>{
             return <p>{p1}</p>
            })
        } */}
    </div>)
}

ReactDOM.render(<MyFirstReact />,document.getElementById("root"));

