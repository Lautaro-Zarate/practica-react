const ComponentPattern = (props) => {
    const {nombre, edad, direccion, children} = props
    return(
        <div className="Component-pattern">
            <h1>{nombre}</h1>
            <span>{edad}</span>
            <p>{direccion}</p>
            {children}
        </div>
    )
}
export default ComponentPattern;