import { NavLink, Outlet } from 'react-router-dom';
import { BsCartPlusFill } from 'react-icons/bs';
import { FaCalendar, FaCommentAlt, FaHome, FaList } from 'react-icons/fa';
import { BiSolidFoodMenu } from 'react-icons/bi';

const Dashboard = () => {
  return (
    <div className='flex'>
      <div className='w-64 min-h-screen bg-[#D1A054]'>
        <ul className='menu text-xl'>
          <li>
            <NavLink to='/dashboard/userHome'>
              <FaHome></FaHome>
              User Home
            </NavLink>
          </li>
          <li>
            <NavLink to='/dashboard/reservation'>
              <FaCalendar></FaCalendar>
              Reservation
            </NavLink>
          </li>
          <li>
            <NavLink to='/dashboard/review'>
              <FaCommentAlt></FaCommentAlt>
              Add a review
            </NavLink>
          </li>
          <li>
            <NavLink to='/dashboard/cart'>
              <BsCartPlusFill />
              My Cart
            </NavLink>
          </li>
          <li>
            <NavLink to='/dashboard/bookings'>
              <FaList />
              My Bookings
            </NavLink>
          </li>
          <div className='divider'></div>
          <li>
            <NavLink to='/'>
              <FaHome />
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to='/order-food'>
              <BiSolidFoodMenu />
              Menu
            </NavLink>
          </li>
        </ul>
      </div>
      {/* Dashboard cart */}
      <div className='flex-1 p-8'>
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
