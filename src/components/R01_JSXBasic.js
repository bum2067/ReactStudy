import { Fragment } from "react/jsx-runtime";

// JSX는 JS + XML 문법
// 반드시 하나의 부모 요소로 감싸야 함.
// 중괄호 {}안에서 JS 표현식을 사용할 수 있다.
// 속성 작성시 카멜방식 (fontWeight, onClick 등)으로 표현한다.

function R01_JSXBasic() {
    
    const name = "Kang";    //문자열
    const isStudent = true;
    const notAStudent = true;
    const score = 88;       //정수
    const upper = (s) => s.toUpperCase();
    const hightlight = {color : "blue", fontWeight : "bold"};

    return (
        <div>
            <p>안녕하세요, {name}님!!</p>
            <p>{isStudent?"학생입니다" : "학생이 아닙니다"}{isStudent}</p>
            <p>{notAStudent&&"학생이 아닙니다."}</p>
            <p>점수 : {score}점, 목표점수 : {score + 12}점</p>
            <p>대문자로 변환 : {upper(name)}</p>
            <p style={hightlight}>폰트색은 파란색, 굵게 표시함</p>
            <button onClick={()=>{alert("버튼을 클릭함")}}>클릭</button>    
        </div>

        // <Fragment>ㅁ
        //    <div></div>
        // </Fragment>

        // <>  
        //     <div></div>
        // </>
    );
}

export default R01_JSXBasic;