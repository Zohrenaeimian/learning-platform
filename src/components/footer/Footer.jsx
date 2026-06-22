import "./Footer.css";

import {
  FaInstagram,
  FaTelegram,
  FaLinkedin,
  FaGithub,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";

function Footer() {
  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#a2d9ff"
          d="m0 256 26.7 10.7C53.3 277 107 299 160 277.3 213.3 256 267 192 320 170.7c53.3-21.7 107 .3 160 21.3 53.3 21 107 43 160 48 53.3 5 107-5 160-21.3 53.3-15.7 107-37.7 160-32 53.3 5.3 107 37.3 160 58.6 53.3 21.7 107 31.7 160 26.7 53.3-5 107-27 133-37.3l27-10.7v96H0Z"
        ></path>
      </svg>
      <footer>
        <div className="main-content">
          {/* درباره ما */}
          <div className="box">
            <h2>درباره ما</h2>

            <div className="content">
              <p>
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                استفاده از طراحان گرافیک است. هدف ما ارائه محتوای آموزشی با
                کیفیت و کاربردی برای توسعه‌دهندگان است.
              </p>

              <div className="social">
                <a href="#">
                  <FaInstagram />
                </a>

                <a href="#">
                  <FaTelegram />
                </a>

                <a href="#">
                  <FaLinkedin />
                </a>

                <a href="#">
                  <FaGithub />
                </a>
              </div>
            </div>
          </div>

          {/* راه های ارتباطی */}
          <div className="box">
            <h2>راه های ارتباطی</h2>

            <div className="content">
              <div className="contact-item">
                <FaMapMarkerAlt />
                <span>تهران، ایران</span>
              </div>

              <div className="contact-item">
                <FaPhoneAlt />
                <span>0912 123 4567</span>
              </div>

              <div className="contact-item">
                <FaEnvelope />
                <span>info@learning-platform.com</span>
              </div>
            </div>
          </div>

          {/* فرم تماس */}
          <div className="box">
            <h2>تماس با ما</h2>

            <div className="content">
              <form>
                <div className="form-group">
                  <label>ایمیل</label>
                  <input type="email" />
                </div>

                <div className="form-group">
                  <label>پیام</label>
                  <textarea rows="4"></textarea>
                </div>

                <button type="submit">ارسال پیام</button>
              </form>
            </div>
          </div>
        </div>

        <div className="bottom">
          <p>تمامی حقوق این وب‌سایت محفوظ است © 2026</p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
