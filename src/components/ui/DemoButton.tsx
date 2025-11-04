interface DemoButtonProps {
  href: string;
}

const DemoButton: React.FC<DemoButtonProps> = ({href}) => {
  const black = (<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
  <path d="M1 11L11 1M11 1H3.5M11 1V8.5" stroke="#0E0A0F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>);
const white = (<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
  <path d="M3 13L13 3M13 3H5.5M13 3V10.5" stroke="#FCF5FE" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>);
console.log( black, white);
    return (         <a className="demo-btn " href={href}>
            <div className="text">
                Liên hệ demo
                  </div>
                <span className="icon-container">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
  <path d="M3 13L13 3M13 3H5.5M13 3V10.5" stroke="#FCF5FE" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
                </span>
          

            </a>)
}
export default DemoButton;