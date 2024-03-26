import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import Button from "../components/Button";

const Contact = () => {
  return (
    <div className="flex flex-col items-center w-full">
      <div className="container">
        <div className="flex justify-center py-14 items-center gap-12 flex-col sm:flex-row">
          <div className="w-full grid gap-8">
            <div className="flex flex-col gap-2">
              <div className="text-xl font-bold">Support Office</div>
              <div>16 Wall Street, New York City, NY - 10005, USA</div>
            </div>
            <div className="flex flex-col gap-2">
              <div className="text-xl font-bold">Head Office</div>
              <div>128, City Road, London - EC1V 2NX, UK</div>
            </div>
            <div className="flex flex-col gap-2">
              <div className="text-xl font-bold">Contact Details :</div>
              <div className="flex items-center gap-1">
                <FaPhoneAlt color="#60a5fa"/>
                +1 786 758 9800
              </div>
              <div className="flex items-center gap-1">
                <IoMdMail color="#fde047"/>
                hello@truckingassist.com
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <div className="text-xl font-bold">Affiliation Relations :</div>
              <a className="hover:text-primary hover:cursor-pointer flex items-center" href="g">
                <IoMdMail color="#fde047" />
                &nbsp;affiliation@truckingassist.com
              </a>
            </div>
          </div>
          <div className="w-full">
            <div className="flex flex-col gap-8">
              <div>
                <div className="p-2 font-bold text-2xl">
                  Get In Touch With Us
                </div>
                <div>
                  To better understand how we can help you grow your business.
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <input
                  type="text"
                  placeholder="Name*"
                  className="border border-[#e87726] rounded-md py-3 px-3 w-full placeholder:text-[#e87726] placeholder:text-sm"
                />
                <input
                  type="text"
                  placeholder="Email*"
                  className="border border-[#e87726] rounded-md py-3 px-3 w-full placeholder:text-[#e87726] placeholder:text-sm"
                />
                <input
                  type="text"
                  placeholder="Phone*"
                  className="border border-[#e87726] rounded-md py-3 px-3 w-full placeholder:text-[#e87726] placeholder:text-sm"
                />
                <div>
                  <textarea
                    className="h-full border border-[#e87726] rounded-md py-3 px-3 w-full placeholder:text-[#e87726] placeholder:text-sm"
                    placeholder="Message"
                  ></textarea>
                </div>
              </div>
              <Button text='send message' width={true}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
