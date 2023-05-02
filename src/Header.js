import React, { useEffect, useRef, useState } from 'react';
import styles from './Header.module.css';

const quotes = [
  {
    quote: '아무리 기적 이어도 시간이 좀 걸린단다.',
    author: '신데렐라',
  },
  { quote: '포기한다면 넌 바보일 뿐이야.', author: '알라딘' },
  {
    quote: '최고의 순간은 갑자기 찾아오는 거야.',
    author: '니모를 찾아서',
  },
  {
    quote: '날 나답게 만드는 것들이 날 특별하게 만들어.',
    author: '곰돌이 푸',
  },
  {
    quote: '오늘 특별한 순간들은 내일의 추억이에요.',
    author: '알라딘',
  },
  {
    quote: '넌 이 세상 어떤 것보다 의미 있어 나한텐 ',
    author: '피터팬',
  },
  {
    quote: '난 지금 잠깐 넘어졌지만 다시 일어날거야.',
    author: '밤비',
  },
  {
    quote: '널 억누르던 것들이 널 일으켜 줄거야.',
    author: '맘보',
  },
  {
    quote: '매일 행복할 순 없지만, 행복한 것들은 매일 있어.',
    author: '곰돌이 푸',
  },
  {
    quote: '우리가 꿈을 추구할 용기가 있다면, 우리의 모든 꿈은 실현될 수 있다.',
    author: '월트디즈니',
  },
];

const Header = () => {
  const [date, setDate] = useState(new Date());
  const [newDate, setNewDate] = useState();
  const [randomQuote, setRandomQuote] = useState(
    quotes[Math.floor(Math.random() * quotes.length)]
  );
  console.log(randomQuote);

  //   setInterval(() => {
  //     if (date !== new Date()) {
  //       setDate(new Date());
  //     }
  //   }, 1000);

  useEffect(() => {
    setNewDate(date.toLocaleString());
  }, [date]);

  return (
    <>
      <div className={styles.date}>
        <div>
          오늘의 명언 : {randomQuote.quote} -{randomQuote.author}-
        </div>
        <div>{newDate}</div>
      </div>
    </>
  );
};

export default Header;
