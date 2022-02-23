import Card from './card';
import "./App.css";

function App() {
  const plans=[{
    name:"Free",
    price:0,
    features:[
      {name:"Single user",done:true},
      {name:"5GB Storage",done:true},
      {name:"Unlimited Public Projects",done:true},
      {name:"Community",done:true},
      {name:"Unlimited Private Projects",done:false},
      {name:"Dedicated Phone Support",done:false},
      {name:"Free Subdomain",done:false},
      {name:"Monthly Status Report",done:false}]
  },
  {
    name:"Plus",
    price:9,
    features:[
      {name:"Single user",done:true},
      {name:"5GB Storage",done:true},
      {name:"Unlimited Public Projects",done:true},
      {name:"Community",done:true},
      {name:"Unlimited Private Projects",done:true},
      {name:"Dedicated Phone Support",done:true},
      {name:"Free Subdomain",done:true},
      {name:"Monthly Status Report",done:false}
    ]
  },{
    name:"Pro",
    price:49,
    features:[
      {name:"Single user",done:true},
      {name:"5GB Storage",done:true},
      {name:"Unlimited Public Projects",done:true},
      {name:"Community",done:true},
      {name:"Unlimited Private Projects",done:true},
      {name:"Dedicated Phone Support",done:true},
      {name:"Free Subdomain",done:true},
      {name:"Monthly Status Report",done:true}
    ]
  },]
  return (
    <section className="pricing py-5">
      <div className="container">
        <div className="row">
          {
            plans.map((data,i)=>{
              return (<Card name={data.name} key={i} price={data.price} features={data.features}/>)
            })
          }
         
          </div>
        </div>
    </section>
  );
}

export default App;
