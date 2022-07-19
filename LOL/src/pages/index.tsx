import * as React from 'react';
import axios from 'axios';
import { CHAMPION_ICON_IMG_URL } from '../config';
import { Tag } from '../components';
export default function LandingPage(data: any) {
  const { data: datas } = data;
  const { data: champions } = datas;
  const [count, setCount] = React.useState(null);
  React.useEffect(() => {
    Object.keys(champions).map((name: string) => {
      champions[name].count = 0;
    });
    setCount({ ...champions });
    window.localStorage.setItem('count', JSON.stringify(count));
  }, [data]);

  const increaseCount: any = (name: string) => {
    const target = count[name];
    target.count += 1;
    setCount({ ...count, [name]: { ...target } });
  };
  const decreaseCount: any = (name: string) => {
    const target = count[name];
    if (target.count === 0) {
      return;
    } else if (target.count >= 1) {
      target.count -= 1;
      setCount({ ...count, [name]: { ...target } });
    }
  };
  return (
    <React.Fragment>
      {Object.keys(champions).map((name: string, index: Number) => {
        return (
          <div key={`${index}`} className="championSections">
            <img src={`${CHAMPION_ICON_IMG_URL}${champions[name].image.full}`} alt={name} onClick={() => increaseCount(name)} />
            <span style={{ fontWeight: 700 }}>{name}</span>
            {count && count[name] ? (
              <div className="playCount">
                <span className="howManyPlay">{count[name].count}회</span> 플레이 했습니다.
              </div>
            ) : null}
            <Tag onClick={() => decreaseCount(name)} />
          </div>
        );
      })}
    </React.Fragment>
  );
}
export async function getServerSideProps() {
  const { data } = await axios({
    url: `http://ddragon.leagueoflegends.com/cdn/12.8.1/data/en_US/champion.json`,
    method: 'get',
  });

  return {
    props: { data }, // will be passed to the page component as props
  };
}
