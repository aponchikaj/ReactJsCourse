
export default function Foods(){
    const FavoriteFoods = ['Shaurma','Khinkali','Sushi','Caesar salad','Tuna & Spagetti','Chicken wings']
    const listedFood = FavoriteFoods.map(f=><p>{f}</p>)
    return(
        <>
            <ul className="text-center font-bold">
                {listedFood}
            </ul>
        </>
    )
}