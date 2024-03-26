
const PaymentCard = (props) => {
  return (
    <div className="flex flex-col w-full relative">
        {
            props.banner && 
            <div className={`absolute right-0 -top-4 flex px-2 py-1 text-sm bg-[#e87726] bg-opacity-${props.opacity} text-white font-bold`}>
                {props.banner}
                <span className={`absolute h-4 w-8 bg-[#e87726] bg-opacity-${props.opacity} top-0 -left-4`} style={{clipPath: 'polygon(50% 0px, 0px 100%, 50% 100%)'}} ></span>
            </div>
        }
        <div className={`flex flex-col bg-opacity-${props.opacity} bg-[#e87726] text-white p-4`}>
            <h3 className="text-lg font-semibold uppercase">
                {props.h1}
            </h3>
            <div className="flex items-end gap-1">
                <span className="text-4xl font-bold">
                    {props.h2}
                </span>
                <span>
                    {props.h3}
                    <span className="text-xs">
                        {props.h4}
                    </span>
                </span>
            </div>
        </div>
        <div className="flex flex-col w-full border-b-0 border bg-white">
            <div className="flex border-b w-full px-4 py-2 gap-2 items-center">
                <span className="text-gray-300">◎ </span>
                    {props.p1}
            </div>
            <div className="flex border-b w-full px-4 py-2 gap-2 items-center">
                <span className="text-gray-300">◎ </span>
                    {props.p2}
            </div>
            <div className="flex border-b w-full px-4 py-2 gap-2 items-center">
                <span className="text-gray-300">◎ </span>
                    {props.p3}
            </div>
        </div>
    </div>
  )
}

export default PaymentCard