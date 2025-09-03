import logo from './logo.svg';
import './App.css';
import R01_JSXBasic from './components/R01_JSXBasic';
import R02_Components, { R02_ComponentsClass } from './components/R02_Components';
import R03_Props, { R03_PropsClass } from './components/R03_Props';
import R04_State from './components/R04_State';

function App() {
  const divStyle = {
    border: "1px solid grey",
    borderRadius:"12px",
    padding:"16px",
    marginBottom:"24px",
  }
  
  return (
    <div className="App" style={{maxWidth:700,margin:"50px auto"}}>
      <h1>리액트 사용하기</h1>
      <div style={divStyle}>
        <h1>1.JSX 문법 사용하기</h1>
        <R01_JSXBasic/>
      </div>
      <div style={divStyle}>
        <h1>3.props 사용하기</h1>
        {/* 문자열은 "", 숫자나 bool등은 {} 사용하자. */}
        <R03_Props name="Sung" age={30}/>
        <R03_PropsClass name="sung">45</R03_PropsClass>
      </div>
       <div style={divStyle}>
        <h1>4.State 사용하기</h1>
        <R04_State/>
      </div>
    </div>
  );
}

export default App;
