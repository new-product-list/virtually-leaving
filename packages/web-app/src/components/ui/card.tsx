interface CardProps {
  bodyText: string;
}

export const Card: React.FC<CardProps> = ({ bodyText }) => (
  <div className="card">{bodyText}</div>
);

export default Card;
