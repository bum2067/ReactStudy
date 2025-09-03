import React, { useState } from 'react';

// State는 컴포넌트 내부에서 바뀌는 데이터를 의미한다.
//  -useState hook을 사용해서 상태변수와 상태 변경 함수를 얻을 수 있다.
function R04_State(props) {
    // count: 상태 값을 저장할 변수
    // setcount: 상태 값을 변경할 함수
    // useState(0): 0으로 초기값을 설정
    const [count, setCount]=useState(0);
    return (
        <div>
            <p>현재카운트: {count}</p>
            <button onClick={()=>{setCount(count+1)}}>+1카운트</button>
        </div>
    );
}

export default R04_Stat