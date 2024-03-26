import { FaRegPaperPlane } from "react-icons/fa";
import { LiaUserEditSolid, LiaShippingFastSolid } from "react-icons/lia";
import Button from "../components/Button"
import PaymentPlan from "../components/PaymentPlan"
import GetStartedCard from "../components/GetStartedCard";

const Home = () => {
    return (
        <main className="flex flex-col">

            <section className="pt-12 flex flex-col sm:flex-row gap-16 sm:gap-0">
                <div className="flex gap-10 flex-col justify-center">
                    <h1 className="font-bold text-5xl"><span>We get the loads, <br />You drive</span></h1>
                    <div className="flex flex-col text-xl gap-2 sm:gap-[0.6rem]">
                        <p>We find the best paying loads in the market.</p>
                        <p className="lg:w-[80%]">Get a personal dispatcher assigned for you and don't worry any more about your payments or empty miles.</p>
                        <p>Dispatch has never been so good!</p>
                    </div>
                    <Button text='hire a dispatcher today' />
                </div>
                <img src="/truck.webp" alt="truck" className=" size-fit self-center sm:w-[51%] md:size-[60%] ml-10 -mr-8 md:-mr-16 lg:-mr-20" />
            </section>

            <section className="self-center flex flex-col gap-4 items-center pt-16 sm:px-2 md:px-0 sm:flex-row">
                <span className="text-6xl sm:text-7xl md:text-8xl font-bold">53'</span>
                <div className="text-3xl font-bold sm:text-4xl md:text-5xl">
                    <span>Dry Vans, Reefers,<br />and Flatbeds Only.</span>
                </div>
                <div className="flex flex-col text-center sm:text-left text-xl">
                    <span>A Bigger<br />Equipment makes<br />you more Money!</span>
                </div>
            </section>

            <section className="pt-20 flex flex-col md:flex-row gap-6 md:gap-12">
                <div className="sm:size-[90%] md:size-[250%] -ml-8 -mr-8 md:-ml-16 lg:-ml-20"><img src="/man.jpg" alt="truck" /></div>
                <div className="flex gap-8 flex-col justify-center text-lg sm:text-base md:text-lg 1.5xl:-ml-[40rem] sm:items-center md:items-start">
                    <h1 className="font-bold text-4xl md:text-3xl lg:text-4xl">Hit the road on your<br />terms, you're the boss</h1>
                    <p className=" sm:px-24 md:px-0">
                        Loads, rates and routes are your choice, no force dispatching. We make sure you get the
                        best freight at the best rate and get paid on time. Documentation, prices and fees are
                        disclosed upfront.
                    </p>
                    <div className="flex flex-row gap-4">
                        <input type="text" placeholder="Email Address*" className=" text-sm border border-orange-500 rounded px-4 w-[15rem] md:w-[20rem]" />
                        <Button text='start today!' />
                    </div>
                </div>
            </section>

            <section className="hidden sm:block mt-40 sm:mb-28 lg:mb-0 self-center w-[100vw] sm:px-10 lg:px-2 relative">
                <img src="/man2.webp" alt="truck" className="w-full rounded-[2rem] shadow-2xl" />
                <div className="absolute top-1/2 right-0 transform -translate-y-1/2 pr-16 flex flex-col sm:gap-2 md:gap-6 lg:gap-10">
                    <h2 className=" text-white font-bold sm:text-2xl md:text-4xl">Call us today, get loaded <br /> and be profitable now</h2>
                    <Button text='start today' />
                </div>
            </section>

            <section className="bg-[url('/truckpriceimg_bac.webp')] bg-repeat-round mt-10 h-fit py-4 sm:py-44 w-screen -ml-8 md:-ml-16 lg:-ml-20 grid px-8 ">
                <PaymentPlan />
            </section>

            <section className="bg-[#e87726] bg-opacity-20 flex justify-center w-screen -ml-8 md:-ml-16 lg:-ml-20">
                <div className="w-2/3">
                    <div className="flex flex-col gap-6 py-32">
                        <h2 className="text-2xl sm:text-4xl text-[#e87726] text-center font-bold">
                            From the day my company hit the road Trucking Assist is the one that has my company
                            moving. Great service, transparency and very friendly.
                        </h2>
                        <div className="flex justify-center">
                            <h2 className="text-lg">
                                - Eduardo Flores, F &amp; S USA Transport Corp.&#x200B;
                            </h2>
                        </div>
                    </div>
                </div>
            </section>

            <section className="flex flex-col gap-10 items-center">
                <div className=" justify-center -mt-32">
                    <img src="/truck3.webp" alt="trucks" />
                </div>
                <div className="flex flex-col gap-20 sm:gap-14">
                    <div className="flex justify-center text-center">
                        <h2 className="text-4xl sm:text-5xl font-bold">
                            Getting started is easy
                        </h2>
                    </div>
                    <div className="flex flex-col justify-center sm:flex-row gap-16 sm:gap-8">
                        <GetStartedCard
                            icon={<FaRegPaperPlane size={70} color="#e87726" />}
                            title="Documents"
                            description="MC Authority, Certificate of Insurance, W9, Form"
                            btnText='send documents'
                        />
                        <GetStartedCard
                            icon={<LiaUserEditSolid size={70} color="#e87726" />}
                            title="Sign Agreement"
                            description="Sign a quick and easy dispatch service level agreement"
                            btnText='request agreement'
                        />
                        <GetStartedCard
                            icon={<LiaShippingFastSolid size={70} color="#e87726" />}
                            title="Hit the Road!"
                            description="We start dispatching your truck immediately"
                            btnText='hire a dispatcher'
                        />
                    </div>
                </div>
            </section>

            <section className="flex flex-col w-full items-center mt-12 sm:mt-28">
                <div className="flex flex-col sm:flex-row justify-center items-center">
                    <div className="flex flex-col w-full gap-8 py-8">
                        <h2 className="text-4xl sm:text-5xl font-bold">
                            Top dedicated truck dispatching service
                        </h2>
                        <p className="text-xl">
                            As truck dispatchers providing freight dispatching services, we take a low percentage of
                            your rate. This is an incentive to negotiate high rates for you. The more money you make,
                            the more money we make.
                        </p>
                        <p className="text-xl">
                            There are NO contracts. It is difficult to be profitable and that is why we charge only a
                            small Percentage Fee for any premium load we find. Other dispatchers and brokers charge much
                            higher fees and do not care about the service they provide to their drivers, we believe in
                            long term relationships, our main focus is a great truck dispatch and happy customers.
                        </p>
                        <Button text='hire a dispatcher today' width={true} />
                    </div>
                    <div className="flex flex-col w-full justify-end">
                        <img src="/callgirl.webp" alt="caller" className="w-full" />
                    </div>
                </div>
            </section>

            <section className="flex bg-[#e87726] py-16 justify-center w-screen -ml-8 md:-ml-16 lg:-ml-20">
                <div className="flex flex-col text-white sm:items-center w-full sm:w-2/3 gap-6 px-8 sm:px-0">
                    <h2 className="text-4xl sm:text-3xl lg:text-5xl font-bold">
                        What is truck dispatching service?
                    </h2>
                    <p className="lg:text-xl sm:text-center">
                        A Truck Dispatch Service help truck drivers and owner operators who have their own trucking
                        company manage the load booking and back-office processes of running a trucking company. Some dispatchers specialize
                        only in booking loads, while others, like Trucking Assist, offer a wide variety of services such as Invoice Management and
                        TONU/Detention Requests.
                    </p>
                    <Button text='hire a dispatcher today' borderWhite={true} />
                </div>
            </section>

            <section className="flex bg-[url('/background.webp')] bg-cover w-screen -ml-8 md:-ml-16 lg:-ml-20">
                <div className="flex bg-black bg-opacity-30 w-full justify-center px-8 md:px-16 lg:px-20">
                    <div className="py-16 text-white">
                        <h2 className="py-10 sm:text-4xl text-3xl m font-bold lg:w-1/2 w-full">
                            Trucking Assist is your freight planning partner.
                        </h2>
                        <div className="bg-opacity-0">
                            <div className="flex flex-col py-5 gap-8 w-full lg:w-1/2 text-xl leading-8">
                                <p>
                                    Our services are mainly for owner operators, independent truckers &amp; carriers with
                                    their own DOT or MC authority. It’s in our best interest for us to find the best
                                    paying loads available for you. We dispatch dry-vans, reefers , flatbeds. We find you
                                    the best truck loads in the US. We help you improve your profits and experience.
                                    Whether you are looking for your next load or you need a load that takes you home,
                                    Trucking Assist is committed to your goals. For us to be successful, you must be
                                    successful first. We are the best dispatch service in the US.
                                </p>
                                <Button text='start today' width={true} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="flex bg-[#e87726] bg-opacity-20 justify-center  w-screen -ml-8 md:-ml-16 lg:-ml-20">
                <div className="flex flex-col sm:grid grid-cols-3 gap-5 py-16 px-8 md:px-16 lg:px-20">
                    <div className="flex flex-col w-full gap-8">
                        <h2 className="text-4xl font-bold text-[#e87726]">
                            Tell us about your goals and lets us help
                        </h2>
                        <p className="text-lg">
                            Having some idea of what your company needs or what are your hauling plans and desires
                            will help us provide the best dispatch service solution for your trucking company.
                            Complete the form now and start today!
                        </p>
                    </div>
                    <div className="p-4">
                        <div className="flex flex-col gap-8 w-full">
                            <select name="" id="" className="border border-[#e87726] rounded-md py-3 px-2">
                                <option disabled selected value="Interested Plans">Interested Plans</option>
                                <option value="Percentage">Percentage</option>
                                <option value="Weekly">Weekly</option>
                                <option value="Prepaid">Prepaid</option>
                            </select>
                            <select name="" id="" className="border border-[#e87726] rounded-md py-3 px-2">
                                <option disabled selected value="Interested Plans">How many trucks do you have?</option>
                                <option value="1 truck">1 truck</option>
                                <option value="2 trucks">2 trucks</option>
                                <option value="Between 3 - 10 trucks">Between 3 - 10 trucks</option>
                            </select>
                            <input type="text" placeholder="Email Address" className="border border-[#e87726] rounded-md py-3 px-3 w-full placeholder:text-[#e87726] placeholder:font-bold placeholder:text-sm" />
                        </div>
                        <div className="mt-6">
                            <div className="flex flex-col gap-1">
                                <span className="font-bold">Which type of truck do you have?</span>
                                <label className="flex items-center gap-x-2">
                                    <input type="checkbox" className="" />
                                    <span>Dry Van</span>
                                </label>
                                <label className="flex items-center gap-x-2">
                                    <input type="checkbox" className="" />
                                    <span>Reefer</span>
                                </label>
                                <label className="flex items-center gap-x-2">
                                    <input type="checkbox" className="" />
                                    <span>Flatbed</span>
                                </label>
                                <label className="flex items-center gap-x-2">
                                    <input type="checkbox" className="" />
                                    <span>Power only</span>
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className="w-full p-4 flex flex-col gap-8">
                        <input type="text" placeholder="Income desired?" className="border rounded-md  border-[#e87726] p-3 w-full placeholder:text-[#e87726] placeholder:text-sm placeholder:font-bold" />
                        <input type="text" placeholder="First Name" className="border rounded-md  border-[#e87726] p-3 w-full placeholder:text-[#e87726] placeholder:text-sm placeholder:font-bold" />
                        <input type="text" placeholder="Phone" className="border rounded-md  border-[#e87726] p-3 w-full placeholder:text-[#e87726] placeholder:text-sm placeholder:font-bold" />
                        <Button text='start today!' width={true} />
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Home