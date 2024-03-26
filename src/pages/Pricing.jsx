import PaymentPlan from "../components/PaymentPlan"

const Pricing = () => {
    return (
        <section className="bg-[#e87726] bg-opacity-10 h-fit py-4 sm:py-44 w-screen -ml-8 md:-ml-16 lg:-ml-20 grid px-8 ">
            <PaymentPlan pricingPage={true} />
        </section>
    )
}

export default Pricing