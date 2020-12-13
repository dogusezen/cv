import React from "react";
import "./styles.css";
import Facebook from "src/images/icons/facebook.svg";
import Instagram from "src/images/icons/instagram.svg";
import Youtube from "src/images/icons/youtube.svg";
import Telegram from "src/images/icons/telegram.svg";
import Whatsapp from "src/images/icons/whatsapp.svg";
import Linkedin from "src/images/icons/linkedin.svg";

const SocialNetworks = () => {
  return (
    <aside className="socials">
      <a href="https://www.facebook.com/dogu.sezen.3" className="social-link" target="_blank">
        <Facebook />
      </a>
      <a href="https://www.instagram.com/dogusezen" className="social-link" target="_blank">
        <Instagram />
      </a>
      <a href="https://www.youtube.com/channel/UC5piPPni4JJ-jyqpnQHptRA?view_as=subscriber" className="social-link" target="_blank">
        <Youtube />
      </a>
      <a href="https://t.me/dogusezen" className="social-link" target="_blank">
        <Telegram />
      </a>
      <a href="https://wa.me/message/PRYQ6UNVCXSBK1" className="social-link" target="_blank">
        <Whatsapp />
      </a>
      <a href="" className="social-link" target="_blank">
        <Linkedin />
      </a>
    </aside>
  );
};

export default SocialNetworks;
