const Header = (props) =>{
    const {nombre} = props

    return(
        <div>
            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
                <li>{nombre}</li>
            </ul>
        </div>
    )
}

export default Header