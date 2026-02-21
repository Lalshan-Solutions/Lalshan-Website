import Link from 'next/link';
import { Home, Info, Book, Phone, Search, Close } from '@mui/icons-material';

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <>
      {/* Mobile Backdrop */}
      <div
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-40 transition-opacity duration-300 lg:hidden ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
        onClick={toggleSidebar}
      />

      <div
        className={`fixed inset-y-0 left-0 bg-[#FFFFFF] dark:bg-[#1C2434] border-r border-[#E2E8F0] dark:border-white/10 w-[280px] z-50 transform transition-transform duration-300 ease-in-out lg:hidden ${isOpen ? 'translate-x-0' : '-translate-x-full'} shadow-2xl overflow-y-auto no-scrollbar`}
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 pb-4 border-b border-transparent">
          <Link href="/" className="flex items-center gap-3" onClick={toggleSidebar}>
            <div className="w-9 h-9 bg-primary rounded-lg flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-primary/30">
              L
            </div>
            <div className="text-[22px] font-bold text-[#1C2434] dark:text-white tracking-tight">
              Lalshan
            </div>
          </Link>
          <button
            onClick={toggleSidebar}
            className="p-1.5 rounded-xl hover:bg-[#F3F4F6] dark:hover:bg-white/5 transition-colors lg:hidden text-[#64748B] dark:text-white/60"
          >
            <Close fontSize="small" />
          </button>
        </div>

        {/* Search Bar */}
        <div className="px-6 py-4">
          <div className="relative group">
            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#94A3B8] group-focus-within:text-primary transition-colors">
              <Search fontSize="small" />
            </div>
            <input
              type="text"
              className="block w-full pl-10 pr-4 py-2.5 border border-[#E2E8F0] dark:border-white/10 rounded-[12px] bg-transparent text-[#1C2434] dark:text-white placeholder-[#94A3B8] focus:outline-none focus:ring-0 focus:border-primary text-[15px] transition-all bg-[#F8FAFC] dark:bg-white/5 focus:bg-white dark:focus:bg-[#1C2434] shadow-sm focus:shadow-md"
              placeholder="Search..."
            />
          </div>
        </div>

        {/* Navigation Label */}
        <div className="px-6 pt-4 pb-2">
          <div className="text-[12px] font-bold tracking-[1px] uppercase text-[#8A99AF] flex items-center gap-3">
            Menu
            <div className="h-[1px] flex-1 bg-gradient-to-r from-[#E2E8F0] dark:from-white/10 to-transparent" />
          </div>
        </div>

        {/* Navigation Links */}
        <div className="px-4 py-2 flex flex-col gap-1.5 font-['Inter']">
          {[
            { name: 'Home', icon: <Home fontSize="small" />, path: '/' },
            { name: 'About', icon: <Info fontSize="small" />, path: '/about' },
            { name: 'Contact Us', icon: <Phone fontSize="small" />, path: '/contact' }
          ].map((item, id) => (
            <Link
              key={id}
              href={item.path}
              className="group flex items-center gap-3.5 px-4 py-3 rounded-[10px] text-[#64748B] dark:text-white/70 hover:bg-[#F3F4F6] dark:hover:bg-white/5 hover:text-[#1C2434] dark:hover:text-white transition-all font-medium text-[15px] relative overflow-hidden"
              onClick={toggleSidebar}
            >
              <span className="text-[#94A3B8] group-hover:text-[#1C2434] dark:group-hover:text-white transition-colors flex items-center justify-center w-6">
                {item.icon}
              </span>
              <span className="font-semibold tracking-[0.2px]">{item.name}</span>

              {/* Hover indicator line */}
              <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[4px] h-[0px] bg-primary rounded-r-[4px] transition-all duration-200 group-hover:h-[20px]" />
            </Link>
          ))}
        </div>

        {/* Support Box */}
        <div className="mx-6 mt-8 mb-8 relative group overflow-hidden rounded-[14px]">
          {/* Animated gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary to-[#5A6AEE] transition-transform duration-500 group-hover:scale-110" />

          <div className="relative p-6 text-white text-center">
            <h4 className="font-bold mb-1.5 text-[16px] tracking-wide">Need Help?</h4>
            <p className="text-[13px] text-white/85 mb-5 leading-relaxed">
              Contact our support team for any queries.
            </p>
            <Link
              href="/contact"
              onClick={toggleSidebar}
              className="block w-full text-center bg-white text-primary py-2.5 rounded-[10px] font-bold text-[14px] hover:bg-[#F8FAFC] transition-colors shadow-sm"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
