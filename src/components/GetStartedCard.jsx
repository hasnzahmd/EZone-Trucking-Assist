import Button from './Button';

const GetStartedCard = ({ icon, title, description, btnText }) => {
    return (
        <div className="flex flex-col gap-4 items-center text-center">
            {icon}
            <h3 className="text-2xl font-bold">
                {title}
            </h3>
            <p className="w-1/2">
                {description}
            </p>
            <Button text={btnText} />
        </div>
    );
};

export default GetStartedCard;
