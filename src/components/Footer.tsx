import { BsGithub } from 'react-icons/bs';
import styled from 'styled-components';
import { useAppDispatch } from '@hooks/useRedux';

import { openToPopup } from '@src/features/open-to-popup';
import { copyText } from '@src/features/copy-text';
import ToastEvent from '@src/ToastEvent';
import { getToastAction } from '@src/store/slices/toastSlice';

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
        <div>
          <p>© 2021 - All rights reserved</p>
        </div>
        <div className="flex">
          <p>
            Created by: <strong>HyeonMin Shin </strong>
            <u className="text-teal-500 font-semibold cursor-pointer" onClick={copyEventHandler}>
              gusals121234@gmail.com
            </u>
          </p>
          <BsGithub
            className="ml-2 cursor-pointer"
            size={20}
            onClick={() => openToPopup('https://www.github.com/shinmini')}
          />
        </div>
      </Content>
      <ToastEvent />
    </Container>
  );
};

export default Footer;
