"use client";

import Image from "next/image";
import React, { useState } from "react";
import UserIcon from "@/components/UserIcon";
import PagePadding from "@/components/PagePadding";
import { FaChromecast } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import Logo from "@/components/elements/Logo";
import Navigator from "./elements/Navigator";

const HeaderDrawer = ({ children }) => {
  const [isopen, setIsOpen] = useState(false);

  return (
    <Drawer direction="left" open={isopen} onOpenChange={setIsOpen}>
      <DrawerTrigger>{children}</DrawerTrigger>
      <DrawerContent className="w-[240px] h-full">
        {/* 로고 */}
        {/* 네비게이션, 재싱목록 */}
        <div className="py-3">
          <div className="px-3">
            <Logo
              isInDrawer={true}
              onClickClose={() => {
                setIsOpen(false);
              }}
            ></Logo>
          </div>
          <Navigator />
        </div>
      </DrawerContent>
    </Drawer>
  );
};

const Header = ({ children }) => {
  return (
    <header className="relative overflow-y-auto w-full h-full">
      {/* bgSection */}
      <section className="absolute top-0 w-full">
        <div className="relative h-[400px] w-full">
          <Image
            alt="mediaItem"
            className="object-cover"
            fill
            src="https://images.unsplash.com/photo-1707833558984-3293e794031c"
          />
        </div>
        <div className="absolute h-[400px] top-0 bg-black opacity-40 w-full"></div>
        <div className="absolute h-[400px] top-0 bg-gradient-to-t from-black w-full"></div>
      </section>
      {/* search section */}
      <section className="sticky">
        <PagePadding>
          <div className="h-[64px] flex fles-row justify-between items-center">
            <article className="hidden lg:flex flex-row items-center h-[42px] min-w-[480px] bg-[rgba(0,0,0,0.14)] rounded-2xl px-[16px] gap-[16px]">
              <div>
                <FiSearch size={24}></FiSearch>
              </div>
              <input
                type="text"
                className="h-full w-full bg-transparent"
                placeholder="노래, 앨범, 아티스트, 팟캐스트 검색"
              />
            </article>
            <HeaderDrawer>
              <article className="lg:hidden">
                <Logo />
              </article>
            </HeaderDrawer>
            <article className="flex flex-row gap-6 items-center">
              <FaChromecast size={26} />
              <UserIcon></UserIcon>
            </article>
          </div>
        </PagePadding>
      </section>
      <section className="relative">{children}</section>
    </header>
  );
};

export default Header;
