import React from "react"

const Footer = () => {
  return (
    <header className="footer">
      <p>
        By{" "}
        <a
          className="footer-link"
          href="https://github.com/jessand77"
          target="_blank"
          rel="noopener noreferrer"
          title="GitHub Jessica Sandler"
        >
          Jessica Sandler
        </a>
        ,{" "}
        <a
          className="footer-link"
          href="https://github.com/Laura-Sjolander"
          target="_blank"
          rel="noopener noreferrer"
          title="GitHub Laura Sjölander"
        >
          Laura Sjölander
        </a>
        {" "}&amp;{" "}
        <a
          className="footer-link"
          href="https://github.com/nadialefebvre"
          target="_blank"
          rel="noopener noreferrer"
          title="GitHub Nadia Lefebvre"
        >
          Nadia Lefebvre
        </a>
      </p>
    </header>
  )
}

export default Footer
