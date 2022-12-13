import FooterStyle from '../../styles/components/layout/FooterStyle'

function Footer({ bgColor, color }: { bgColor?: string, color?: string }) {
  return (
    <div style={{
      backgroundColor: bgColor,
      color
    }} className={FooterStyle}>
      <div className='wrapper'>
        <span>Follow us:</span>
        <span>
          <a href="https://www.facebook.com/WarnerMediaPrensaLatam" style={{ color }} target="_blank" rel="noopener noreferrer"> Facebook </a>
          /
          <a href="https://instagram.com/warnermediaprensalatam?utm_medium=copy_link" style={{ color }} target="_blank" rel="noopener noreferrer"> Instagram </a>
          {/* /
          <a href="https://www.twitter.com/hbomaxla/" style={{ color }} target="_blank" rel="noopener noreferrer"> Twitter </a>
          /
          <a href="https://www.youtube.com/hbomaxla/" style={{ color }} target="_blank" rel="noopener noreferrer"> Youtube </a> */}
        </span>
        <div className='politics'>
          <span>© 2021 WarnerMedia Direct Latin America, LLC. All rights reserved. HBO Max is used under license.</span>
          <span><a href="/" style={{ color }}> Privacy </a>  - <a href="/" style={{ color }}> Terms of use </a>  -  <a href="/" style={{ color }}> Press announcements </a>  -  <a href="/" style={{ color }}> Press contacts </a>  -  <a href="/" style={{ color }}> Manage preferences </a> </span>
        </div>
      </div>
    </div>
  )
}

export default Footer