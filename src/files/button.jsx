
export default function Btn({color,label}){
    return <button className={`text-${color}`}>{label}</button>
}