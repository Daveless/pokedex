const Header = () => {
  return (
    <header className="pt-[40px] flex justify-end">
      <div className="w-full bg-black h-[65px] z-20 absolute right-0 left-0 top-0"></div>
      <div className="w-full bg-red-600 h-[45px] z-30 absolute right-0 left-0 top-0">
        <img className="w-[12rem] ml-4 absolute top-4" src="/imgs/auth/image11.png" alt="" />
      </div>
      <div className="w-[55px] bg-black h-[55px] rounded-[50%] z-40 absolute top-7 mr-3 flex align-center items-center justify-center m-[auto]">
        <div className="w-[44px] bg-white h-[44px] rounded-[50%] z-40 absolute flex align-center items-center justify-center content-center">
          <div className="w-[30px] bg-black h-[30px] rounded-[50%] z-50 absolute flex align-center items-center justify-center content-center">
            <div className="w-[19px] bg-white/10 h-[19px] rounded-[50%] z-50 absolute"></div>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;
