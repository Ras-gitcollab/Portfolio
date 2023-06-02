const AboutDetails = () => {
  const propArray=[
    {'name':'Birthday' , 'value':'Jan 1st, 2000'},
    {'name':'City' , 'value':'Bangalore, India'},
    {'name':'Phone' , 'value':'+91 8886290829'},
    {'name':'Email' , 'value':'rashikajaggi999@gmail.com'},
  ];
  return (
    <div style={{display:'grid',gridTemplateColumns:'repeat(2,1fr)'}}>
      {propArray.map((props,index)=>(
        <div key={index} style={{display:"flex", alignItems:"center"}}>
           <i className="fas fa-angle-right" style={{
            color:"#5782cb",
            marginRight:10
           }}></i>
           <div><p><b>{props.name}:</b> {props.value}</p></div>
        </div>
      ))}
    </div>

   
  );
};
export default AboutDetails;
