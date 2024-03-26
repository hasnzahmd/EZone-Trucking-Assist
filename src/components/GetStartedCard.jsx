import Button from './Button';

const GetStartedCard = (props) => {
    return (
        <>
            <div className="flex flex-col gap-4 items-center text-center">
                {props.icon}
                <h3 className="text-2xl font-bold">
                    {props.title}
                </h3>
                <p className=" w-1/2">
                    {props.description}
                </p>
                <Button text={props.btnText} />
            </div>
        </>
    )
}

export default GetStartedCard