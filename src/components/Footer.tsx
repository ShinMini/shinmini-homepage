import { BsGithub } from 'react-icons/bs';
import styled from 'styled-components';
import { useAppDispatch } from '@hooks/useRedux';

import { copyText } from '@src/features/copy-text';
import ToastEvent from '@src/ToastEvent';
import { getToastAction } from '@src/store/slices/toastSlice';
import { Link } from 'react-router-dom';

const Container = styled.div`
  width: 100%;
  height: 50px;
  background-color: #000;
`;
const Content = styled.div`
  width: 100%;
  height: 100%;
  margin: auto;
  color: #fff;
  display: flex;
  justify-content: space-between;
  padding: 0 2rem;
  font-size: 0.8rem;
  align-items: center;
`;

const Footer = () => {
  const dispatch = useAppDispatch();

  const copyEventHandler: React.MouseEventHandler<HTMLElement> = e => {
    const message = e.currentTarget.textContent;
    if (copyText(message)) {
      dispatch(getToastAction({ message: `Copied!: ${message}` }));
    }
  };

  return (
    <Container>
      <Content>
        <div className="flex">
          <p>© 2021 - All rights reserved</p>
          <Link to="/terms/#terms-of-services" className="ml-2 cursor-pointer text-gray-300">
            Terms of Use
          </Link>
          <p className="ml-2">|</p>
          <Link to="/terms/#privacy-policy" className="ml-2 cursor-pointer text-gray-300">
            Privacy Policy
          </Link>
        </div>
        <div className="flex">
          <p>
            Created by: <strong>HyeonMin Shin </strong>
            <u className="text-teal-500 font-semibold cursor-pointer" onClick={copyEventHandler}>
              gusals121234@gmail.com
            </u>
          </p>
          <Link
            to="https://www.github.com/shinmini"
            className="ml-2 cursor-pointer"
            rel="noopener noreferrer"
            target="_blank">
            <BsGithub className="ml-2 cursor-pointer" size={20} />
          </Link>
        </div>
      </Content>
      <ToastEvent />
    </Container>
  );
};

export default Footer;
