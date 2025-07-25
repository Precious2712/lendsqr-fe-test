'use client';

import { AlignRight, Bell, ChevronDown, Search } from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { useState } from "react";
import { SideBar } from "../sideBarComp/SideBar";
import styles from './navStyle/nav.module.scss';
import { MainComp } from "../main/MainComp";
import { BellIcon, HeaderLogoOne } from "../svgComp/AllSvgComp";
import Image from "next/image";

export function Header() {
  const [open, setOpen] = useState(false);
  const [openSideNav, setOpenSideNav] = useState(false);

  function handleOpenNavBarOnMobile() {
    setOpen(!open);
  }

  function hadleToggle() {
    setOpenSideNav(!openSideNav)
  }

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.headerInner}>
          <div onClick={hadleToggle} className={styles.logo}>
            <HeaderLogoOne />
          </div>

          <div className={styles.desktopSearch}>
            <div className={styles.searchWrapper}>
              <Input placeholder="Search for anything" className={styles.searchInput} />
              <Button size="sm" className={styles.searchButton}>
                <Search className={styles.searchIcon} />
              </Button>
            </div>
          </div>

          <div className={styles.rightSection}>
            <Button variant="ghost" size="sm" className={styles.docsButton}>
              Docs
            </Button>
            <BellIcon />
            <div className={styles.profileGroup}>
              <Image
                className="rounded-full"
                src={'/86d7f2b572489965cfe49416e536ab3ac00e669a.png'}
                height={10}
                width={25}
                alt="/svg"
              />
              <div className={styles.profileName}>
                <span>Adedeji</span>
                <ChevronDown className={styles.dropdownIcon} />
              </div>
            </div>
          </div>

          <div onClick={handleOpenNavBarOnMobile} className={styles.mobileMenuIcon}>
            <AlignRight />
          </div>
        </div>
      </div>

      <div className="block lg:hidden">
        <div className={` ${open ? styles.mobileMenuOpen : styles.mobileMenuClosed}`}>
          <div className={styles.mobileMenu}>
            <div className={styles.mobileGroup}>
              <Button variant="ghost" size="icon">
                <Bell className={styles.bellIcon} />
              </Button>
              <span className={styles.docs}>Docs</span>
            </div>

            <div className={styles.mobileGroup}>
              <div className={styles.profileAvatar}></div>
              <div className={styles.profileName}>
                <span>Adedeji</span>
                <ChevronDown className={styles.dropdownIcon} />
              </div>
            </div>

            <div className={styles.searchWrapper}>
              <Input placeholder="Search for anything" className={styles.searchInput} />
              <Button size="sm" className={styles.searchButton}>
                <Search className={styles.searchIcon} />
              </Button>
            </div>
          </div>
        </div>
      </div>

      <main className={styles.main}>
        {/* Mobile View */}
        <div className="block lg:hidden">
          <div className={`${openSideNav ? 'block' : 'hidden'} fixed w-[95%] overflow-x-hidden z-40 h-[100vh]`}>
            <SideBar />
          </div>

          <div className="w-[98%] m-auto">
            <MainComp />
          </div>
        </div>

        {/* Desktop View */}

        <div className="hidden lg:flex">
          <div className={styles.sidebarWrapper}>
            <SideBar />
          </div>

          <div className="ml-[216px] w-[calc(100%-220px)] overflow-x-hidden">
            <MainComp />
          </div>
        </div>
      </main>

    </div>
  );
}