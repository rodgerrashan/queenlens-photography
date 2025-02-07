interface AdMsgProps {
    title: string;
    description: string;
    button_text: string;
    bg_image: string;
  }
  
  const AdMsg: React.FC<AdMsgProps> = ({ title, description, button_text, bg_image }) => {
    return (
      <div style={{ backgroundImage: `url(${bg_image})` }}>
        <h1>{title}</h1>
        <p>{description}</p>
        <button>{button_text}</button>
      </div>
    );
  };

  export default AdMsg;