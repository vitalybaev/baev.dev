import { FC } from "react";

const MainPage: FC = () => {
  return (
    <>
      <h1 className="font-sans font-extrabold text-4xl">Виталий Баев</h1>
      <p className="mt-2">Front-end разработчик</p>
      <p className="mt-2">JavaScript, TypeScript, React, Redux</p>
      {/*
        <p className="mt-2">
          <span className="opacity-50">🇷🇺 Москва &rarr; 🇹🇭 Бангкок &rarr; </span>
          🇧🇾 Минск
        </p>
      */}
      <div className="mt-6">
        <a href="mailto:ping@baev.dev">ping@baev.dev</a>
      </div>
    </>
  );
};

export default MainPage;
