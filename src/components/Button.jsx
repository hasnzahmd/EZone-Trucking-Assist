const Button = (props) => {
    return (
        <button
            onClick={props.onClick}
            className={`bg-[#e87726] text-white text-sm font-medium py-[0.8rem] px-4 rounded ${props.width ? '' : 'sm:w-max'} ${props.borderWhite && 'border border-white'} transform 
      focus:outline-none transition duration-150 ease-in-out active:scale-90 uppercase`}
        >
            {props.text}
        </button>
    );
};

export default Button;
