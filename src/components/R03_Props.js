import React, {Component} from 'react';
//rsf
//props: 부모컴포넌트-> 자식 컴포넌트로 전달하는 데이터
//  - props는 읽기 전용이고, 그래서 자식이 직접 수정X
//  - 구조분해할당을 사용하면 가독성에 좋음

//부모컴포넌트에서 props로 name:kang, age:30 전달
function R03_Props(props) {
    //const name = props.name;
    //const age = props.age;
    const {name, age} = props; //구조분해할당 문법(ES6추가)
    return (
        <div>
            <p>안녕하세욥, <strong>{name}</strong>({age}세)님!</p>
        </div>
    );
}


function R03_Props2({name, age}) {
    return (
        <div>
            <div>{name}, {age}</div>
        </div>
    );
}

function R03_Props3({props}) {
    return (
        <div>
            <div>{props.name},{props.age}</div>
        </div>
    );
}


//클래스형 컴포넌트 사용
//rcc

class R03_PropsClass extends Component {
    render() {
        const{name, children} = this.props; //구조분해할당방법
        return (
            <div>
                <h2>컴포넌트입니다. : {name}</h2>
                <h2>클래스형 입니다. : {children}</h2>
            </div>
        );
    }
}


export default R03_Props;
export {R03_Props2,R03_Props3,R03_PropsClass};