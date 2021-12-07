import { useState, useRef, ChangeEvent } from 'react';

import TrafficLight from './TrafficLight';
import type { LampListType, TrafficLightInstance } from './TrafficLight';

const lampList: LampListType = [
  {
    type: 'red',
  },
  {
    type: 'yellow',
  },
  {
    type: 'green',
  },
];

const TrafficLightDemo = () => {
  const [minutes, setMinutes] = useState<number>(1);
  const trafficLightRef = useRef<TrafficLightInstance>(null);

  const onChangeMinutes = (e: ChangeEvent<HTMLInputElement>) => {
    const inputValue = +e.target.value;
    setMinutes(inputValue);
  };

  const run = () => {
    trafficLightRef.current?.run();
  };

  const stop = () => {
    trafficLightRef.current?.stop();
  };

  const changeDirection = () => {
    trafficLightRef.current?.changeDirection();
  };

  return (
    <div>
      <TrafficLight
        ref={trafficLightRef}
        lampList={lampList}
        minutes={minutes}
      />
      <input type="text" value={minutes} onChange={onChangeMinutes} />
      <button onClick={run}>播放</button>
      <button onClick={stop}>停止</button>
      <button onClick={changeDirection}>改变方向</button>
    </div>
  );
};

export default TrafficLightDemo;
