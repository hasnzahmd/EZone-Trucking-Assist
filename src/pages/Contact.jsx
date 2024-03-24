const Contact = () => {
  return (
    <div className="flex flex-col items-center w-full">
      <div className="container">
        <div className="flex justify-center py-16 items-center gap-12 mobile:flex-col mobile:px-0">
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
                <i className="fas fa-phone-alt text-blue-400"></i>
                +1 786 758 9800
              </div>
              <div className="flex items-center gap-1">
                <i className="fas fa-envelope text-yellow-300"></i>
                hello@truckingassist.com
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <div className="text-xl font-bold">Affiliation Relations :</div>
              <a className="hover:text-primary hover:cursor-pointer" href="g">
                <i className="fas fa-envelope text-yellow-300"></i>
                affiliation@truckingassist.com
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
                  className="input input-bordered input-accent placeholder:text-accent w-full"
                />
                <input
                  type="text"
                  placeholder="Email*"
                  className="input input-bordered input-accent placeholder:text-accent w-full"
                />
                <input
                  type="text"
                  placeholder="Phone*"
                  className="input input-bordered input-accent placeholder:text-accent w-full"
                />
                <div>
                  <textarea
                    className="w-full h-full textarea input-accent input input-bordered placeholder:text-accent"
                    placeholder="Message"
                  ></textarea>
                </div>
              </div>
              <div className="btn btn-accent w-full">Send Messege</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
