import Link from 'next/link';
import { NavLinkContainer } from './styles';
import { useRouter } from 'next/router';

import React from 'react';
import { Anchor } from 'antd';


interface Props {
  title: string;
  path: string;
}

export default function NavLink({ title, path}: Props) {
    const router = useRouter();

    const isActive = router.pathname === path;
    
    return (
        <NavLinkContainer isActive={isActive}>
          {/* <Anchor> </Anchor> */}
          
          <Link  href={path}>
            <a>{title}</a>
          </Link>
        </NavLinkContainer>
    )
}