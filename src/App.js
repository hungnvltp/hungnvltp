import React, { Component } from 'react';

import './component/App.css';

import Qlsp from './component/Qlsp';


function App() {
  return (
    <div className="App">
      <Qlsp />
    </div>
  )
}
export default App;


// class App extends React.Component {
//   constructor(progs) {
//     super(progs);
//     this.state = {
//       product: {
//         name: "", company: "", phoneNumber: "", information: "", age: ""
//       },
//       formDangNhap: true,
//       product_2: [

//       ],
//       submit: false,
//       update: false,
//       result: "",
//     }
//   }


//   onChangeName = (e) => {
//     this.setState({
//       product: {
//         ...this.state.product,
//         name: e.target.value,
//       }
//     })
//   }
//   onChangeCompany = (e) => {
//     this.setState({
//       product: {
//         ...this.state.product,
//         company: e.target.value,
//       }
//     })
//   }

//   onChangeNumber = (e) => {
//     this.setState({
//       product: {
//         ...this.state.product,
//         phoneNumber: e.target.value,
//       }
//     })
//   }
//   onInformation = (e) => {
//     this.setState({
//       product: {
//         ...this.state.product,
//         information: e.target.value,
//       }
//     })
//   }
//   onAge = (e) => {
//     this.setState({
//       product: {
//         ...this.state.product,
//         age: e.target.value,
//       }
//     })
//   }

//   deteleForm = (e) => {
//     alert("xóa")

//     this.setState({
//       formDangNhap: false
//     })
//   }
//   Submit = () => {
//     let { product, product_2 } = this.state;
//     product_2.push(product);
//     this.setState({
//       product_2,
//       formDangNhap: false,
//       product: { name: "", company: "", phoneNumber: "", information: "", age: "" }
//     })
//   }
//   edit = (index) => {
//     alert("edit")
//     alert(index)
//     const { product_2 } = this.state;

//     this.index = index;
//     this.setState({
//       formDangNhap: true,
//       product: product_2[index],
//       update: true

//     })
//   }
//   delete = (index) => {
//     alert(index)
//     alert("xóa")
//     const { product_2 } = this.state;
//     product_2.splice(index, 1)
//     this.setState({
//       product_2
//     })

//   }
//   timKiem = () => {
//     alert("search")
//     const { product_2, result } = this.state;

//     let sourceArray = product_2;
//     let newArray = [];
//     if (result.length <= 0) {
//       newArray = sourceArray;
//     } else {
//       result.toLowerCase();
//       for (let item of sourceArray) {
//         if ((item.name.toLowerCase().indexOf(result) > -1) || (item.company.toLowerCase().indexOf(result) > -1)
//           || (item.phoneNumber.toLowerCase().indexOf(result) > -1) || (item.age.toLowerCase().indexOf(result) > -1)
//           || (item.information.toLowerCase().indexOf(result) > -1)) {
//           newArray.push(item);
//         }
//       }
//     }
//     this.setState({
//       product_2: newArray,
//       result: result
//     });
//   }
//   render() {

//     let { name, company, phoneNumber, information, age } = this.state.product;
//     console.log();
//     return (
//       <div id="App">
//         <div className="Title">
//           <Title />

//         </div>
//         <div className="sss">
//           <FormToDo

            // valueName={name}
            // valuePhone={phoneNumber}
            // valueCompany={company}
            // valuePosition={information}
            // valueAge={age}


            // deteleForm={this.deteleForm}
            // onChangeName={this.onChangeName}
            // onChangeNumber={this.onChangeNumber}
            // onChangeCompany={this.onChangeCompany}
            // onInformation={this.onInformation}
            // onAge={this.onAge}
            // Submit={this.Submit}


//           />
//         </div>
//         <div className="sss">
//           <Table product_2={this.state.product_2}
//             edit={this.edit}
//             delete={() => this.delete(this.index)}
//             timKiem={this.timKiem}
//           />

//         </div>
//       </div>
//     );
//   }
// }


// export default App;
