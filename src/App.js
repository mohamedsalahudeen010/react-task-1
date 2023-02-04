import logo from './logo.svg';
import './App.css';
import {useState} from 'react';


   /*<<<<<<Task>>>>>> */

  //  const data = 
  // // [{cardtype:"free"},{cardtype:"pro"},{cardtype:"plus"}]
function App() {
  let data=[

    {
      type:"Free",
      price:"$0 / Month",
      user:"✔️ Single User",
      storage:"✔️ 5GB",
      public:"✔️ Unlimited Public Projects",
      community:"✔️ Community Access",
      private:"❌ Unlimited Private Projects",
      phoneSupport:"❌ Dedicated Phone Support",
      subdomain:"❌ Free Subdomains",
      status:"❌ Monthly Status Reports",
      bcolor:" rgb(219, 195, 166)",
      
    },
    {
      type:" Plus",
      price:" $9 / Month",
      user:"✔️ 5 Users",
      storage:"✔️ 50GB",
      public:"✔️ Unlimited Public Projects",
      community:"✔️ Community Access",
      private:"✔️ Unlimited Private Projects",
      phoneSupport:"✔️ Dedicated Phone Support",
      subdomain:"✔️ Free Subdomains",
      status:"❌ Monthly Status Reports",
      bcolor:" rgb(231, 198, 158)",
      
    },
    {
      type:"Pro",
      price:"$49 / Month",
      user:"✔️ Unlimited Users",
      storage:"✔️ 150GB",
      public:"✔️ Unlimited Public Projects",
      community:"✔️ Community Access",
      private:"✔️ Unlimited Private Projects",
      phoneSupport:"✔️ Dedicated Phone Support",
      subdomain:"✔️ Unlimited Free Subdomains",
      status:"✔️ Monthly Status Reports",
      bcolor:" rgb(234, 190, 138)",
     
    }
  ]
  return (
    <div className="App">
     {
      data.map((ele,index)=>(
        <SampleCard
        key={index}
        index={index}
        type={ele.type}
        price={ele.price}
        user={ele.user}
        storage={ele.storage}
        public={ele.public}
        community={ele.community}
        private={ele.private}
        phoneSupport={ele.phoneSupport}
        subdomain={ele.subdomain}
        status={ele.status}
        bcolor={ele.bcolor}/>
      ))
     }
       </div>
  );
}

export default App;

function SampleCard (props) {
    return (
      <div style={{backgroundColor:props.bcolor}} className="card-content" >
        <h4 className={`type${props.index}`}>{props.type}</h4>
        <h4 className={`price${props.index}`}>{props.price}</h4>
        <hr></hr>
        <p className={`user${props.index}`}> {props.user}</p>
        <p className={`storage${props.index}`}> {props.storage}</p>
        <p className={`public${props.index}`}>{props.public}</p>
        <p className={`community${props.index}`}> {props.community}</p>
        <p className={`private${props.index}`}> {props.private}</p>
        <p className={`phoneSupport${props.index}`}> {props.phoneSupport}</p>
        <p className={`subdomain${props.index}`}> {props.subdomain}</p>
        <p className={`status${props.index}`}> {props.status}</p>
        <button type="submit" className="btn">Button</button>
      </div>
    )
  }