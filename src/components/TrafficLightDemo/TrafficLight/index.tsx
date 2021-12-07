import {
  FC,
  useEffect,
  useState,
  useCallback,
  useRef,
  ChangeEvent,
  forwardRef,
  useImperativeHandle,
} from 'react';
import './index.less';

import Lamp from './Lamp/index';
import type { ILamp } from './Lamp/index';

export type LampListType = ILamp[];

interface ITrafficLightProps {
  minutes: number;
  lampList: LampListType;
}

export interface TrafficLightInstance {
  run: () => void;
  stop: () => void;
  changeDirection: () => void;
}

const useRunTrafficLight = (length: number, minutes: number) => {
  const [_, forceUpdate] = useState({});
  const index = useRef<number>(0);
  const isNext = useRef<boolean>(false);
  const timer = useRef<NodeJS.Timer | null>(null);

  useEffect(() => {
    run();
    return () => {
      clearInterval(timer.current!);
    };
  }, []);

  useEffect(() => {
    stop();
    run();
  }, [minutes]);

  // 播放
  const run = useCallback(() => {
    if (timer.current) return;
    timer.current = setInterval(() => {
      if (index.current === length - 1) {
        isNext.current = false;
      }
      if (index.current === 0) {
        isNext.current = true;
      }
      isNext.current ? index.current++ : index.current--;
      forceUpdate({});
    }, minutes * 1000);
  }, [timer, length, minutes]);

  // 停止
  const stop = useCallback(() => {
    clearInterval(timer.current!);
    timer.current = null;
  }, [timer.current]);

  // 改变方向
  const changeDirection = useCallback(() => {
    isNext.current = !isNext.current;
  }, [isNext]);

  return {
    activeIndex: index.current,
    run,
    stop,
    changeDirection,
  };
};

const TrafficLight = forwardRef<TrafficLightInstance, ITrafficLightProps>(
  (props, ref) => {
    const { activeIndex, stop, run, changeDirection } = useRunTrafficLight(
      props.lampList.length,
      props.minutes,
    );

    // 暴露内部方法
    useImperativeHandle(
      ref,
      () => {
        return {
          run,
          stop: () => stop(),
          changeDirection,
        };
      },
      [run, stop, changeDirection],
    );

    return (
      <div className="traffic-light">
        {props.lampList.map((lamp, index) => {
          return (
            <Lamp
              type={lamp.type}
              key={`${lamp.type + index}`}
              isActive={index === activeIndex}
            />
          );
        })}
      </div>
    );
  },
);

export default TrafficLight;
