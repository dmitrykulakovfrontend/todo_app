"use client";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import React from "react";
import MoonIcon from "./icons/MoonIcon";
import SunIcon from "./icons/SunIcon";
import { toggleTheme } from "@/redux/store/themeSlice";

type Props = {
  children: React.ReactNode;
};

function Theme({ children }: Props) {
  const dispatch = useAppDispatch();
  const currentTheme = useAppSelector((state) => state.theme.themeValue);
  return (
    <div className={currentTheme}>
      <div className=" dark:bg-gradient-to-b dark:from-black dark:to-gray-600">
        <div
          className="absolute flex items-center justify-center w-10 h-10 bg-white rounded-full cursor-pointer bottom-2 left-2 dark:bg-black"
          onClick={() => dispatch(toggleTheme())}
        >
          {currentTheme === "light" ? (
            <MoonIcon className="w-8 h-8" />
          ) : (
            <SunIcon className="w-8 h-8 text-yellow-300" />
          )}
        </div>
        {children}
      </div>
    </div>
  );
}

export default Theme;
