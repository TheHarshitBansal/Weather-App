export default function SubWeather({data, unit, src, name}){
    return (
        <div className="sub">
            <img src={src} alt="Data" />
            <div className="details">
                <h3>{data} {unit}</h3>
                <h3>{name}</h3>
            </div>
        </div>
    )
}