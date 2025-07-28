import './Footer.scss';

const Footer = () => {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  return (
    <footer>
      <div className="container">
        <div className="st-copyright-wrap text-center">
          <div className="st-copyright-text">Designed and developed by Shahriar. © {currentYear}.  All right reserved.</div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;
