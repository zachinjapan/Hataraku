import { useAppContext } from "../context/appContext";
import NavLinks from "./NavLinks";
import Logo from "./Logo";
import styled from "styled-components";
import { FaBitcoin } from "react-icons/fa";

const BigSidebar = (props) => {
  const { showSidebar } = useAppContext();
  return (
    <Wrapper>
      <div
        className={
          showSidebar ? "sidebar-container" : "sidebar-container show-sidebar"
        }
      >
        <div className="content">
          <div className="top-half">
            <header>
              <Logo />
            </header>
            <NavLinks />
          </div>
          <div className="bottom-half ">
            <div>
              <span>Enjoy the app? </span>
              <button className="btn btn-block btn-hipster">
                <a
                  href="https://commerce.coinbase.com/checkout/7bc346ee-f46f-49b0-bcbf-c237244712d7"
                  target={"_blank"}
                >
                  <div>
                    <FaBitcoin color="gold" />
                    <span> Donate With Crypto </span>
                    <script src="https://commerce.coinbase.com/v1/checkout.js?version=201807"></script>
                  </div>
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.aside`
  display: none;
  .bottom-half {
    padding: 20px;
  }
  @media (min-width: 992px) {
    a {
      color: var(--white);
      text-decoration: none;
    }
    display: block;
    box-shadow: 1px 0px 0px 0px rgba(0, 0, 0, 0.1);
    .sidebar-container {
      background: var(--white);
      min-height: 100vh;
      /* height: 100%; */
      width: 250px;
      margin-left: -250px;
      transition: var(--transition);
    }
    .content {
      position: sticky;
      top: 0;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      height: 100vh;
    }
    .show-sidebar {
      margin-left: 0;
    }
    header {
      height: 6rem;
      display: flex;
      align-items: center;
      padding-left: 2.5rem;
    }
    .nav-links {
      padding-top: 2rem;
      display: flex;
      flex-direction: column;
    }
    .nav-link {
      display: flex;
      align-items: center;
      color: var(--grey-500);
      padding: 1rem 0;
      padding-left: 2.5rem;
      text-transform: capitalize;
      transition: var(--transition);
    }
    .nav-link:hover {
      background: var(--grey-50);
      padding-left: 3rem;
      color: var(--grey-900);
    }
    .nav-link:hover .icon {
      color: var(--primary-500);
    }
    .icon {
      font-size: 1.5rem;
      margin-right: 1rem;
      display: grid;
      place-items: center;
      transition: var(--transition);
    }
    .active {
      color: var(--grey-900);
    }
    .active .icon {
      color: var(--primary-500);
    }
  }
`;
export default BigSidebar;
