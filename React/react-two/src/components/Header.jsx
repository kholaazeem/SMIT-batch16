import ThemeBtn from '../utils/ThemeBtn'

export const Header = () => {
    // let name = "Haya"
    // const arr = ["sana","raza","shama"]
    return (
        <div>

            {/* {name} */}

            {/* {arr[0]}, {arr[1]}, {arr[2]} */}

            {/* {1+ 19} */}
            <br />
            <ThemeBtn />

        </div>
    )
}


export const Footer = () => {

    const arr = [{
        name: "sana",
        rollno: 672334
    }, {
        name: "raza",
        rollno: 672234
    }, {
        name: "iqra",
        rollno: 672324
    }]
    return (
        <div>

            {arr.map((item, index) => (
                <div key={index} style={{backgroundColor:'green',color:'white'}}>
                    <h3>{item.name}</h3>
                    <p>{item.rollno}</p>
                </div>
            ))}
        </div>

    )
}
// export {Header,Footer}

