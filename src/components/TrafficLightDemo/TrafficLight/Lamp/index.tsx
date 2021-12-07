import { FC } from 'react';
import './index.less';

export type LampType = 'red' | 'yellow' | 'green';

export interface ILamp {
  type: LampType;
  isActive?: boolean;
}

const Lamp: FC<ILamp> = (props) => {
  return (
    <div
      className={`lamp ${props.type} ${props.isActive ? 'active' : ''}`}
    ></div>
  );
};

export default Lamp;
