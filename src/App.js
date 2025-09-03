import logo from './logo.svg';
import './App.css';
import R01_JSXBasic from './components/R01_JSXBasic';
import R02_Component, { R02_ComponentClass } from './components/R02_Component';
import R03_Props, { R03_PropsClass } from './components/R03_Props';
import R04_State, { R04_State_Class } from './components/R04_State'; // 이름 수정
import R05_Event from './components/R05_Event'; // 추가
import R06_Loop_List from './components/R06_Loop_List'; // 추가

function App() {
  const divStyle = {
    border: "1px solid grey",
    borderRadius: "12px",
    padding: "16px",
    marginBottom: "24px",
  }

  return (
    <div className="App" style={{ maxWidth: 700, margin: "50px auto" }}>
      <h1>리액트 사용하기</h1>
      <div style={divStyle}>
        <h1>1.JSX 문법 사용하기</h1>
        <R01_JSXBasic />
      </div>
      <div style={divStyle}>
        <h1>2.컴포넌트 사용하기</h1>
        <R02_Component />
        <R02_ComponentClass />
      </div>
      <div style={divStyle}>
        <h1>3.props 사용하기</h1>
        {/* 문자열은 "", 숫자나 bool등은 {} 사용하자. */}
        <R03_Props name="Sung" age={30} />
        <R03_PropsClass name="sung">45</R03_PropsClass>
      </div>
      <div style={divStyle}>
        <h1>4.State 사용하기</h1>
        <R04_State />
        <R04_State_Class /> {/* 이름 수정 */}
      </div>
      <div style={divStyle}>
        <h1>5.이벤트 사용하기</h1>
        <R05_Event />
      </div>
      <div style={divStyle}>
        <h1>6.반복문과 리스트</h1>
        <R06_Loop_List />
      </div>
    </div>
  );
}

export default App;