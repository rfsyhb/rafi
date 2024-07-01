import React from 'react';

function Footer() {
  return (
    <footer className="bg-card1 text-text p-4 mt-8">
      <div className="container mx-auto text-center">
        <p>
          Contact us: abcfood@example.com | 0821-5444-9091 | Bandeng 5 Street
        </p>
        <div className="flex justify-center mt-2 flex-row gap-2">
          <a
            href="https://github.com/rfsyhb"
            target="_blank"
            className="hover:text-blue-400"
          >
            Facebook
          </a>
          <a
            href="https://github.com/rfsyhb"
            target="_blank"
            className="hover:text-blue-400"
          >
            Twitter
          </a>
          <a
            href="https://github.com/rfsyhb"
            target="_blank"
            className="hover:text-blue-400"
          >
            Instagram
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
