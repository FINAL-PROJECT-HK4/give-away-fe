function InformationInvite() {
  return (
    <div className="flex w-full flex-col justify-between gap-3 px-4 mt-5">
      <div className="flex flex-col gap-2 rounded-2xl shadow-[0px_0px_16px_0px_rgba(0,0,0,0.04)] [background:rgba(28,28,28,0.80)] p-4">
        <p className="text-[18px] font-semibold leading-[21px] tracking-[-0.36px] text-white]">
          How it works
        </p>
        <div className="flex flex-col items-start gap-2">
          <div className="flex gap-[32px]">
            <div className="relative z-10 flex-shrink-0 h-[60px]">
              <div className="z-10 flex h-6 w-6 flex-col items-center justify-center rounded-full text-[15px] font-bold leading-[15px] text-white [background:linear-gradient(180deg,#B0CDDF_0%,#95A9B5_100%)]">
                1
              </div>
              <div className="absolute bottom-0 left-[50%] top-0 -z-10 h-full w-[3px] translate-x-[-50%] rounded-[2px] bg-[rgba(0,0,0,0.06)]"></div>
            </div>
            <div className="flex flex-col gap-1">
              <h4 className="h4-semibold">Invite a Fren</h4>
              <p className="p-gray text-lg leading-[21px]">
                Share or send a link
              </p>
            </div>
          </div>
          <div className="flex gap-[32px]">
            <div className="relative z-10 flex-shrink-0 h-[60px]">
              <div className="z-10 flex h-6 w-6 flex-col items-center justify-center rounded-full text-[15px] font-bold leading-[15px] text-white [background:linear-gradient(180deg,#B0CDDF_0%,#95A9B5_100%)]">
                2
              </div>
              <div className="absolute bottom-0 left-[50%] top-0 -z-10 h-full w-[3px] translate-x-[-50%] rounded-[2px] bg-[rgba(0,0,0,0.06)]"></div>
            </div>
            <div className="flex flex-col gap-1">
              <h4 className="h4-semibold">Fren joins BTP</h4>
              <p className="p-gray text-lg leading-[21px]">
                Creates an account on Points
              </p>
            </div>
          </div>
          <div className="flex gap-[32px]">
            <div className="relative z-10 flex-shrink-0 h-[60px]">
              <div className="z-10 flex h-6 w-6 flex-col items-center justify-center rounded-full text-[15px] font-bold leading-[15px] text-white [background:linear-gradient(180deg,#B0CDDF_0%,#95A9B5_100%)]">
                3
              </div>
              <div className="absolute bottom-0 left-[50%] top-0 -z-10 h-full w-[3px] translate-x-[-50%] rounded-[2px] bg-[rgba(0,0,0,0.06)] hidden"></div>
            </div>
            <div className="flex flex-col gap-1">
              <h4 className="h4-semibold">Get bonuses</h4>
              <p className="p-gray text-lg leading-[21px]">Points </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InformationInvite;
