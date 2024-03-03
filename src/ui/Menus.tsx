import { createContext, useContext, useState } from "react";
import { createPortal } from "react-dom";
import { HiEllipsisVertical } from "react-icons/hi2";
import styled from "styled-components";

const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const StyledToggle = styled.button`
  background: none;
  border: none;
  padding: 0.4rem;
  border-radius: var(--border-radius-sm);
  transform: translateX(0.8rem);
  transition: all 0.2s;

  &:hover {
    background-color: var(--color-grey-100);
  }

  & svg {
    width: 2.4rem;
    height: 2.4rem;
    color: var(--color-grey-700);
  }
`;

const StyledList = styled.ul<{position: {x: number, y: number}}>`
  position: fixed;

  background-color: var(--color-grey-0);
  box-shadow: var(--shadow-md);
  border-radius: var(--border-radius-md);

  right: ${(props) => props.position.x}px;
  top: ${(props) => props.position.y}px;
`;

const StyledButton = styled.button`
  width: 100%;
  text-align: left;
  background: none;
  border: none;
  padding: 1.2rem 2.4rem;
  font-size: 1.4rem;
  transition: all 0.2s;

  display: flex;
  align-items: center;
  gap: 1.6rem;

  &:hover {
    background-color: var(--color-grey-50);
  }

  & svg {
    width: 1.6rem;
    height: 1.6rem;
    color: var(--color-grey-400);
    transition: all 0.3s;
  }
`;

interface IMenusContext {
  openId: number;
  close: () => void; 
  open: (val: number) => void;
}

const MenusContext = createContext<IMenusContext>({openId:-1, close: () => {}, open: () => {} });

const Menus = ({children}:{children: any}) => {
  const [openId, setOpenId] = useState<number>(-1);
  const close = () => setOpenId(-1);
  const open = setOpenId;
  return (
    <MenusContext.Provider value={{openId, close, open}}>{children}</MenusContext.Provider>
  );
};

const Toggle = ({id}: {id: number}) => {
  const {openId, close, open} = useContext(MenusContext);
  const handleClick = () => {
    openId === -1 || openId !== id ? open(id): close();
  }
  return <StyledToggle onClick={handleClick}>
    <HiEllipsisVertical />
  </StyledToggle>
}

const List = ({id, children}: {id: number | undefined, children: any}) => {
  const {openId} = useContext(MenusContext);

  if(openId !== id) return null;

  return createPortal(
    <StyledList position={{x:20, y:20}}>{children}</StyledList>, document.body
  );
}

const Button = ({children}: {children: any}) => {
  return (
    <li>
      <StyledButton>{children}</StyledButton>
    </li>
  )
}
Menus.Menu = Menu;
Menus.Toggle = Toggle;
Menus.List = List;
Menus.Button = Button;


export default Menus;