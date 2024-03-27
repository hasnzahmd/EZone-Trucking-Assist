const PaymentCard = ({ banner, opacity, h1, h2, h3, h4, p1, p2, p3 }) => {
    
    const renderListItem = (content) => (
        <div className="flex border-b w-full px-4 py-2 gap-2 items-center">
            <span className="text-gray-300">◎ </span>
            {content}
        </div>
    );

    return (
        <div className="flex flex-col w-full relative">
            {banner && (
                <>
                    <div className={`absolute right-0 -top-4 flex px-2 py-1 text-sm bg-[#e87726] bg-opacity-${opacity} text-white font-bold`}>
                        {banner}
                        <span className={`absolute h-4 w-8 bg-[#e87726] bg-opacity-${opacity} top-0 -left-4`} style={{ clipPath: 'polygon(50% 0px, 0px 100%, 50% 100%)' }}></span>
                    </div>
                </>
            )}
            <div className={`flex flex-col bg-opacity-${opacity} bg-[#e87726] text-white p-4`}>
                <h3 className="text-lg font-semibold uppercase">
                    {h1}
                </h3>
                <div className="flex items-end gap-1">
                    <span className="text-4xl font-bold">
                        {h2}
                    </span>
                    <span>
                        {h3}
                        <span className="text-xs">
                            {h4}
                        </span>
                    </span>
                </div>
            </div>
            <div className="flex flex-col w-full border-b-0 border bg-white">
                {renderListItem(p1)}
                {renderListItem(p2)}
                {renderListItem(p3)}
            </div>
        </div>
    );
};

export default PaymentCard;
