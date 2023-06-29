import React from 'react';
import ReactDom from 'react-dom';
import './index.css'


function BookList()
{
  return (
    <section className='booklist'>
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
    );
}

const Book = () => {
  return (
    <article className='book'>
      <Image />
      <TitlBook />
      <Author />
    </article>
  );
}

const Image = () => (<img
  src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.PhNncYEvgNFxi5XULQY4dQHaE8%26pid%3DApi%26h%3D160&f=1&ipt=9cf6a01fb29be28d782d5251c3e59bfc4b4ef41279d719aa4c800686bec8432d&ipo=images"
  alt="" />
);

const TitlBook = () => (
  <h1>Iron Flame (The Empyrean, 2)</h1>
);

const Author = () => (
  <h4>Rebecca Yarros</h4>
);
ReactDom.render(<BookList />, document.getElementById('root'));