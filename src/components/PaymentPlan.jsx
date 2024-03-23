import PaymentCard from "./PaymentCard"

const PaymentPlan = () => {
  return (
    <div className="flex flex-col gap-10 sm:gap-16 py-12 justify-center">
        <h1 className="text-white text-5xl font-bold self-center text-center">Choose the Payment Plan</h1>
        <div className="flex flex-col gap-12 sm:flex-row items-center md:px-6 lg:px-20">
            <PaymentCard
                h1='Percentage'
                h2='5%'
                h3='per load'
                h4='(10% for box trucks)'
                p1='Pay as you go'
                p2='Loads of your choice'
                p3='Proactive engagement'
                opacity={50}
            />
            <PaymentCard
                h1='Fixed'
                h2='$399'
                h3='per week'
                p1='Weekly Billing'
                p2='High priority Availability'
                p3='Dispute Management'
                banner='Most Popular'
            />
            <PaymentCard
                h1='Monthly prepaid'
                h2='$1,119'
                h3='per month'
                p1='Dedicated Dispatcher'
                p2='24/7 Support'
                p3='Automated Billing'
                opacity={75}
                banner='Best Value'
            />
        </div>
    </div>
  )
}

export default PaymentPlan