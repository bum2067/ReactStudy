import React from 'react';

function R06_Loop_List(props) {


    const movies2025=[
        {id:1, title:"탑건:매버릭", year:2025},
        {id:2, title:"귀멸의 칼날 : 무한성", year:2025},
        {id:3, title:"F1", year:2025},
        {id:4, title:"좀비딸", year:2025}
    ]

    const movies2024=[
        {title:"범죄도시4", year:2024},
        {title:"오징어게임", year:2024},
        {title:"킬링이브", year:2024},
        {title:"파묘", year:2024}
    ];
    
    return (
        <div>
            <h2>2025영화 순위
                <ul>
                    {movies2025.map((movie)=>
                        (<li key={movie.id}>
                            {movie.title} - {movie.year}
                        </li>
                    ))}
                </ul>
            </h2>
            <h2>2024영화 순위
                <ul>
                    {movies2024.map((movie,index)=>
                        (<li key={index}>
                            {movie.title} - {movie.year}
                        </li>
                    ))}
                </ul>
            </h2>
        </div>
    );
}

export default R06_Loop_List;