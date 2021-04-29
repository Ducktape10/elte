import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Dimmer, Loader } from "semantic-ui-react";
import { changeCat } from "../redux/actions/CatAction";

const EasterEggView = () => {

  const [url, setUrl] = useState('');
  const [isLoading, setLoading] = useState(true);

  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      const data = await fetch('https://api.thecatapi.com/v1/images/search?breed_ids=beng', {
        headers: {
          'x-api-key': '850b55b1-5e91-4144-8154-6111ff1afb95'
        }
      });
      const json = await data.json();

      setLoading(false);
      setUrl(json[0].url);

      dispatch(changeCat({
        name: json[0].breeds[0].name,
        description: json[0].breeds[0].description,
        wikipedia_url: json[0].breeds[0].wikipedia_url
      }));

    })();

  }, [dispatch]);

  return (
    <div>
      <Dimmer active={isLoading}>
        <Loader active={isLoading}/>
      </Dimmer>

      {!isLoading ?
        <img src={url} alt='Macs kép' /> :
        null
      }
    </div>
  );
};

export default EasterEggView;
