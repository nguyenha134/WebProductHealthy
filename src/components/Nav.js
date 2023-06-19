import React from 'react'
import { styled } from 'styled-components'

const Nav = () => {
    const Nav = styled.nav`
        .navbar-lists {
            display: flex;
            gap: 4.8rem;
            align-items: center;

            .navbarlink {
                &:link,
                &:visited {
                    display: inline-block;
                    text-decoration: none;
                    font-size: 1.8rem;
                    font-weight: 500;
                    text-transform: uppercase;
                    color: ${({ theme }) => theme.colors.black};
                    transition: color 0.3s linear;
                }

                &:hover,
                &:active {
                    color: ${({ theme }) => theme.colors.helper};
                }
            }

            .mobile-navbar-btn {
                display: none;
                background-color: transparent;
                cursor: pointer;
                border: none;
            }

            .mobile-nav-icon[name="close-outline"] {
                display: none;
            }

            .close-outline {
                display: none;
            }

            .cart-trolley--link {
                position: relative;
            }

            .cart-trolley {
                position: relative;
                font-size: 3.2rem;
            }

            .cart-total--item{
                width: 2.4rem;
                height: 2.4rem;
                position: absolute;
                background-color: #000;
                color: #000;
                border-radius: 50%;
                display: grid;
                place-items: center;
                top: -20%;
                left: 70%;
                background-color: ${({ theme }) => theme.colors.helper};
            }
        }

        .user-login--name{
            text-transform: capitalize;
        }

        .user-logout,
        .user-login {
            font-size: 1.4rem;
            padding: 0.8rem 1.4rem;
        }

        @media (max-width: ${({ theme }) => theme.media.mobile}){
            .mobile-navbar-btn {
                display: inline-block;
                z-index: 9999;
                border: ${({ theme }) => theme.colors.black};
        
                .mobile-navbar-icon {
                    font-size: 4.2rem;
                    
                }
            }
        }


    `
  return (
    <div>Nav</div>
  )
}

export default Nav